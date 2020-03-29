import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {Header, Incident, List} from '../../components';
import api from '../../services/api';
import {
    Title,
    Description, 
} from './styles';

export default function Incidents(){
    const [total, setTotal] = useState(0);
    const [incidents, setIncidents] = useState([]);

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    
    const navigation = useNavigation();
    
    function navigateToDetail(incident){
        navigation.navigate('Detail', {incident});
    }

    async function loadIncidents(){
        if(loading){
            return;
        }

        if(total > 0 && incidents.length === total){
            return;
        }

        setLoading(true);

        const response = await api.get('incidents', {
            params:{ page }
        });

        setIncidents([...incidents,...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadIncidents()
    },[]);

    return(
        <List 
            header={
                <>
                    <Header 
                        total={total}
                    />
                    <Title>Bem-vindo!</Title>
                    <Description>Escolha um dos casos abaixo e salve o dia.</Description>    
                </>}
            onEndReached={loadIncidents}
            onEndReachedThreshold={0.2}
            data={incidents}
            keyExtractor={incident => String(incident.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({item: incident}) => (
                <Incident 
                    Ong={incident.name}
                    Title={incident.title}
                    Value={incident.value}
                    onPress={() => navigateToDetail(incident)} 
                />
            )}
        />
    );
}
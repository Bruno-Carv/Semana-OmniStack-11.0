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
    const navigation = useNavigation();
    
    function navigateToDetail(incident){
        navigation.navigate('Detail', {incident});
    }

    async function loadIncidents(){
        const response = await api.get('incidents');

        setIncidents(response.data);
        setTotal(response.headers['x-total-count']);
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
            data={incidents}
            keyExtractor={incident => String(incident.id)}
            showsHorizontalScrollIndicator={false}
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
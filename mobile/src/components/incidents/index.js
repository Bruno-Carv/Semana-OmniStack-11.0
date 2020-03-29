import React from 'react';
import {Feather} from '@expo/vector-icons';

import {
    IncidentContainer,
    IncidentProperty,
    IncidentValue,
    IncidentTouch,
    IncidentText
} from './styles'; 

export default function Incidents({key, Ong, Title, Value, onPress, City, Uf}){
    return(
        <IncidentContainer>
            <IncidentProperty>ONG:</IncidentProperty>
            {
                (City) ? 
                (
                    <IncidentValue>{Ong} de {City}/{Uf}</IncidentValue>
                ) : 
                (
                    <IncidentValue>{Ong}</IncidentValue>
                )
            }

            <IncidentProperty>CASO:</IncidentProperty>
            <IncidentValue>{Title}</IncidentValue>

            <IncidentProperty>VALOR:</IncidentProperty>
            <IncidentValue>{Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL' }).format(Value)}</IncidentValue>
            {
            (onPress) ? 
                (
                    <IncidentTouch onPress={onPress}>
                        <IncidentText>Ver mais detalhes</IncidentText>
                        <Feather name="arrow-right" size={16} color="#e02041" />
                    </IncidentTouch>
                ) : null
            }
            
        </IncidentContainer>
    );
}
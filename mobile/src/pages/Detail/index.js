import React from "react";
import {Linking} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import { Header, Incident, Button } from '../../components';
import {
    Text, 
    Container, 
    Body, 
    HeroTitle, 
    HeroDiscription, 
    Actions
} from './styles';

export default function Detail(){

    const navigation = useNavigation();
    const route = useRoute();
    
    const incident = route.params.incident;
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL' }).format(incident.value)}.`;

    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&t=${message}`);
    }

    return(
        <>
            <Container>
                <Header 
                    back={true} 
                    styles={{ marginTop: 26, paddingTop: 16, paddingBottom: 40}}
                    onPress={navigateBack}
                />
                <Incident 
                    Ong={incident.name}
                    City={incident.city}
                    Uf={incident.uf}
                    Title={incident.title}
                    Value={incident.value}
                />
                <Body>
                    <HeroTitle>Salve o dia!</HeroTitle>
                    <HeroTitle>Seja o herói desse caso.</HeroTitle>

                    <HeroDiscription>Entre em contato</HeroDiscription>

                    <Actions>
                        <Button 
                            title="WhatsApp"
                            onPress={sendWhatsapp}
                        />
                        <Button 
                            title="E-mail" 
                            onPress={sendMail} 
                        />
                    </Actions>
                </Body>
            </Container>
        </>
    );
}
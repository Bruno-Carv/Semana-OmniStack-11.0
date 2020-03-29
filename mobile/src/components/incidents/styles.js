import Styled from 'styled-components/native';

export const IncidentContainer = Styled.View`
    padding: 24px;
    border-radius: 8px;
    background-color: #FFF;
    margin-bottom: 16px;
`;

export const IncidentProperty = Styled.Text`
    font-size: 14px;
    color: #41414d;
    font-weight: bold;
`;

export const IncidentValue = Styled.Text`
    margin-top: 8px;
    font-size: 15px;
    margin-bottom: 24px;
    color: #737380;
`; 

export const IncidentTouch = Styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const IncidentText = Styled.Text`
    color: #e02041;
    font-size: 15px;
    font-weight: bold;
`;
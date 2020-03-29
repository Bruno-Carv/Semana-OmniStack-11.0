import Styled from 'styled-components/native';

export const Container = Styled.View`
    flex: 1;
    padding: 0 16px;
`;

export const Text = Styled.Text`

`;

export const Body = Styled.View`
    padding: 24px;
    border-radius: 8px;
    background-color: #FFF;
    margin-bottom: 16px;
`;

export const HeroTitle = Styled.Text`
    font-weight: bold;
    font-size: 28px;
    color: #13131a;
    line-height: 30px;
`;

export const HeroDiscription = Styled.Text`
    font-size: 15px;
    color: #737380;
    margin-top: 16px;
`;

export const Actions = Styled.View`
    margin-top: 16px;
    flex-direction: row;
    justify-content: space-between;
`;
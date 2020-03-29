import Styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = Styled.View`
    flex: 1;
    padding: 0 24px;
    padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const Title = Styled.Text`
    font-size: 30px;
    margin-bottom: 16px;
    margin-top: 48px;
    color: #13131a;
    font-weight: bold;
`;

export const Description = Styled.Text`
    font-size: 16px;
    line-height: 24px;
    color: #737380;
`;
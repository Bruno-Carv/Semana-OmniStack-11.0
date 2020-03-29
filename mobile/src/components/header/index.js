import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';
import {HeaderContainer,HeaderImage,HeaderText,HeaderTextBold} from './styles';

import logoImg from '../../assets/logo.png';

export default function Header({back, onPress, styles, total}){
    return(
        <HeaderContainer style={styles}>
            <HeaderImage source={logoImg} />
            {
                (back) ? (
                    <TouchableOpacity onPress={onPress}>
                        <Feather name="arrow-left" size={28} color="#E82041" />
                    </TouchableOpacity>
                ) : (
                    <HeaderText>Total de <HeaderTextBold>{total} casos</HeaderTextBold>.</HeaderText>
                )
            }
        </HeaderContainer>
    );
}
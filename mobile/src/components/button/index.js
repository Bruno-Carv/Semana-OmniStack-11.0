import React from 'react';

import {ButtonHero, ButtonTextHero} from './styles';

export default function ButtonComponent({title, onPress}){
    return(
        <ButtonHero onPress={onPress}>
            <ButtonTextHero>{title}</ButtonTextHero>
        </ButtonHero>
    );
}
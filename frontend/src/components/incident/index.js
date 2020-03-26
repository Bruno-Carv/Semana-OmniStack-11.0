import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import './styles.css';

export default function Incidents({ key, title, description, value }){
    return(
        <li key={key}>
            <strong>CASO:</strong>
            <p>{title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{description}</p>

            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL' }).format(value)}</p>

            <button type="button">
                <FiTrash2 size={20} colro="#a8a8b3" />
            </button>
        </li>
    );
}
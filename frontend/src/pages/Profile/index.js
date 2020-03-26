import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import Incident from '../../components/incident';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function Profile(){

    const [incidents, setIncidents] = useState([]);
    const ongName = sessionStorage.getItem('ongName');
    const ongId = sessionStorage.getItem('ongId');

    useEffect(()=>{
        api.get('profile',{
            headers:{
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data);
        })
    },[ongId]);

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => {
                    return(
                        <Incident 
                            key={incident.id}
                            title={incident.title}
                            description={incident.description}
                            value={incident.value}
                        />
                    );
                })}
            </ul>
        </div>
    );
}
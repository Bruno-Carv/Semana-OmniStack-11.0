import React, { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { toast } from 'react-toastify';

import Incident from '../../components/incident';

import { logout, getToken } from '../../services/auth';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function Profile(){

    const [incidents, setIncidents] = useState([]);
    const ongName = sessionStorage.getItem('ongName');
    const ongId = getToken();

    const history = useHistory();

    useEffect(()=>{
        api.get('profile',{
            headers:{
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data);
        })
    },[ongId]);

    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`,{
                headers:{
                    Authorization: ongId
                }
            });

            setIncidents(incidents.filter(element => element.id !== id));
            toast.success('Deletado com sucesso.');
        }catch(err){
            toast.error('Erro ao deletar caso, tente novamente.');
        }
    }

    function handleLogout(){
        logout();
        toast.info('Sessão finalizada, volte sempre.');
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button" onClick={handleLogout}>
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
                            onClick={() => handleDeleteIncident(incident.id)}
                        />
                    );
                })}
            </ul>
        </div>
    );
}
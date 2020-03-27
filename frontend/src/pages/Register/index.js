import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Input from 'react-input-mask';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handRegister(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };
        try{
            const response = await api.post('ongs',data);
            
            toast.success(`Seu ID de acesso ${response.data.id}`,{
                autoClose: 20000
            });
            history.push('/');
        }catch(err){
            toast.error('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                
                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para o logon
                    </Link>
                </section>
                <form onSubmit={handRegister}>
                    <input 
                        placeholder="Node da ONG" 
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Input 
                        mask='(99) 99999-9999'
                        placeholder="WhatsApp" 
                        value={whatsapp}
                        onChange={(event) => setWhatsapp(event.target.value)}
                        maskChar={null}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                        />
                        <Input 
                            placeholder="UF" 
                            style={{width:80}}
                            value={uf}
                            onChange={(event) => setUf(event.target.value)}
                            mask='aa'
                            maskChar={null}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
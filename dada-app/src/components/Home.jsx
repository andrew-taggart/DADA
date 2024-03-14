import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import home from '../assets/home-icon.png'
import setgoal from '../assets/setgoal-icon.png'
import goal from '../assets/goal-icon.png'

const Home = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState()
    axios.defaults.withCredentials = true

    useEffect(() => {
        axios.get('http://localhost:3001/home')
        .then(res => {
            if(res.data.valid) {
                setMessage(res.data.message)
            } else {
                navigate('/')
            }
        })
        .catch(err => console.log(err))
    },[])


    return (

        <div className="home">
            <Nav />
            <div className='menu-container'>
                <h5>{message}</h5>
                <div className='firstrow'><img src = {home} width="50px"></img><p>HOME</p></div>
                <div className='secondrow'><img src = {setgoal} width="50px"></img>
                    <img src = {goal} width="50px"></img></div>
            </div>
        </div>
    );
};

export default Home;

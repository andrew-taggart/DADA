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
            <h4>{message}</h4>
            <div className='menu-container'>
                <div className='icon-container'>
                    <div className='icon-card'>
                        <img src = {setgoal} onClick={()=> navigate('/setGoal')} width="60px" height='60px'></img>
                        <p>Set Goal</p>
                    </div>
                    <div className='icon-card'>
                    <img src = {goal} onClick={()=> navigate('/goals')} width="60px" height='60px'></img>
                    <p>My Goals</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

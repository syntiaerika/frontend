import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CreateEvent.module.css';
const CreateEvent = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();

    const userInfo = JSON.parse(localStorage.getItem('loginResult'));
    const body = {
      name: name,
      date: date,
      loggedUserId: userInfo.id,
        loggedUserRole: userInfo.role
       }
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow"
    };
    const response = await fetch('http://localhost:3000/event', requestOptions);
    navigate('/home');
  };
  

  return (
    <div className={styles.container}>
      <h1 classNAme={styles.formTitle}>Vytvorenie nového Eventu</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Názov eventu:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            placeholder="Zadaj názov eventu"
          />
        </label>
        <label className={styles.label}>
          Dátum eventu:
          <input 
            type="date"
            value={date} 
            onChange={(e) => setDate(e.target.value)}
        
          />
        </label>
        
       
        <button type="submit" className={styles.button}>Pridať event</button>
      </form>
  
    </div>
  );
};

export default CreateEvent;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CreateTask.module.css';
const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();

    const userInfo = JSON.parse(localStorage.getItem('loginResult'));
    const body = {
      title: title,
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
    const response = await fetch('http://localhost:3000/task', requestOptions);
    navigate('/home');
  };
  

  return (
    <div className={styles.container}>
      <h1 className={styles.formTitle}>Vytvorenie novej úlohy</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Názov úlohy:
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Zadaj názov úlohy"
          />
        </label>
        <label className={styles.label}>
          Dátum úlohy:
          <input 
            type="date"
            value={date} 
            onChange={(e) => setDate(e.target.value)}
        
          />
        </label>
        <button type="submit" className={styles.button}>Pridať úlohu</button>
      </form>
  
    </div>
  );
};

export default CreateTask;

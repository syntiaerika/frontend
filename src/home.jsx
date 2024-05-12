import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'; 
const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [events, setEvents] = useState([]);

  const userInfo = JSON.parse(localStorage.getItem('loginResult'));

  const deleteTask = async (id) => {
    const requestOptions = {
      method: "DELETE",
      redirect: "follow"
    };
    const response = await fetch(`http://localhost:3000/task/${id}`, requestOptions); 
    getTasks();
  
  }
  const deleteEvent = async (id) => {
    const requestOptions = {
      method: "DELETE",
      redirect: "follow"
    };
    const response = await fetch(`http://localhost:3000/event/${id}`, requestOptions); 
    getEvents();
  
  }
  
  const getTasks = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    const response = await fetch(`http://localhost:3000/task?date=${new Date()}&userId=${userInfo.id}&role=${userInfo.role}`, requestOptions); 
    const data = await response.json();
    setTasks(data); 
  
  }

  const getEvents = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    const response = await fetch(`http://localhost:3000/event?date=${new Date()}&userId=${userInfo.id}&role=${userInfo.role}`, requestOptions); 
    const data = await response.json();
    setEvents(data); 
  
  }

  useEffect(() => {
   
    getTasks();
    getEvents();
  }, []);

  // Funkcia na odstránenie úlohy
  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks)); // Aktualizácia localStorage
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      <ul className = {styles.list}>
        <h2>Task</h2>
        {tasks.map((task, index) => (
          <li key={index} className={styles.listItem}>
              <p>Názov: {task.title}</p>
            <p>Dátum: {task.date}</p>
            <button className={styles.button} onClick={async() => await deleteTask(task.id)}>Odstrániť</button>
          </li>
        ))}
      </ul>
      <ul className={styles.list}>
        <h2>Ulohy</h2>
        {events.map((event, index) => (
          <li key={index} className={styles.listItem}>
              <p>Názov: {event.name}</p>
            <p>Dátum: {event.date}</p>
            <button className={styles.button} onClick={async() => await deleteEvent(event.id)}>Odstrániť</button>
          </li>
        ))}
      </ul>
      <Link to="/createTask" className={styles.linkButton}>Pridať novú úlohu</Link>
      <br></br>
      <Link to="/createEvent" className={styles.linkButton}>Pridať nový Event</Link>
    </div>

    
  );
};

export default Home;




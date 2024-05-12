import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Settings.module.css';
const Settings = () => {
    const navigate = useNavigate();  // Hook na navigáciu

    // Funkcia na navigáciu na pridanie údajov Task
    const handleAddTask = () => {
        navigate("/createTask");  // Presmeruje na komponentu CreateTask
    };

    // Funkcia na navigáciu na úpravu údajov Task
    const handleEditTask = () => {
        navigate("/editTask");  // Presmeruje na komponentu EditTask
    };

    // Funkcia na navigáciu na pridanie údajov Event
    const handleAddEvent = () => {
        navigate("/createEvent");  // Presmeruje na komponentu CreateEvent
    };

    // Funkcia na navigáciu na úpravu údajov Event
    const handleEditEvent = () => {
        navigate("/editEvent");  // Presmeruje na komponentu EditEvent
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Nastavenia</h1>
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Task</h2>
                <button onClick={handleAddTask} className={styles.button}>Pridať Task</button>
                <button onClick={handleEditTask} className={styles.button}>Editovať Task</button>
            </div>
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Event</h2>
                <button onClick={handleAddEvent} className={styles.button}>Pridať Event</button>
                <button onClick={handleEditEvent} className={styles.button}>Editovať Event</button>
            </div>
        </div>
    );
};

export default Settings;

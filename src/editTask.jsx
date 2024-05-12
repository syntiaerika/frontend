import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './EditTask.module.css';
const EditTask = () => {
  const { state } = useLocation();
  const [taskList, setTaskList] = useState(state ? state.taskList : []);

  const handleSave = (index, newTask) => {
    const updatedTaskList = [...taskList];
    updatedTaskList[index] = newTask;
    setTaskList(updatedTaskList); // Uloženie upravených úloh
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.formTitle}>Editovať úlohy</h1>
      {taskList.map((task, index) => (
        <form key={index} onSubmit={(e) => e.preventDefault()}>
          <label className={styles.label}>
            Názov úlohy:
            <input 
              type="text" 
              value={task} 
              onChange={(e) => handleSave(index, e.target.value)}
            />
          </label>
        </form>
      ))}
    </div>
  );
};

export default EditTask;

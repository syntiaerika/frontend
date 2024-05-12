import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './EditEvent.module.css';
const EditEvent = () => {
  const { state } = useLocation();
  const [dataList, setDataList] = useState(state ? state.dataList : []);

  const handleSave = (index, newName) => {
    const updatedDataList = [...dataList];
    updatedDataList[index] = newName;
    setDataList(updatedDataList); 
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.formTitle}>Editovať údaje</h1>
      {dataList.map((data, index) => (
        <form key={index} onSubmit={(e) => e.preventDefault()}>
          <label className={styles.label}>
            Názov údaja:
            <input 
              type="text" 
              value={data} 
              onChange={(e) => handleSave(index, e.target.value)}
            />
          </label>
        </form>
      ))}
    </div>
  );
};

export default EditEvent;

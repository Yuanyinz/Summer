import React from 'react';
import { useState } from 'react';
import {v4 as uuid} from 'uuid';

const UserInput = () => {

  const [newItem, setNewItem] = useState('');
  const [toDoList, setToDoList] = useState([]);
  const handleClick = e => {
    setToDoList(currentToDo => {
      const newState = [...currentToDo, newItem];
      console.log('toDoList', newState);
      return newState;
    }) 
  }
  
  const handleDelete = e => {
    setToDoList(currentToDo => {
      return currentToDo.filter((item) => item !== e);
    })
  }

  const handleEdit = e => {
    console.log('edit click')
  }

 
  return (
    <>
      <label htmlFor="toDo">To Do: </label>
      <input 
        type="text" 
        id="toDo" 
        name="toDo" 
        value={newItem} 
        onChange={e => setNewItem(e.target.value)}/>
      <button onClick={handleClick}>Add</button>
      {toDoList.map(item => {
        const uniq = uuid();
        return (
          <div id={uniq} key={uniq}>
            <span>{item}</span>
            <button onClick={()=>handleDelete(item)}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
          </div>
        )
      })}
    </>
  )
}

export default UserInput;
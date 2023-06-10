import React from 'react';
import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import Userinput2 from './Userinput2';
import ToDoDisplay from './ToDoDisplay';

const App = () => {
  const [newItem, setNewItem] = useState('');
  const [toDoList, setToDoList] = useState([]);
  const [makeEdit, setMakeEdit] = useState(false);
  const [editId,setEditId] = useState(null)

  function addTodo(value) {
    //value是不是Userinput传递回来的参数？
    setToDoList(currentToDo => {
      const newState = [...currentToDo, {id:uuid(),value}];
      console.log('toDoList', newState);
      return newState;
    }) 
  }
  
  function deletefun(id) {
    setToDoList(toDoList => {
      return toDoList.filter((item) => item.id !== id);
    })
  }

  function clickEdit(id) {
    setEditId(id)
    setMakeEdit(true);
  }

  function Edit(){
    setToDoList(toDoList => {
      console.log('inside saveEdit', editId)
      return toDoList.map((item) => {
        
        if (item.id === editId) {
          return {id:item.id, value:newItem}
        } else
        return item;
      })
    })
    setMakeEdit(false);
  }
  return (
    <>
      <Userinput2 
      addTodo= {addTodo} 
      newItem = {newItem} 
      setNewItem = {setNewItem}
      />
      <ToDoDisplay 
      deletefun={deletefun} 
      Edit = {Edit} 
      clickEdit={clickEdit} 
      makeEdit={makeEdit}
      toDoList={toDoList}
      setNewItem = {setNewItem}
      />
    </>
  )
}

export default App;

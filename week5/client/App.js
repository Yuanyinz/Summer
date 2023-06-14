import React from 'react';
import { useState, useEffect } from 'react';
// import {v4 as uuid} from 'uuid';
import Userinput2 from './Userinput2';
import ToDoDisplay from './ToDoDisplay';

//life cycle methods: componentOnMount(), componentDidUpdate(), componentUnmount
//useEffect(() => {console.log('hello)}, []);

const App = () => {
  const [newItem, setNewItem] = useState('');
  const [toDoList, setToDoList] = useState([]);
  const [makeEdit, setMakeEdit] = useState(false);
  const [editId,setEditId] = useState(null)
  
  useEffect(() => {
    // console.log('useEffect invoked');
    fetch('http://localhost:8080/')
      .then((res) => res.json())
      .then(data => {
        // console.log('data',data);
        const newState = Object.entries(data).map(([key, value]) => {return {id: key, value:value}});
        // console.log(newState);
        setToDoList(currentToDo => {
          return [...currentToDo, ...newState];
        })
      })
  }, []);

  
  //use the same pattern to name the functions
  //addHandler
  //deleteHandler
  //editHandler

  function addTodo(value) {
    //value是不是Userinput传递回来的参数？
    const addOption = {
      method: 'POST',
      body: JSON.stringify({ content: value }),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch('http://localhost:8080', addOption)
      .then((res) => {
        // console.log('response received');
        return res.json();
      })
      .then(data => {
        // console.log(data);
        // {"111": "shop"}
        // console.log(Object.keys(data))
        //update state
        setToDoList(currentToDo => {
          const newState = [...currentToDo, {id:Object.keys(data)[0],value:Object.values(data)[0]}];
          // console.log('toDoList', newState);
          return newState;
      })
      // .catch(error => {
      //   console.error(error);
      // });


    }) 
  }
  
  function deletefun(id) {
    
    const deleteOption = {
      method: 'DELETE',
      body: JSON.stringify({ uuid: id }),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch('http://localhost:8080', deleteOption)
      .then((res) => {
        console.log('delete request received a response');
        return res.json();
      })
      // .then(data => {
      //   // 
      // })
      

    setToDoList(toDoList => {
      return toDoList.filter((item) => item.id !== id);
    })
  }

  function clickEdit(id) {
    setEditId(id)
    setMakeEdit(true);
  }

  function Edit(){
    //put request
    //fetch
    const editOption = {
      method: 'PUT',
      body: JSON.stringify({ uuid: id }),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch('http://localhost:8080', editOption)
      .then(response => {
        // console.log('message sent');
        return response.json();
      })
      .then(data => {
        //
        console.log('response data:', data);
      })
      // .catch(error => {
      //   console.error(error);
      // });

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

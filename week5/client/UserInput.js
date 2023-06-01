import React from 'react';
import { useState } from 'react';
import {v4 as uuid} from 'uuid';

const UserInput = () => {

  const [newItem, setNewItem] = useState('');
  const [toDoList, setToDoList] = useState([]);
  const [makeEdit, setMakeEdit] = useState(false);
  const [editId,setEditId] = useState(null)

  const handleClick = e => {
    setToDoList(currentToDo => {
      const newState = [...currentToDo, {id:uuid(),value:newItem}];
      //是在这里建立的uuid吗
      console.log('toDoList', newState);
      return newState;
    }) 
  }
  
  const handleDelete = id => {
    setToDoList(toDoList => {
      // 我们需要通过setToDoList存一个新的toDoList但是我们旧的toDoList是怎么调用的呢
      return toDoList.filter((item) => item.id !== id);
      // 通过过滤全部item 只保留item.id 不等于 返回的id，筛除 item.id 等于 返回的id
    })
  }

  const handleEdit = e => {
    setEditId(e)
    setMakeEdit(true);
  }

  const saveEdit = e => {
    setToDoList(toDoList => {
      // 我们需要通过setToDoList存一个新的toDoList但是我们旧的toDoList是怎么调用的呢
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
      <label htmlFor="toDo">To Do: </label>
      <input 
        type="text" 
        id="toDo" 
        name="toDo" 
        value={newItem} 
        onChange={e => setNewItem(e.target.value)}/>
        {/* value 和 onChange 都是干什么用的 分不清楚,哪个被返回到handleClick才让我们拥有了newItem*/}
      <button onClick={handleClick}>Add</button>
      {/* 在这后面的handleClick（14）调用了uuid但是我们在58行才遍历了toDoList建立了uuid啊（在第61行把每一个uuid命名为
      uniq,并让key和id相等） */}
      {toDoList.map(item => {
        const uniq = uuid();
        return (
          <div id={uniq} key={uniq}>
            <span>{item.value}</span>
            <button onClick={()=>handleDelete(item.id)}>Delete</button>
            <button onClick={()=>handleEdit(item.id)}>Edit</button>
          </div>
        )
      })}
      {makeEdit && (
        <>
        <input
          type='text'
          id='newtoDo'
          name='newtodo'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          // value 和 onChange 都是干什么用的 分不清楚,哪个被返回到saveEdit才让我们拥有了newItem
        />
        <button onClick={saveEdit}>save</button>
      </>
      )}
    </>
  )
}

export default UserInput;
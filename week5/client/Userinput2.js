import React, { useState } from 'react';

const Userinput2 = (props) => {
    const [newItem, setNewItem] = useState('');

    const handleAdd = e => {
        props.addTodo(newItem)
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
      <button onClick={handleAdd}>Add</button>
    </>
  );
};

export default Userinput2;

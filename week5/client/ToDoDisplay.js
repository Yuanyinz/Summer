import React from 'react';

const ToDoDisplay = (props) => {

  const handleDelete = id => {
    props.deletefun(id)
    // 传递回去了ID？
  }

  const handleEdit = id => {
    props.clickEdit(id)
    // 传递回去了ID？
  }

  const saveEdit = () => {
    props.Edit()
    //这是引用了Edit函数？
  }
  return (
    <>
      {props.toDoList.map(item => {
        return (
          <div id={item.id} key={item.id}>
           <span>{item.value}</span>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
          <button onClick={() => handleEdit(item.id)}>Edit</button>
          </div>
        )
      })}

      {props.makeEdit && (
        <>
        <input
          type='text'
          id='newtoDo'
          name='newtodo'
          onChange={(e) => props.setNewItem(e.target.value)}
        />
        <button onClick={saveEdit}>save</button>
      </>
      )}
    </>
  );
};

export default ToDoDisplay;


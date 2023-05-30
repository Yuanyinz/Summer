import React from 'react';
import { useState } from 'react';

const UserInput = () => {
  //deconstruction
  // const array = ['a', 'b', 'c'];
  // let [num1, num2, num3] = array
  // console.log(num1)

  //state => data will change based on user interaction
//   const [counter, setCounter] = useState(0);
  const [newItem, setNewItem] = useState('');

  const handleClick = e => {
    // e.preventDefault();
    console.log('button clicked');
    console.log(newItem)
    // setCounter(counter + 1);
  }

  // e => event object
  // e.target
  // const handleUserName = (e) => {
  //   console.log(userName);
  // }

  return (
    <>
      {/* <form> */}
        <label htmlFor="toDo">To Do: </label>
        <input type="text" id="toDo" name="toDo" value={newItem} onChange={e => setNewItem(e.target.value)}/>
        <button onClick={handleClick}>Add</button>
      {/* </form> */}
        {/* <h1>{counter}</h1>
        <button>Increment</button> */}
    </>
  )
}

export default UserInput;
const button1 = document.querySelector('button');
console.log(button1);

button1.addEventListener('click', () => {
    console.log('button clicked');
    //select target input
    const input = document.getElementById("toDo");
    console.log('input value', input.value)
    //create element with the value
    const plan = document.createElement('p');
    plan.innerText = input.value

    // 创造两个新button
    const deletebutton = document.createElement('button');
    deletebutton.textContent = 'Delete';
    plan.appendChild(deletebutton);

    const editbutton = document.createElement('button');
    editbutton.textContent = 'Edit';
    plan.appendChild(editbutton);

    //div to contain plan and the remote button
    deletebutton.addEventListener('click', () => {
      console.log('button clicked');
      plan.remove();
      })

    editbutton.addEventListener('click', () => {
      console.log('button clicked');
      const newinput = document.querySelector('input');
      console.log(newinput);
      })
    //add the plan node to the DOM tree
    document.querySelector('.greeting').appendChild(plan)
  
  })
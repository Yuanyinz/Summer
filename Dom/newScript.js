//read

//promise: pending default; resolve; reject
fetch('./data.json')
  .then((res) => {
    // console.log('Response object', res);
    // console.log(JSON.stringify(data))
    return res.json();
  })
  .then(data => {
    console.log('data',data);
    //DOM manipulation

    // {"hello": "hello", "study": "study"}
    Object.keys(data).forEach(item => {
      // button1.addEventListener('click', () => {
      //   console.log('button clicked');
      //   //select target input
      //   // const input = document.getElementById("toDo");
      //   // console.log('input value', input.value)
      //   //create element with the value
        const plan = document.createElement('p');
        plan.style.display = 'inline-block';
        plan.innerText = item
    
    
        //create a container div
        const container = document.createElement('div');
        container.appendChild(plan);
    
        // 创造两个新button
        const deletebutton = document.createElement('button');
        deletebutton.textContent = 'Delete';
        container.appendChild(deletebutton);
    
        const editbutton = document.createElement('button');
        editbutton.textContent = 'Edit';
        container.appendChild(editbutton);
    
        //div to contain plan and the remote button
        //删除键
        deletebutton.addEventListener('click', handleDelete)
    
        //  编辑键
        editbutton.addEventListener('click', handleEdit)
    
        // editbutton.addEventListener('click', (e) => {
        //   console.log('edit button clicked', e.target)
    
        //   const newinput = document.createElement('input');
        //   container.appendChild(newinput);
          //新的button
          // const confirmbutton = document.createElement('button');
          // confirmbutton.textContent = 'confirm';
          // container.appendChild(confirmbutton);
    
    
          //点击button 以后
        // confirmbutton.addEventListener('click', handleConfirm)
    
          // confirmbutton.addEventListener('click', (e) => {
          //   console.log('confirm button clicked');
          //   //e.target => confirm button
          //   // e.target.parentNode => container
          //   // console.log('access the target => p', e.target.parentNode.querySelector('p'))
    
          //   const newInput = e.target.previousSibling.value;
          //   e.target.parentNode.querySelector('p').innerText = newInput;
    
          //   //删除 文字框和button
          //   confirmbutton.remove();
          //   newinput.remove();
            
          //   })
          // })
        //add the plan node to the DOM tree
        document.querySelector('.toDoList').appendChild(container);
      
    }
    )

    // })

  })
  .catch(err => console.log(err));

// fetch(url, requestOption).then((response) => {response.json()}).then((data)=>{console.log(data)}).catch(err => console.log(err))


const button1 = document.querySelector('button');
// console.log(button1);


const handleDelete = (e) => {
  e.target.parentNode.remove();


  //fetch request to remove data in the data.json
}


// let confirmbutton;

const handleEdit = (e) => {
  const newinput = document.createElement('input');
  e.target.parentNode.appendChild(newinput);
  const confirmbutton = document.createElement('button');
  confirmbutton.textContent = 'confirm';
  e.target.parentNode.appendChild(confirmbutton);
  confirmbutton.addEventListener('click', handleConfirm)
}

const handleConfirm = (e) => {
  const newInput = e.target.previousSibling.value;
  e.target.parentNode.querySelector('p').innerText = newInput;
  e.target.previousSibling.remove();
  e.target.remove();
}

//add web favicon
//add style sheet
//research bootstrap



button1.addEventListener('click', () => {
    console.log('button clicked');
    //select target input
    const input = document.getElementById("toDo");
    console.log('input value', input.value)
    //create element with the value
    const plan = document.createElement('p');
    plan.style.display = 'inline-block';
    plan.innerText = input.value


    //create a container div
    const container = document.createElement('div');
    container.appendChild(plan);

    // 创造两个新button
    const deletebutton = document.createElement('button');
    deletebutton.textContent = 'Delete';
    container.appendChild(deletebutton);

    const editbutton = document.createElement('button');
    editbutton.textContent = 'Edit';
    container.appendChild(editbutton);

    //div to contain plan and the remote button
    //删除键
    deletebutton.addEventListener('click', handleDelete)

    //  编辑键
    editbutton.addEventListener('click', handleEdit)

    // editbutton.addEventListener('click', (e) => {
    //   console.log('edit button clicked', e.target)

    //   const newinput = document.createElement('input');
    //   container.appendChild(newinput);
      //新的button
      // const confirmbutton = document.createElement('button');
      // confirmbutton.textContent = 'confirm';
      // container.appendChild(confirmbutton);


      //点击button 以后
    // confirmbutton.addEventListener('click', handleConfirm)

      // confirmbutton.addEventListener('click', (e) => {
      //   console.log('confirm button clicked');
      //   //e.target => confirm button
      //   // e.target.parentNode => container
      //   // console.log('access the target => p', e.target.parentNode.querySelector('p'))

      //   const newInput = e.target.previousSibling.value;
      //   e.target.parentNode.querySelector('p').innerText = newInput;

      //   //删除 文字框和button
      //   confirmbutton.remove();
      //   newinput.remove();
        
      //   })
      // })
    //add the plan node to the DOM tree
    document.querySelector('.toDoList').appendChild(container);
  
  }
)
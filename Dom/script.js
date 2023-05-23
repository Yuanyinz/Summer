//select the button
// const button1 = document.getElementsByTagName('button')
// console.log(button1)
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

  //remove button

  //div to contain plan and the remote button

  //add the plan node to the DOM tree
  document.querySelector('.greeting').appendChild(plan)

})


const h1All = document.getElementsByTagName('h1');
console.log(h1All[0].innerText);


const greeting = document.getElementsByClassName("greeting")
//[element]
console.log('greeting', greeting)

const ida = document.getElementById("a")
console.log('ida', ida)

//document.querySelector() 返回第一个符合条件的原素
console.log('hello', document.querySelector('h1'))
//document.querySelector('.greeting')
//document.querySelector('#c')


//document.querySelectorAll() 返回所有符合条件元素

const p = document.createElement('p');
p.innerText = 'testing'
p.setAttribute('class', 'test');//用于添加 class or id or html attribute(href src style name placeholder)
// greeting[0].appendChild(p);

document.querySelector('.greeting').appendChild(p)

const p2 = document.createElement('p');
p2.innerText = 'testing2'
greeting[1].append(p2)

// p2.remove();
p.remove();



//DOM manipulation: select element from the DOM tree => change element => add element
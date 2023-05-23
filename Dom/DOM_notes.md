# DOM Manipulation with JavaScript

## DOM Selectors
- document.getElementById('id_value')
  * => return a single element matching the id
- document.getElementsByClassName('className') 
  * => return an array even when there's only one element matching the class name
- document.getElementByTag('li')
  * => returns an array of elements with the same tag
- document.querySelector('any_selector')
  * => string for html tag
  * => . for class 
  * => # for id  
  * => returns the first matching element
- document.querySelectorAll('any_selector')
  * => returns an array of all elements matching the selector


## Create DOM element
- const element = document.createElement('html tag')
- element.innerText
  * => add inner text to the element
  * => after createElement and innerText, the element is created and assigned the text but it's just a JavaScript variable which hasn't been added to the DOM

## Add element to the DOM
- Need to use selector method to select a target node as the destination of the added element
- element.appenChile()
- element.append()


## Remove element from the DOM
- Need to use selector method to select a target node to remove
- element.remove()

## Add Event Listener to DOM element
- element.addEventListener('event name', callback)
- Common event type:
  * 'click'
  * 'dblclick'
  * 'mousedown'
  * 'mouseup'
  * 'mouseenter'
  * 'mouseleave'
  * 'mouseover'
  * 'mouseout'
  * 'mousemove'
  * 'keydown'
  * 'keyup'
  * 'keypress'
  * 'focus'
  * 'blur'
  * 'cut'
  * 'paste'
  * 'input'
  * 'change'
  * 'submit'
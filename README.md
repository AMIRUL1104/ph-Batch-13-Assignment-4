## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById capture a element from the html file which is have a specific id . getElementsByClassName capture all the element from html file which are same class name . querySelector and querySelectorAll works also like id and class but when we use the we should to write id or class name like css class or id selector .

### 2. How do you create and insert a new element into the DOM?

Ans : at first create the element like that : document.createElement("p") and put it in a variable . the insert it in DOM by use appendChild() method .
let p = document.createElement("p") ;
parentElement.appendChild(p);

### 3. What is Event Bubbling? And how does it work?

Ans : when a event happend at first trigger target element ,then the parent,then grand parent ... it is going on continiously to parent element likhe bubble . this event is called event bubbling .

### 4. What is Event Delegation in JavaScript? Why is it useful?

Ans : event deligation means event delegate parent to child . it is very usefull whent we need to add addEventListener method in every child element . if we add addeventlistener in the parent element it will be work on all the child element properly.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Ans : preventDefault() helps to stop reload page when form submit button are clicked . stopPropagation() stop the propagete event bubbling

---

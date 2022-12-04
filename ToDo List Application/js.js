// select items 
const theInput =  document.querySelector(".add-task input");
const theAddButton  = document.querySelector(".plus");
const theContainer =  document.querySelector(".tasks-content");
const noTaskMessage = document.querySelector(".no-tasks-message");
const tasksCount = document.querySelector(".tasks-count span");
const tasksCompleted = document.querySelector(".tasks-completed span");


// fucos on input field 
window.onload = function() {
    theInput.focus();
}




// adding the task 
theAddButton.addEventListener("click" , function() {

    // if input is empty 
    if(theInput.value === '') {
        swal("you don't have any tasks", "...try again!");

    } else {

    const noTaskMessage = document.querySelector(".no-tasks-message");
    // check of span message is here

    if(document.body.contains(document.querySelector(".no-tasks-message"))) {
    // remove no task message 
    noTaskMessage.remove();
    }

    // creat span element 
    const mainSpan = document.createElement("span");

    // creat delete button 
    const DeleteElement = document.createElement("span");

    // creat span text 
    const text  = document.createTextNode(theInput.value);

    // creat the delete button text 
    const deleteText = document.createTextNode("delete");

    // add text to span  >> add class to span
    mainSpan.appendChild(text);
    mainSpan.classList.add("task-box");

    // add text to delete button  >> add class to delete span 
    DeleteElement.appendChild(deleteText);
    DeleteElement.classList.add("delete");

    // add delete button to mainSpan 
    mainSpan.appendChild(DeleteElement);

    // add mainSpan to the container
    theContainer.appendChild(mainSpan);
    
 
    // remove task onclick in the delete button 
     /* DeleteElement.onclick  = function() {
        mainSpan.remove();
    }*/

    CalcTasks()

    // call function local storage
    AddTolocalStorage();
    // empty the input 
      theInput.value = " "; 
    // focus on field every click
    theInput.focus();

    }
});
  

function AddTolocalStorage(){
    localStorage.setItem(theInput.value , "info");
    if( localStorage.getItem(theInput.value , "info")){
        console.log(`${theInput.value} is in local storage`)
    }
  }




document.addEventListener('click' , function(e) {
  // delete task 
  if(e.target.classList.contains( "delete")) {
  // remove the parent
    e.target.parentElement.remove();
  // check the number of tasks inside the container 
     if(theContainer.childElementCount == 0) {
     creatNoTasks();
     tasksCount.textContent = 0;
    }
    CalcTasks()
   }
  // finished task
  if(e.target.classList.contains("task-box")) {
  // remove the parent
    e.target.classList.toggle("finished");
   }
   CalcTasks()
})


/* tasks i shoud do 
[1] use sweet alert if the input is empty 
[2] check if task is exist 
[3] creat delete all button 
[4] creat finish all tasks button 
[5] add all task to the local storage

*/ 

// function to creat no task message  
function creatNoTasks() {

    // cteat message span element
    let msSpan =document.createElement("span");

    // creat the text message
    let messageSpan = document.createTextNode("No Tasks To Show")
    
    // add text message to message  span element
    msSpan.appendChild(messageSpan);

    // add class to message span 
    msSpan.className = "no-tasks-message";
    
    // append the message span element to container 
    theContainer.appendChild(msSpan);

}

// function calc tasks 
function CalcTasks() {

    // calc all tasks 
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;


    // calc all completed tasks 
    tasksCompleted.innerHTML = document.querySelectorAll(".tasks-content .finished").length;
}


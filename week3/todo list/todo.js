//Dom elements
let todoForm = document.querySelector('#todo-form')
const todoList = document.querySelector('.todos')
const mainInput = document.querySelector('#todo-form input')


let tasks= JSON.parse(localStorage.getItem('tasks')) || []

//     if(localStorage.getItem('tasks')){
  //      tasks.map((task) => {
    //        createTask(task)
      //  })
     //}



todoForm=addEventListener('submit',(e)=>{
    //to prevent the default submittion of the form
  e.preventDefault()
    //takes in the input we type on the screen
  const inputValue = mainInput.value
 
  if(inputValue){
  const task={
    id: new Date().getTime(),
    name: inputValue,
    isCompleted: false
  }
    tasks.push(task)
    // stores our tasks to the local storage even if we refresh the it is still there 
localStorage.setItem('tasks',JSON.stringify(tasks))
    createTask(task)
  }

  
   
 
  //todoForm.reset()
  mainInput.focus()
})

 todoList.addEventListener("click",(e)=>{
    if(e.target.classList.contains('Remove-task')){
        const taskId = e.target.closest('li').id

        removeTask(taskId)
    }
 })

 function createTask(task){
    const taskEl= document.createElement('li')
    
    taskEl.setAttribute('id',task.id)

    if(task.isCompleted){
        taskEl.classList.add('complete')
    }
    const taskElMarkup= `
    <div>
                <input type="checkbox" name="tasks" id="${task.id}" ${task.isComplete ? 'checked' : ''}>
                <span ${task.isComplete ? 'contenteditable' : ''}> ${task.name}</span>
            </div>

            <button title="Remove the'${task.name}'task" class="remove-task">
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M17.25 17.25L6.75 6.75"
                    stroke="#A4D0E3" stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                    <path d="M17.25 17.25L6.75 6.75"
                   stroke="#A4D0E3" stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"/> 
                </svg>
            </button>
    `
    tasks.innerHTML = taskElMarkup
    todoList.appendChild(taskEl)
 }


 function removeTask(taskId){
    tasks = tasks.filter((task)=>{
          task.id != parseInt(taskId)
    })
    localStorage.setItem ('tasks', JSON.stringify(tasks))
   document.getElementById(taskId).remove()
 
 }
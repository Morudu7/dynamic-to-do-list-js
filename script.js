document.addEventListener('DOMContentLoaded', function() {


     //Selecting DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    //initiaze load tasks
    function loadTask () {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }
    
    //Define function and check if it empty
    function addTask(taskText, save = true) {   //adjust addTask to save text and to avoid duplicates when loading from local storage
        const taskText = taskInput.value.trim();
        if (taskText === 0);
        alert ('Please enter a task.');
        return;

         if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

        //if function is not empty create a list
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('buttton');
        removeBtn.textContent = ['Remove', 'classList.add']
        removeBtn.className = 'remove-btn' //class name for removeBtn
                // Assign an onclick event to the remove button that removes the li element.
                removeBtn.onclick = function() {
                    taskList.removeChild(li);
                };

                // Append the remove button to the li element.
                li.appendChild(removeBtn);

                // Append the li to taskList.
                taskList.appendChild(li);

                // Clear the task input field.
                taskInput.value = '';
                
                // Set focus back to the input field for a better user experience.
                taskInput.focus();
        
            // Add an event listener to addButton that calls addTask when clicked.
            addButton.addEventListener('click', addTask);

            // Add an event listener to taskInput for the 'keypress' event.
            taskInput.addEventListener('keypress', (event) => {
                  if (event.key === 'Enter') {
                    addTask(); 
                  }; 
            });
            
            addTask();

});
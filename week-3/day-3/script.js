
// when add button is clicked,
// take text from txt box and call addText 


//  create a task inside of span
//     store task in variable
//     update innerText with text from input

// var toDoTask = document.createElement(‘span’)
// toDoTask.innerText = document.getElementById(‘inputField’).value

//     create a delete button
//     update innerText with delete
//     store button in variable

// var deleteButton= document.createElement(‘button’)
// deleteButton.innerText = ‘delete’

//     create a update button
//     update innerText with update

// var updateButton = document.createElement(‘button’)
// updateButton.innerText = ‘update’

//     create list item
//     append created elements to list item

// var listItem = document.createElement(‘li’)
// listItem.appendChild(toDoTask)
// listItem.appendChild(deletebutton)
// listItem.appendChild(updateButton)document.getElementById(‘myToDoList’).appendChild(listItem) (edited) 



const addToDo = () => {
    var toDoTask = document.createElement(‘span’);
    toDoTask.innerText = document.getElementById(‘inputField’).value;

    // Create a new delete button
    var deleteButton = document.createElement(‘dltBtn’);

    // Create new Check button
    //***  new button not added yet */

    // add the constructed text list, delete button and check button to the 
    // new list 
    var listItem = document.createElement(‘li’);
    // listItem.appendChild(toDoTask)
    // listItem.appendChild(deletebutton)
    // listItem.appendChild(updateButton)document.getElementById(‘myToDoList’).appendChild(listItem) 

    
};
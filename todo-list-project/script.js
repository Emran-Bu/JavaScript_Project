// var itemForm = document.querySelector('#itemForm')
// var itemInput = document.querySelector('#itemInput')
// var feedback = document.querySelector('.feedback')
// var addBtn = document.querySelector('#addBtn')
// var itemList = document.querySelector('.item-list')
// var items = document.querySelector('.item')
// var clearList = document.querySelector('#clear-list')
// var itemName = document.querySelector('.item-name')
// var completeItem = document.querySelector('.complete-item')
// var editItem = document.querySelector('.edit-item')
// var deleteItem = document.querySelector('.delete-item')
// var clearList = document.querySelector('#clear-list')

// let todoItems = [];

// let handleItem = function(itemName) {
//     items.forEach(function(item) {
//         if (itemName.textContent === itemName) {
//             completeItem.addEventListener('click', function(e) {
//                 e.preventDefault()
//                 itemName.classList.toggle('completed')
//                 this.classList.toggle('visibility')
//             })

//             editItem.addEventListener('click', function() {
    
//             })
            
//             deleteItem.addEventListener('click', function(e) {
//                 e.preventDefault()
//                 var a = itemList.removeChild(items)
//                 console.log(a);
//             })
//             showFeedback('item delete', 'success');
//         }
//     })
// }





// let removeItem = function(item) {
//     let removeIndex = (todoItems.indexOf(item))
//     todoItems.splice(removeIndex, 1)
// }

// let getList = function(todoItems) {
//     itemList.innerHTML = '';

//     todoItems.forEach(function(item){
//         itemList.insertAdjacentHTML('beforeend', `<div class="item my-3"><h5 class="item-name text-capitalize">${item}</h5><div class="item-icons"><a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a><a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a><a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a></div></div>` );

//         handleItem(item);
//     });
// }

// let getLocalStorage = function(){

//     const todoStorage = localStorage.getItem('todoItems');
//     if (todoStorage === 'undefined' || todoStorage === null){
//         todoItems = [];
//     } else {
//         todoItems = JSON.parse(todoStorage);
//         getList(todoItems);
//     }
// }

// let setLocalStorage = function(todoItems){
//     localStorage.setItem('todoItems', JSON.stringify(todoItems));
// }

// getLocalStorage();

// itemForm.addEventListener('submit', function(e) {
//     e.preventDefault()
//     let itemName = itemInput.Value;
//     console.log(itemName);
//     if (itemName.length == 0) {
//         feedback.innerHTML = 'Please Enter Valid Value'
//         feedback.classList.add('showItem', 'alert-danger')

//         setTimeout(
//             function(){
//                 feedback.classList.remove('showItem');
//             }, 3000);
//     } else {
//         todoItems.push(itemName);
//         setLocalStorage(todoItems);
//         getList(todoItems);
//     }
// })

// itemInput.value = '';


// //clear all items from the list
// clearList.addEventListener('click', function(){
// todoItems = [];
// localStorage.clear();
// getList(todoItems);
// })



//add an eventListener to the from
const form = document.querySelector('#itemForm'); // select form
const itemInput = document.querySelector('#itemInput'); // select input box from form
const itemList = document.querySelector('.item-list');
const feedback = document.querySelector('.feedback');
const clearButton = document.querySelector('#clear-list');

let todoItems = [];

const handleItem = function(itemName){

    const items = itemList.querySelectorAll('.item');
 
    items.forEach(function(item){
        
        if(item.querySelector('.item-name').textContent === itemName){
            //complete event listener
            item.querySelector('.complete-item').addEventListener('click', function(){
                item.querySelector('.item-name').classList.toggle('completed');
                this.classList.toggle('visibility');
            });
            //edit event listener
            item.querySelector('.edit-item').addEventListener('click', function(){
                itemInput.value = itemName;
                itemList.removeChild(item);

                todoItems = todoItems.filter(function(item){
                    return item !== itemName;
                });
            });
            // delete event listener
            item.querySelector('.delete-item').addEventListener('click', function(){
                debugger;
                itemList.removeChild(item);

                todoItems = todoItems.filter(function(item){
                    return item !== itemName;
                });

                showFeedback('item delete', 'success');
            })
        }
    })
}

const removeItem = function(item){
    console.log(item);
    const removeIndex = (todoItems.indexOf(item));
    console.log(removeIndex);
    todoItems.splice(removeIndex, 1);
}

const getList = function(todoItems){
    itemList.innerHTML = '';

        todoItems.forEach(function(item){
            itemList.insertAdjacentHTML('beforeend', `<div class="item my-3"><h5 class="item-name text-capitalize">${item}</h5><div class="item-icons"><a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a><a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a><a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a></div></div>` );

            handleItem(item);
        });
}

const getLocalStorage = function(){

    const todoStorage = localStorage.getItem('todoItems');
    if (todoStorage === 'undefined' || todoStorage === null){
        todoItems = [];
    } else {
        todoItems = JSON.parse(todoStorage);
        getList(todoItems);
    }
}

const setLocalStorage = function(todoItems){
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

// get local storage from page
getLocalStorage();

//add an item to the List, including to local storage
form.addEventListener('submit', function(e){ 
    e.preventDefault();
    const itemName = itemInput.value;
    
    if (itemName.length === 0){
        feedback.innerHTML = 'Please Enter Valid Value';
        feedback.classList.add('showItem', 'alert-danger');
        setTimeout(
            function(){
                feedback.classList.remove('showItem');
                }, 3000);
    } else {
        todoItems.push(itemName);
        setLocalStorage(todoItems);
        getList(todoItems);
        //add event listeners to icons;
        //handleItem(itemName);
    }
    
    itemInput.value = '';

    });

    //clear all items from the list
clearButton.addEventListener('click', function(){
    todoItems = [];
    localStorage.clear();
    getList(todoItems);
})


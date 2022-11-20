const form = document.querySelector('form');
const text = document.querySelector('.text');
const list = document.querySelector('.list');
const button = document.querySelector('.deleteButton');

let array = [];

let createLi = (note) => {
    let li = document.createElement('li');
    li.textContent = note;
    list.append(li);
}

form.addEventListener('submit', function(event) {
        event.preventDefault();
        // let textMessage = text.value;
        array.push(text.value);
        
        localStorage.setItem(Math.random(), array);
        createLi(text.value);
        text.value = '';
    })

array.forEach(element => {
    createLi(element);
    
});

function doDelite() {
    localStorage.clear();
}



// let array = localStorage.getItem('item')? JSON.parse(localStorage.getItem('item')): [];
// let array = localStorage.getItem('item')? JSON.parse(localStorage.getItem('item')): [];
// localStorage.setItem('item', JSON.stringify(array));

// const storage = JSON.parse (localStorage.getItem('item'));
// console.log(storage);

// let createLi = (note) => {
//     let li = document.createElement('li');
//     li.textContent = note;
//     list.append(li);
// }

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     // let textMessage = text.value;
//     array.push(text.value);
//     console.log(text.value);
//     console.log(array);
//     localStorage.setItem(('item'), JSON.stringify(array));
//     createLi(text.value);
//     text.value = '';
// }) 

// storage.forEach(element => {
//     createLi(element);
    
// });
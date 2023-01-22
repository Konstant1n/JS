//---------------------------------Task - 1---------------------------------
// Создать функцию которая будет удалять людей из массива по индексу, который мы передадим параметром.

function removeUser(arr, index) {
    splice(arr, index);
    return arr;

}


const arr = ['Vasya', 'Petya', 'Alexey']
removeUser(arr, 1)
console.log(arr) /// ['Vasya', 'Alexey']



splice()

console.log("---------------------------------Task - 1---------------------------------");
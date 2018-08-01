/*
Поиск в массиве
важность: 3
Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер, если найдено, или -1, если не найдено.
*/
const arr = ["test", 2, 1.5, false];

function find(arr,str) {
    for(let i = 0; arr.length > i; i++) {
        if(arr[i] === str) return i;
    }
    return -1;
}

console.log(find(arr, "test")); // 0
console.log(find(arr, 2)); // 1
console.log(find(arr, 1.5)); // 2

console.log(find(arr, 0)); // -1
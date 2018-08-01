/*Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке.*/

const arr = [1, 2, 3, 4, 5];
arr.sort( () => Math.floor(Math.random() * arr.length));
console.log( arr );
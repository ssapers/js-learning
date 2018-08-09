/*Отсортируйте массив по возрасту пользователей от меньшего к большему.*/
const users = require('./data.js');

users.sort(function(a, b) {
    return a.age - b.age;
});

console.log(users);
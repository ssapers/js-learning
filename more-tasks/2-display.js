/*Создайте массив, содержащий только имена пользователей.*/
const users = require('./data.js');

const names = users.map(function(users) {
    return users.name;
});

console.log(names);
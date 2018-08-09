/*Создайте массив, содержащий только совершеннолетних пользователей.*/
const users = require('./data.js');

const adults = users.filter(function(users) {
    return users.age >= 18;
});

console.log(adults);
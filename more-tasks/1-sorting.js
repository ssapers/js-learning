/*Отсортируйте массив по возрасту пользователей от меньшего к большему.*/
const users = [
    { name: 'Vasya', age: 19, rate: 900 },
    { name: 'Dima', age: 18, rate: 1000 },
    { name: 'Sveta', age: 13, rate: 85 },
    { name: 'Peyta', age: 14, rate: 100 },
    { name: 'Seryozha', age: 18, rate: 900 },
    { name: 'Valera', age: 14, rate: 150 }
];

users.sort(function(a, b) {
    return a.age - b.age;
});

console.log(users);
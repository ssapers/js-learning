/*Найдите самого старшего.
Посчитайте средний возраст.
Сгруппируйте пользователей по возрасту.
*/

const users = [
    { name: 'Vasya', age: 19, rate: 900 },
    { name: 'Dima', age: 18, rate: 1000 },
    { name: 'Sveta', age: 13, rate: 85 },
    { name: 'Peyta', age: 14, rate: 100 },
    { name: 'Seryozha', age: 18, rate: 900 },
    { name: 'Valera', age: 14, rate: 150 }
];

let maxAge = 0;
let index = 0;

for(let i = 0 ; users.length > i; i++) {
    if(users[i].age > maxAge) {
        maxAge = users[i].age;
        index = i;
    }
}
console.log(users[index]);

// or

users.sort(function(a, b) {
    return b.age - a.age;
});

console.log(users[0]);

////

let averageAge = 0;

for(let i = 0 ; users.length > i; i++) {
    averageAge += users[i].age;
}

averageAge /= users.length;

console.log(averageAge);
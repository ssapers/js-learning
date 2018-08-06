/*Найдите самого старшего.
Посчитайте средний возраст.
Сгруппируйте пользователей по возрасту.
Найдите средний рейт для каждого возраста.
Найдите максимальный из всех средних рейтов по возрастам.
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

const initialValue = 0;
let averageAge = users.reduce(
    (accumulator, currentValue) => accumulator + currentValue.age,
    initialValue
);
averageAge = averageAge / users.length;
console.log(averageAge);

////

const usersAge = {};

users.forEach(function(user) {
    let ageData = usersAge[user.age];

    if (ageData) {
        ageData.push(user);
    } else {
        usersAge[user.age] = [user];
    }
});

////

const averageRate = {};

for (let age in usersAge) {
    averageRate[age] = usersAge[age].reduce((acc, user) => acc + user.rate, 0) / usersAge[age].length;
}

console.log(averageRate);


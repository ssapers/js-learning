const users = require('./data.js');

//Найдите самого старшего.

users.sort(function(a, b) {
    return a.age - b.age;
});

console.log(users.reduce((a, b) => a.age > b.age ? a.age : b.age));


// Посчитайте средний возраст.

const initialValue = 0;
let averageAge = users.reduce(
    (accumulator, currentValue) => accumulator + currentValue.age,
    initialValue
);
averageAge = averageAge / users.length;
console.log(averageAge);


// Сгруппируйте пользователей по возрасту.

const usersAge = {};
users.forEach(function(user) {
    let ageData = usersAge[user.age];

    if (ageData) {
        ageData.push(user);
    } else {
        usersAge[user.age] = [user];
    }
});

console.log(usersAge);

// Найдите средний рейт для каждого возраста.

const averageRate = {};

for (let age in usersAge) {
    averageRate[age] = usersAge[age].reduce((acc, user) => acc + user.rate, 0) / usersAge[age].length;
}

console.log(averageRate);


// Найдите максимальный из всех средних рейтов по возрастам.

let maxRate = 0;

for(let rate in averageRate) {
    maxRate = Math.max(maxRate, averageRate[rate])
}

console.log(maxRate);
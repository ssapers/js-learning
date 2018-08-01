/*Напишите код, который отсортирует массив объектов people по полю age.*/

const vasya = { name: "Вася", age: 23 };
const masha = { name: "Маша", age: 18 };
const vovochka = { name: "Вовочка", age: 6 };

const people = [ vasya , masha , vovochka ];

people.sort(function(a, b) {
    return a.age - b.age;
});


// теперь people: [vovochka, masha, vasya]
console.log(people[0].age);
/*
Напишите код для вывода alert случайного значения из массива:
    var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
P.S. Код для генерации случайного целого от min to max включительно:
    var rand = min + Math.floor(Math.random() * (max + 1 - min));
    */
const arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
const rand = Math.floor(Math.random() * arr.length);
console.log(arr[rand]);
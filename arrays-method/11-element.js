/*Пусть arr – массив строк.
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.*/

function unique(arr) {
    let uniqueItems = new Set();
    for (let i = 0; arr.length > i; i++) {
        uniqueItems = uniqueItems.add(arr[i]);
    }
    return Array.from(uniqueItems);

}

const strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"
];

console.log(unique(strings));
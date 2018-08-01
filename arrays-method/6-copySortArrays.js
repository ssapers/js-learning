/*Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.
Исходный массив не должен меняться.*/

const arr = ["HTML", "JavaScript", "CSS"];
const arrSorted = arr.concat().sort();

console.log(arrSorted); // CSS, HTML, JavaScript
console.log(arr);
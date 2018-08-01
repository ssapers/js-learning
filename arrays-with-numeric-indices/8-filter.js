/*
Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив,
который содержит только числа из arr из диапазона от a до b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция не должна менять arr.*/

const arr = [5, 4, 3, 8, 0];

function filterRange(arr, a, b) {
    const result = [];
    for(let i = 0; i < arr.length; i++){
        if(a <= arr[i] && b >= arr[i]) result.push(arr[i])
    }
    return result;
}


console.log(filterRange(arr, 3, 5));
/*Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть, дефисы удаляются, а все слова после них получают заглавную букву.*/
function camelize(str) {
    const arr = str.split('-');
    for(let i = 1; arr.length > i; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join('');
}


console.log(camelize("background-color"));
camelize("list-style-image") ;
camelize("-webkit-transition") ;
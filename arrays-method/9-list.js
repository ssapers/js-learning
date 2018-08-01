/*Задачи:
Напишите функцию printList(list), которая выводит элементы списка по очереди, при помощи цикла.
Напишите функцию printList(list) при помощи рекурсии.
Напишите функцию printReverseList(list), которая выводит элементы списка в обратном порядке, при помощи рекурсии. Для списка выше она должна выводить 4,3,2,1
Сделайте вариант printReverseList(list), использующий не рекурсию, а цикл.
Как лучше – с рекурсией или без?
*/

const list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

/*function printList(list) {
    while (list) {
        console.log(list.value);
        list = list.next;
    }
}*/

function printList(list) {

    console.log(list.value);

    if (list.next) {
        printList(list.next);
    }


}

/*function printReverseList(list) {


    if (list.next) {
        printReverseList(list.next);
    }

    console.log(list.value);

}*/

function printReverseList(list) {
    const arr = [];

    while (list) {
        arr.push(list.value);
        list = list.next;
    }

    for(let i = arr.length-1; i !==0 ; i--){
        console.log(arr[i]);
    }

}

printReverseList(list);
printList(list);
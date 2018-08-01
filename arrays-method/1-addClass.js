/*В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:
Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:*/

const obj = {
    className: 'open menu'
};

function addClass(obj,str) {
    const arr = obj.className.split(' ');
    if(arr.indexOf(str) === -1) {
        arr.push(str);
    }
    obj.className = arr.join(' ')
}

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

console.log(obj.className);
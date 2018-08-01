/*У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:
Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

*/

const obj = {
    className: 'open menu'
};

function removeClass(obj,str) {
    const arr = obj.className.split(' ');

    for(let i = 0; arr.length > i; i++) {
        if(arr[i] === str) arr.splice(i,1);
    }

    return obj.className = arr.join(' ')
}

removeClass(obj, 'new'); // obj.className='open menu new'
removeClass(obj, 'open'); // без изменений (класс уже существует)
removeClass(obj, 'me'); // obj.className='open menu new me'

console.log(obj.className);
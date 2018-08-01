const arr = [5, 2, 1, -10, 8];

function reverse(a, b) {
    return b - a;
}

arr.sort(reverse);
console.log(arr);
// ### Базовые концепции
// - Переменные (var, let, const)

// function show() {
//     var a = 5;

//     if (true) {
//         var a = 20;
//         console.log(a);
//     }

//     console.log(a);
// }

// show();


// let a = 10;
// a = 20;


// - Типы данных (примитивы и объекты)

// number, string, boolean, undefined, bigint, symbol, null

// array, object, function

// typeof

// console.log(typeof []);

// - Операторы (арифметические, сравнения, логические)

// арифметические
// + - * / % ++ -- **

let a = 5;

console.log(10 % 3); // 1
console.log(++a); // 6
console.log(--a); // 4
console.log(2**4); // 2 * 2 * 2 * 2 = 16

// сравнения
// == === != !== > < >= <=
let c = 5;
let b = 50;

console.log(c == b); // false
console.log(c === b);
console.log(c != b); // true
console.log(c !== b);

// логические
// && + false, || + true, ! = не

let r = true;
let t = false;

console.log(r || t); // r
console.log(r && t); // t
console.log(!true); // false

// - Преобразование типов

let y = 5; // '5'
let u = '456';

console.log(`${y}`); // '5'
console.log(String(y)); // '5'
console.log("" + y); // '5'

console.log(Number(u)); // 456

let q = "";

console.log(Boolean(q)); // false
console.log(Boolean("Hello")); // true

// - Комментарии

// CTRL + /
/*

Hello world


*/
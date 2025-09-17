// ### Задание 3: Преобразование типов
// javascript
// 1. Преобразуйте строку "123" в число тремя разными способами

console.log(Number("123"));
console.log(parseInt("123"));
console.log(parseFloat("22.44"));


// 2. Преобразуйте число 456 в строку

console.log(String(456));
console.log(`${456}`);
console.log(456 + ''); // '456'

// 3. Преобразуйте любое число в булево значение

console.log(5); // 5
console.log(!!5); // true
console.log(!!0); // false
console.log(!!true); // true
console.log(!!"Hello"); // true
console.log(!!""); // false
console.log(Boolean("Hello"));

// 4. Что вернет Boolean(0)? А Boolean("0")?

console.log(Boolean(0));
console.log(Boolean("0"));


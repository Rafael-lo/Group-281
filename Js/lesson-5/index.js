// - Тернарный оператор

let a = 5;

if (a < 10) {
	console.log("True");
} else {
	console.log("False");
}

console.log(a < 10 ? "True" : "False");

// ## 🔤 Функции
// - Объявление функций (function declaration/expression)

//* declaration
function showM1() {
	console.log("object");
}

showM1();


//*expression
const showM2 = function() {
	console.log("object");
}

showM2();

// - Стрелочные функции

const showM3 = () => {
	console.log("object");
}

showM3();

// - Параметры и аргументы

function showMessage(name, surname) {
	console.log("Hello " + name + " " + surname);
}

showMessage("Murad", "Eyvazov");
showMessage("Quseyn", "Malikov");
showMessage("Alex", "Jons");

// function showMessage(...args) {
// 	console.log(args);
// }

// showMessage("Max", "Alexey", 23);
// showMessage("Jane");

// - Возврат значений

let hours = 5;
let perHour$ = 10;

function getSalary() {
	const summ = hours * perHour$;
	return summ;
}

const summ = getSalary();
console.log(summ);

// - Замыкания
// - Рекурсия
// - IIFE (Immediately Invoked Function Expressions)
// ## 🎯 Тема: Циклы и управление выполнением


// ### 🔹 Задание 1: Разделение яблок

```javascript
// У вас есть массив яблок (0 — плохое, 1 — хорошее, 2 — червивое).
// Нужно разделить яблоки на три массива: goodApples, badApples, wormyApples
// Используйте цикл for...of
// В конце выведите все три массива.
const apples = [1, 0, 2, 1, 0, 1, 2, 2, 0, 1];
```

const apples = [1, 0, 2, 1, 0, 1, 2, 2, 0, 1];

const badApples = []; // 0
const goodApples = []; // 1
const wormyApples = []; // 2


for (let apple of apples) {
	if (apple == 0) {
		badApples.push(apple);
	}

	if (apple == 1) {
		goodApples.push(apple);
	}

	if (apple == 2) {
		wormyApples.push(apple);
	}
}

console.log(badApples);
console.log(goodApples);
console.log(wormyApples);



// ### 🔹 Задание 2: Список чисел

```javascript
// 1. Выведите все числа от 1 до 50 с помощью цикла for.
// 2. Выведите все четные числа от 2 до 50 с помощью while.
// 3. Выведите числа от 10 до 1 (обратный отсчет) с помощью do...while.
```

for (let i = 1; i < 50; i++) {
	console.log(i);
}

let i = 0;

while(i < 50) {
	if (i % 2 == 0) {
		console.log(i);
	}

	i++;
}

let a = 10;

do {
	console.log(a);
	a--;
} while(a != 0);


// ### 🔹 Задание 3: Найти сумму

```javascript
// Найдите сумму всех чисел от 1 до 100.
// Используйте цикл for.
// Подсказка: создайте переменную sum и прибавляйте к ней каждое число.
```

let sum = 0;

for (let b = 1; b < 100; b++) {
	sum += b;
}

console.log(sum);


// ### 🔹 Задание 4: Оператор break

```javascript
// У вас есть массив деталей (1 — целая, 0 — брак).
// Нужно перебрать все детали, пока не встретится брак (0).
// Когда встретили брак — вывести сообщение "Брак найден" и остановить цикл.
const details = [1, 1, 1, 1, 0, 1, 1];
```

const details = [1, 1, 1, 1, 0, 1, 1];

for (let detail of details) {
	if (detail == 0) {
		console.log("Брак найден");
		break;
	} else {
		console.log(detail);
	}
}


// ### 🔹 Задание 5: Оператор continue

```javascript
// У вас есть массив оценок студентов.
// Нужно вывести только те оценки, которые выше или равны 4.
// Используйте оператор continue, чтобы пропустить плохие оценки.
const grades = [5, 3, 4, 2, 5, 1, 4];
```

const grades = [5, 3, 4, 2, 5, 1, 4];

for (let grade of grades) {
	if (grade < 4) {
		continue
	} else {
		console.log(grade);
	}
}


// ### 🔹 Задание 6 (⭐ для продвинутых)

```javascript
// У вас есть массив чисел от 1 до 20.
// 1. Найдите только те числа, которые делятся на 3.
// 2. Если число больше 15 — завершите цикл (break).
// 3. Все найденные числа добавьте в новый массив и выведите.
```

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = [];

for (let num of numbers) {
	if (num % 3 == 0) {
		result.push(num);
	}

	if (num > 7) {
		break
	}
}

console.log(result);
//--------------------------------TASK-1--------------------------------
// Дан объект с городами и странами. 
// Вывести масив значения в котором будут строки преобразованные 
// в данный формат: <Столица> - это <Страна>.

const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

let citiesArr = [];

for (let key in citiesAndCountries) {
	citiesArr.push(key + ' -  это ' + citiesAndCountries[key]);
}

console.log('--------------------------------TASK-1--------------------------------');
console.log(citiesArr);


//--------------------------------TASK-2--------------------------------
// Создать функцию которая выведет многомерный массив A. 
// Данный массив содержит в себе список других массивов B. 
// Массивы B должны содержать по 3 значения. Максимальное значение 
// (в примере это переменная amount) должно делится на 3 нацело.

function getArray() {
	const amount = 12;
	const arrResult = [];

	for (let i = 0; i < amount / 3; i++) {

		arrResult[i] = [i * 3 + 1, i * 3 + 2, i * 3 + 3];

	}

	console.log('');
	console.log('--------------------------------TASK-2--------------------------------');
	console.log(arrResult);
}

getArray(); // выведет в консоль [ [1,2,3], [4,5,6], [7,8,9] ].


//--------------------------------TASK-3--------------------------------
// Cоздать объект с названиями дней недели. Где ключами будут ru и en, a значением свойства ru будет массив 
// с названиями дней недели на русском, а en - на английском. После написать функцию которая будет выводить 
// в консоль название дня недели пользуясь выше созданным объектом. Все дни недели начинаются 
// с 1 и заканичаются цифрой 7 (1- понедельник, 7 - воскресенье). 
// Функция хранит переменную lang - название языка дня недели и переменную day - число дня недели. 

const namesOfDays = {
	ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
	en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday ', 'Friday ', 'Saturday', 'Sunday'],
};

// Пример 1

function getNameOfDay() {
	const lang = 'en';
	const day = 7;


	console.log('');
	console.log('--------------------------------TASK-3--------------------------------');
	console.log(namesOfDays[lang][day - 1]);
}

getNameOfDay();


//--------------------------------TASK-4--------------------------------
// Создайте функцию, которая возвращает сумму двух наименьших положительных чисел из массива минимум
// 4 положительных целых чисел.Не передаются числа с плавающей запятой или неположительные целые числа.
// Например, когда массив передается как [19, 5, 42, 2, 77], вывод должен быть 7
// [10, 800, 3453000, 8010]должен вернуться 810
// [12, 898, 899, 900]должен вернуться 910

const arr = [19, 5, 2, 77];
// Sort array with bubble sort
for (let j = 0; j < arr.length; j++) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i + 1]) {
			const buff = arr[i];
			arr[i] = arr[i + 1];
			arr[i + 1] = buff;
		}
	}
}

console.log('');
console.log('--------------------------------TASK-4--------------------------------');

console.log(`Result is: ${arr[0] + arr[1]}`);


//--------------------------------TASK-5--------------------------------
// Дан массив единиц и нулей, преобразуйте эквивалентное двоичное значение в целое число.
// Например: [0, 0, 0, 1]рассматривается как 0001двоичное представление 1.
console.log('');
console.log('--------------------------------TASK-5--------------------------------');


let double = [1, 0, 0, 1, 1, 1, 1];
let answear = 0;
let count = 1;

for (let k = double.length - 2; k >= 0; k--) {
	count *= 2;
	// console.log(count);
	if (double[k] === 1) {
		answear += count;
	}
}

if (double[double.length - 1] === 1) {
	answear += 1
}


console.log(answear);

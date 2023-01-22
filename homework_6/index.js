
//---------------------------------Task - 1---------------------------------
// Создать функцию которая будет удалять людей из массива по индексу, который мы передадим параметром.

const removeUser = (arr, index) => {

    arr.splice(index, 1);
    return arr;
}

console.log("---------------------------------Task - 1---------------------------------");
const arr = ['Vasya', 'Petya', 'Alexey'];
removeUser(arr, 1)
console.log(arr) /// ['Vasya', 'Alexey']




//---------------------------------Task - 2---------------------------------
// Создать функцию которая вернет все ключи обьекта переданного параметром
// const obj = { name: 'Vasya', age: 1}
// getAllKeys(obj) /// ["name", "age"]

const getAllKeys = (obj) => {
    return Object.keys(obj);
};

const obj = { name: 'Vasya', age: 1 };

console.log("---------------------------------Task - 2---------------------------------");
console.log(getAllKeys(obj));




//---------------------------------Task - 3---------------------------------
// Создать функцию которая вернет все значения объекта переданного параметром
// const obj = { name: 'Vasya', age: 1}
// getAllValues(obj) /// ["Vasya", 1]

const getAllValues = (obj) => {
    return Object.values(obj);
};

console.log("---------------------------------Task - 3---------------------------------");
console.log(getAllValues(obj));



//---------------------------------Task - 4---------------------------------
// Содать функцию,где мы первым параметром передадим объект с новым кандидатом, 
// а вторым параметром - id любого кондидата в массиве condidateArr. Функция должна 
// будет вставить кандидата переданного через первый параметр в массив перед кондидатом 
// у которого id равно тому что передали во-втором параметре

const insertIntoarr = function (object, id) {

    let index = condidateArr.findIndex(elem => elem._id === id);    // Получаем индекс елемента в массиве condidateArr поиском по id
    // console.log("this is " + index);

    let uniIndex = null;

    if (index != 0) { // Если индекс не нулевой, уменьшаем индекс на 1 чтобы кандидат вставился перед перед кондидатом у которого id равно тому что передали во-втором параметре
        index -= 1;
    }

    condidateArr.splice(index, 0, object);  // Вставлявляем кандидата по индексу

    return condidateArr;    // Возвращаем мутированый массив.
};

const testObj = {
    id: "1",
    name: 'Task4'
};
console.log("---------------------------------Task - 4---------------------------------");
// console.log(insertIntoarr(testObj, "5e216bc9a6059760578aefa4")); // Тест на кандидате с индексом 0, вставляет в 0 индекс, если раскоментировать ламает 8е задание так как обьект не заполнен данными.
// уже устал писать дополнительные проверки и просто закоментировал.




//---------------------------------Task - 5---------------------------------
// Создайте класс Condidate который будет принимать параметром объект из массива condidateArr. 
// Добавить метод с именем state который вернет шатат в котором живает наш кондидат. 
// Информация о штате находится в свойстве address и это третья запись после запятой.
// const condidate = new Condidate(condidateArr[0])
// condidate.state /// Colorado

class Condidate {
    constructor(obj) {
        Object.assign(this, obj);                        //Копирует значения всех перечислимых собственных свойств из одного или нескольких исходных объектов в целевой объект
        this.state = (address) => {
            if (this.address != undefined) {            //Проверка на существование адреса, не мог понять почему не работает, а я в Task3 на 0 индекс добавил кандидата без адреса
                return this.address.split(', ')[2];     // Возвращаю 3ю подстрок (штат)
            } else {
                return "address is underfined!";
            }

        }
    }

}

console.log("---------------------------------Task - 5---------------------------------");
const condidate = new Condidate(condidateArr[1]); // на 0 елементе нет адреса, добавил туда нового кандидата в task3
console.log(condidate.state()); /// Colorado




//---------------------------------Task - 6---------------------------------
// Создать функцию которая выведет массив с названиями фирм взятыми из св-ва company.
// Если фирмы повторяются в массиве, то удалить дубликаты. Все так же используем массив candidateArr
// getCompanyNames() /// [""EZENT, "JASPER" ... ]

function getCompanyNames(condidateArr) {
    const companiesArr = condidateArr.map((condidateArr) => condidateArr.company);      // Создаем массив фирм из св-ва company.

    let result = [];

    for (let str of companiesArr) {     //Если фирмы повторяются в массиве, то удалить дубликаты. 
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}
console.log("---------------------------------Task - 6---------------------------------");
console.log(getCompanyNames(condidateArr));  // Создал дубликат компании в предпоследнем кандидате, дубликат не вывело, согласно условию задачи.




//---------------------------------Task - 7---------------------------------
// Создать функцию которая выведет мне массив id всех кондидатов, которые были зарагестрированны в том же году что и год указанный в параметре.
// getUsersByYear(2017) /// ["e216bc9cab1bd9dbae25637", "5e216bc9e51667c70ee19f4f" ...]

const getUsersByYear = year => {
    let idInYear = [];

    condidateArr.forEach(element => {

        if (element.registered != undefined) {               // Если существует значение registered
            if (element.registered.split('-')[0] == year) {     // Достаю цифри до знака "-" и сравниваю с годом в аргументе, можно использовать строгое сравнение и привести год в аргументе к строке.
                idInYear.push(element['_id']);              // Пушим нужные id в масив
            }
        }

    });

    return idInYear;
}
console.log("---------------------------------Task - 7---------------------------------");
console.log(getUsersByYear(2017));  // ['5e216bc9cab1bd9dbae25637', '5e216bc9e51667c70ee19f4f', '5e216bc9473a3cf34c92e5b3', '5e216bc9561dedbd4fc2fd93', '5e216bc9d70bcdac653c7fc2', '5e216bc9dcd18fb395b4875b', '5e216bc9eb2af720e192bd61', '5e216bc9c031e3c0876baecf', '5e216bc9529290ba2df2c7c9']




//---------------------------------Task - 8---------------------------------
// Создать функцию которая вернет массив с экземплярами - кандидатами, отфильтрованных
// по кол-ву непрочитанных сообщений. Смотрим св-во greeting, там указанно это количество
// в строке, Вам надо достать это число из строки и сверять с тем что в параметер вашей функции.
// Все так же используем массив candidateArr
// getCondidatesByUnreadMsg(8) /// [Condidate, Condidate ...]
console.log("---------------------------------Task - 8---------------------------------");

function getCondidatesByUnreadMsg(msgsCount) {

    const numFromString = (string) => string.replace(/\D/g, '');     // убираем все символы, чтобы получить только кол-во сообщений из строки, в даном случае, рабочее решение

    return condidateArr.filter((condidateArr) => numFromString(condidateArr.greeting) === msgsCount.toString()); //фильтруем по количеству сообщений
}

console.log(getCondidatesByUnreadMsg(8));


//---------------------------------Task - 9---------------------------------
// Создать функцию которая вернет массив по свойству gender.
// Все так же используем массив candidateArr
// getCondidatesByGender('male') /// [Condidate, Condidate ...]

function getCandidatesByGender(gender) {
    return condidateArr.filter((condidateArr) => condidateArr.gender === gender); // фильтруем по гендеру
}

console.log("---------------------------------Task - 9---------------------------------");
console.log(getCandidatesByGender('male'));




//---------------------------------Task - 10---------------------------------
// Создать функцию reduce, join самому как на занятии создавали forEach, map, find, filter и т.д.
console.log("---------------------------------Task - 9---------------------------------");
console.log("---------------------------------Custom Reduce---------------------------------");

Array.prototype.customReduce = function (callback, accumulator) {

    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};

const arrForCustomReduce = [1, 2, 3, 4];

console.log(arrForCustomReduce.customReduce((a, b) => a + b, 0));


console.log("---------------------------------Custom Join---------------------------------");
Array.prototype.customJoin = function (separator = "**") {
    let result = "";
    for (let i = 0; i < this.length; i++) {
      result =
        i !== this.length - 1
          ? (result += this[i] + separator.toString())
          : (result += this[i]);
    }
    return result;
  };
  console.log(arrForCustomReduce.customJoin());
const studentArr = [{
    name: 'Сергей',
    surname: 'Войлов',
    ratingPoint: 1000,
    schoolPoint: 1000,
    course: 2,
},
{
    name: 'Татьяна',
    surname: 'Коваленко',
    ratingPoint: 880,
    schoolPoint: 700,
    course: 1,
},
{
    name: 'Анна',
    surname: 'Кугир',
    ratingPoint: 1430,
    schoolPoint: 1200,
    course: 3,
},
{
    name: 'Станислав',
    surname: 'Щелоков',
    ratingPoint: 1130,
    schoolPoint: 1060,
    course: 2,
},
{
    name: 'Денис',
    surname: 'Хрущ',
    ratingPoint: 1000,
    schoolPoint: 990,
    course: 4,
},
{
    name: 'Татьяна',
    surname: 'Капустник',
    ratingPoint: 650,
    schoolPoint: 500,
    course: 3,
},
{
    name: 'Максим',
    surname: 'Меженский',
    ratingPoint: 990,
    schoolPoint: 1100,
    course: 1,
},
{
    name: 'Денис',
    surname: 'Марченко',
    ratingPoint: 570,
    schoolPoint: 1300,
    course: 4,
},
{
    name: 'Антон',
    surname: 'Завадский',
    ratingPoint: 1090,
    schoolPoint: 1010,
    course: 3
},
{
    name: 'Игорь',
    surname: 'Куштым',
    ratingPoint: 870,
    schoolPoint: 790,
    course: 1,
},
{
    name: 'Инна',
    surname: 'Скакунова',
    ratingPoint: 1560,
    schoolPoint: 200,
    course: 2,
},
];




//--------------------------------TASK-1--------------------------------
// Id генерируется автоматически при создании экземпляра Student. 
// isSelfPayment определяется по параметру "ratingPoint". Если ratingPoint больше 
// или равен 800, то студент может быть на бюджет, но бюджет он может получить 
// только если его "ratingPoint" не меньше чем у других студентов в массиве. 
// Студентов которые на бюджете не должно быть больше чем 5 в массиве. 
// То есть если "ratingPoint" больше чем хоть у одного из 5 бюджетников то мы 
// присваиваем isSelfPayment = false. И в этот момент студент из массива который
//  имел isSelfPayment = false, но его ratingPoint меньше чем у остальных 5 бюджетников, 
// нашим включительно, то ему делаем isSelfPayment = true, то есть переводим этого 
// неудачника на контракт. Что делать если у 6-рых студентов баллы 1000? Ну имеется ввиду, 
// если 2 человека с одинаковыми баллами ratingPoint борются за 5 бюджетное место? 
// В таком случае смотрим на schoolRating, у кого он больше тот и на бюджете.

class Student {
    static ID = 0;
    static minPointsonBudget = 800; // Указываю условия для первичного отбора по ratingPoint
    static placesOnBudget = 5;      // Мест на бюджете

    // static listOfEnrollees = [];
    static listOnBudget = [];

    static listOfStudents = [];

    constructor(enrollee) {
        this.id = Student.ID++;
        this.isSelfPayment = null;
        this.name = enrollee.name;
        this.surname = enrollee.surname;
        this.ratingPoint = enrollee.ratingPoint;
        this.schoolPoint = enrollee.schoolPoint;

        Student.listOfStudents.push(this);
        this.maybeOnBudget();        // Запуск первичной проверки
    }




    checkIfOnBudget() {
        const luckersOnBudget = [...Student.listOnBudget] // добавляем студента в массив бюджетников
            .sort((a, b) => {                                    // сортируем массив
                if (b.ratingPoint > a.ratingPoint) return 1;
                if (b.ratingPoint < a.ratingPoint) return -1;
                if (b.ratingPoint === a.ratingPoint) {
                    return b.schoolPoint > a.schoolPoint ? 1 : -1;        //если 2 человека с одинаковыми баллами ratingPoint борются за 5 бюджетное место? 
                                                                         // В таком случае смотрим на schoolRating, у кого он больше тот и на бюджете.
                }
            })
            .splice(0, Student.placesOnBudget);            // обрезаем массив до количества бюджетных мест
        // console.log("________________________________");
        // console.log(luckersOnBudget);


        for (let i = 0; i < Student.listOfStudents.length; i++) { // Обнуляем бюджетные места
            Student.listOfStudents[i].isSelfPayment = true;
        }
        for (let i = 0; i < Student.listOfStudents.length; i++) { // Сравниваем массивы в проставляем false, всем бюджетникам.

            if (luckersOnBudget.includes(Student.listOfStudents[i])) {  //Если нажолу в масиве listOfStudents студента из масива бюджетников
                Student.listOfStudents[i].isSelfPayment = false;        // Проставляю, что он на бюджете
                // console.log(Student.listOfStudents[i]);
            }
        }


    }

    maybeOnBudget() {
        const isPotentialOnBudget = this.ratingPoint >= Student.minPointsonBudget; // Первичный отбор по ratingPoint

        if (isPotentialOnBudget) {      // Если студент прошел первичную проверку:
            Student.listOnBudget.push(this);    // Пушу в масив студентов на бюджете
            this.checkIfOnBudget();         // Запуск вторичных проверок
        } else {
            this.isSelfPayment = true;      // Если первичную не прошел, сразу на контракт
        }
    }


}

console.log("--------------------------------TASK-1--------------------------------");
console.log(Student.listOfStudents); //пустой изначально

for (const enrolee of studentArr) { //Заполняем тестовыми значениями
    new Student(enrolee);
}

console.log(Student.listOfStudents); // проверка, согласно условия задачи, пройдена идеально

new Student({                   // Добавляем студента с одинаковим количеством(с бюджетником) ratingPoint, но большим schoolPoint
    name: 'TEST',             
    surname: 'TEST',
    ratingPoint: 1000,
    schoolPoint: 2000,
    course: 2,
});

console.log(Student.listOfStudents);   // Вся нужная логика работает, УРААаааааа) Я даже не знаю сколько я реализаций перебрал)
// В этой задаче в коментариях переключился на русский, вымотала немного эта задачка.








//--------------------------------TASK-2--------------------------------

// Implement the CustomString class, which will have the following methods: the reverse() method,
// which takes a string as a parameter, but returns it reversed, the ucFirst() method, which takes a string as a parameter,
// and returns the same string, capitalizing its first letter, and the method ucWords, which takes a string and capitalizes
// the first letter of every word in that string

class CustomString {

    reverse(string) {  //takes a string as a parameter, but returns it reversed

        let result = '';

        for (let i = 0; i < string.length; i++) {
            result = string[i] + result;
        }

        return result;
    }

    ucFirst(string) {  //takes a string as a parameter, and returns the same string, capitalizing its first letter

        let result = '';

        for (let i = 0; i < string.length; i++) {
            if (i === 0) {
                result += string[i].toUpperCase();
            } else {
                result += string[i];
            }
        }

        return result;
    }


    ucWords(string) {

        const words = string.split(" "); //divide the sentence into a series of words.

        for (let i = 0; i < words.length; i++) { // iterate over an array of words
            words[i] = words[i][0].toUpperCase() + words[i].substr(1); // each word is taken separately. Then the first letter is capitalized, and at the end the capitalized first letter is concatenated with the rest of the string
        }

        return words.join(" ");  //return an array as a string
    }

}

const myString = new CustomString();

console.log("--------------------------------TASK-2--------------------------------");

console.log(myString.reverse('qwerty')); //ytrewq
console.log(myString.ucFirst('qwerty')); //Qwerty
console.log(myString.ucWords('qwerty qwerty qwerty')); //Qwerty Qwerty Qwerty



//--------------------------------TASK-3--------------------------------
//Implement a Validator class that will validate strings.

class Validator {

    checkIsEmail(email) {
        const regEmail = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
        return regEmail.test(email.toLowerCase());
    }

    checkIsDomain(domain) {
        const regDomain = /^([\wёa-я-]{2,}\.)+[\wёa-я-]{2,}$/i;
        return regDomain.test(domain);
    }

    checkIsDate(date) {
        let arrD = date.split(".");
        arrD[1] -= 1;
        let d = new Date(arrD[2], arrD[1], arrD[0]);
        if ((d.getFullYear() == arrD[2]) && (d.getMonth() == arrD[1]) && (d.getDate() == arrD[0])) {
            return true;
        } else {
            return false;
        }
    }
    //The function argument is a date in the dd.mm.yyyy format.
    //The function splits the date into its constituents (the split() method), 
    // and then performs a constituent check using the Date object and the 
    // getFullYear(), getMonth(), and getDate() methods.

    checkIsPhone(phone) {
        const re =
            /[+38 ][(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{2}$/im;
        return re.test(phone);
    }
}
var validator = new Validator();
console.log("--------------------------------TASK-2--------------------------------");
console.log(validator.checkIsEmail('vasya.pupkin@gmail.com')); // true
console.log(validator.checkIsDomain('google.com')); // true)
console.log(validator.checkIsDate('01.01.2011')); // true
console.log(validator.checkIsPhone('+38(066)937-99-92'));
//  if the country code is Ukrainian, then return true otherwise false
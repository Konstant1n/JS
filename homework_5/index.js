
// Пришлось это ДЗ делать 2 раза, умудрился как-то не сохранить и выключился свет.

//---------------------------------Task - 1---------------------------------
// Напиши функцию, которая принимает 1 параметр. При первом вызове, она его запоминает, 
// при втором - суммирует переданый параметр с тем, что передали первый раз и тд. 
// апрещается использовать глобальные переменные как хранилище результатов счетчика.
// counter(3) // 3
// counter(5) // 8
// counter(228) // 236
// etc.

function createCounter() {
    let count = 0;

    return function (number) {
        // console.log(number);
        count += number;        // Создаем "замыкание", которое "держит" значение count
        // console.log(count);
        return count;
    }
}

let counter = createCounter();
console.log("---------------------------------Task - 1---------------------------------");
console.log(counter(3));
console.log(counter(5));
console.log(counter(228));




//---------------------------------Task - 2---------------------------------
// Создать функцию которая будет возвращать массив в котором будут лежать все значения - аргументы
// переданные в данную функцию. Но если мы ничего не передадим в параметрах, то массив очистится. 
// Запрещается использовать глобальные переменные как хранилище значений.
// getUpdatedArr(3) // [3]
// getUpdatedArr(5) // [3, 5]
// getUpdatedArr({name: 'Vasya'}) // [3, 5, {name: 'Vasya'}]
// getUpdatedArr() // []
// getUpdatedArr(4) // [4]

function updateArr() {
    let array = [];

    return function (element) {
        if (!element) { // Если в параметре фунцции ничего не передоно, то отдаю пустой масив.
            return array = [];
        }

        array.push(element); // Иначе пушу елемент в массив.

        return array;
    }
}

let getUpdatedArr = updateArr();


console.log("---------------------------------Task - 2---------------------------------");
console.log(getUpdatedArr(3));
console.log(getUpdatedArr(5));
console.log(getUpdatedArr({ name: 'Vasya' }));
console.log(getUpdatedArr());
console.log(getUpdatedArr(4));


//---------------------------------Task - 3---------------------------------
// Содать функцию , которая при каждом вызове будет показывать разницу в секундах 
// между временем когда ее вызывали последний раз и теперешним. Вызываем первый раз, 
// то ретерним строку 'Enabled'. Запрещается использовать глобальные переменные как хранилище значений

function getLastTime() {
    let lastTime = null;

    return function () {
        if (!lastTime) {                // Если переменная пуста
            lastTime = Date.now();      // Присваиваем текущее время
            return 'enabled';           // При первом вызове ретурним enabled
        }
        const timeNow = Date.now();
        const timeDifference = Math.round((timeNow - lastTime) / 1000);      //разницу в секундах между временем когда ее вызывали последний раз и теперешним
        lastTime = timeNow;     //Присваивем текущее время, оно "висит" в замыкании до следующего вызова
        return timeDifference;
    };
}

const getTime = getLastTime();

// Первый раз делал через setInterval, подсмотрел еще такое решение, решил для разнообразия так сделать.
console.log("---------------------------------Task - 3---------------------------------");
// Запускаем первый раз в консоли.
// (getTime());
// enabled
// (getTime());
// // Запускаем через 2 сек в консоли.
// getTime() // 2


//---------------------------------Task - 4---------------------------------
// Создать таймер обратного отсчета, который будет в console выодить время в формате MM:SS. 
// Где MM - количество минут, SS - количество секунд. При этом когда закончится время, 
// нужно вывести в console строку "Timer End".

function timeCounter(timeInSeconds) {

    const intID = setInterval(() => {   // Запуск кода 1 раз в секунду

        if (timeInSeconds === 0) {      // Если время закончилось
            console.log('Time End');
            clearInterval(intID);       // Остановка интеравала
            return;
        }

        let minutes = Math.floor(timeInSeconds / 60);   // Получаем количество минут
        let seconds = timeInSeconds % 60;               // Получаем количество секунд

        let strMin = null;
        let strSec = null;

        if (minutes.toString().length < 2) {        // Если минут меньше 10, точнее меньше 2 цифр в количестве минут.
             strMin = "0" + minutes;                // Прибавляєм 0 в начале, чтобы соблюдать формат вывода 00:00
        } else {
            strMin = minutes;
        }

        if (seconds.toString().length < 2) {
             strSec = "0" + seconds;
        } else {
            strSec = seconds;
        }

        --timeInSeconds;    // Раз за интеравал отнимаем 1 секунду

        console.log(strMin + ":" + strSec); //Виводим в формате 00:00


    }, 1000)
}

console.log("---------------------------------Task - 4---------------------------------");
timeCounter(700);

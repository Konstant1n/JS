
//---------------------------------Task - 1---------------------------------
// Создать поиск кандидатов в массиве candidateArr по номеру телефона. 
// Номер телефона может быть указан не полностью и в любом формате.




console.log("---------------------------------Task - 1---------------------------------");

function searchCandidatesByPhoneNumber(phone) {
    const leftOnlyNumber = (string) => string.replaceAll(/\D/g, '');       // оставляю только цифры в передаваемом параметром номере
    const norPhoneString = leftOnlyNumber(phone);   //  оставляю только цифры в параметре candidate.phone

    return condidateArr.filter((candidate) => {         // фільтрую массив condidateArr
        const candidatePhone = leftOnlyNumber(candidate.phone);
        return candidatePhone.includes(norPhoneString);   // возвращаю кандидата, если у него номер содержит часть переданой в фунцию строки
    });
}

console.log(searchCandidatesByPhoneNumber('43'));
console.log(searchCandidatesByPhoneNumber('+1(869) 40'));
console.log(searchCandidatesByPhoneNumber('43'));
console.log(searchCandidatesByPhoneNumber('+1(869)408-39-82'));




//---------------------------------Task - 2---------------------------------
// Создать функию которая найдет кандидата по  _id и вернет его из массива candidatesArr 
// c отформатированной датой регистрации (поле registred). Дата должна иметь формат DD/MM/YY.
const getCandidateById = id => {
    const candidate = condidateArr.find(e => e._id === id);
    // return console.log(candidate);

    candidate.registered = new Date(candidate.registered)   // создание новой Date на основе registered
        .toLocaleDateString()   // приведение к формату  "05.11.2015"
        .replace(/\./g, '/');   // замена разделителей на "/";

    return candidate;
};

console.log("---------------------------------Task - 2---------------------------------");
console.log(getCandidateById("5e216bc9a6059760578aefa4"));  // теперь value registered в таком виде: "05/11/2015"



//---------------------------------Task - 3---------------------------------
// Написать функцию которая будет сортировать массив canidatesArr по количеству денег лежащих
//  на балансе (смотрим свойство balance)   в том порядке, в котором ей укажут в аргементе sortBy. 
//  Если параметр не был передан, то вернет массив в первоначальном состоянии.
// sortCandidatesArr('asc') 
// // отсортирует по-возростанию и вернет отсортированный массив
// sortCandidatesArr('desc') 
// // отсортирует по-убыванию и вернет отсортированный массив
// sortCandidatesArr() 
// // не будет сортировать, а просто вернет первоначальный массив


const sortCandidatesArr = (sortBy) => {
    switch (sortBy) {
        case 'asc': // Сортировка по возрастанию
            return [...condidateArr].sort((a, b) =>
                a.balance.slice(1).replace(/\D/g, '') - b.balance.slice(1).replace(/\D/g, '')   // Для сравнения обрезаем $ в начале строки и оставляем только цифры.
            )

        case 'desc':    // Сортировка по убыванию
            return [...condidateArr].sort((a, b) =>
                b.balance.slice(1).replace(/\D/g, '') - a.balance.slice(1).replace(/\D/g, '')
            )

        default:    // без указания аргумента не будет сортировать, а просто вернет первоначальный массив
            return condidateArr;
    }

};

console.log("---------------------------------Task - 3---------------------------------");
console.log(sortCandidatesArr('asc'));
console.log(sortCandidatesArr('desc'));
console.log(sortCandidatesArr());




//---------------------------------Task - 4---------------------------------
// Написать функцию, которая вернет объект в котором название ключей будут цвета глаз, 
// а значением - массив с кандидатами имеющие такой цвет глаз. При этом нельзя самому 
// указывать первоначальный объект с возможными вариантами цветами глаз, а сгенерировать 
// их на основе массива с кандидатами, то есть пройтись по массиву candidatesArr и брать 
// смотреть на свойство eyeColor и добавлять значение цвета глаз кандидата как ключ объекта, 
// если такого ключа не существует, ну и не добавлять - если  одноименный ключ уже существует



function getEyeColorMap() {
    const candidateByEye = new Map();  // создаю коллекцию ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.
  
    for (const candidate of condidateArr) {     // перебираем массив condidateArr
      const candidatesByEyeColor = candidateByEye.get(candidate.eyeColor) || new Array; // Map.get - возвращает значение по ключу или undefined, если ключ key отсутствует.

      candidateByEye.set(candidate.eyeColor, [ ...candidatesByEyeColor, candidate ]);   //Map.set(key, value) – записывает по ключу key значение value.
    }
  
    return candidateByEye;
  }
  

  
  const eyeColorMap = getEyeColorMap();
  console.log("---------------------------------Task - 4 (first way)---------------------------------");
  console.log(eyeColorMap);
  // Решение изначально не мое, но интересное, разобрал и оставил себе, как вариант.



//---------------------------------Task - 4 (second way)---------------------------------

//Решение стандартными методами: 
  
  const getEyeColorMap2 = () => {
    let obj = {};       // Новый обьект, в который будем собирать

    condidateArr.forEach((item) => {            // Перебираем масив
        if (!obj[item.eyeColorcand]) {          // если еще нет такого цвета глаз
            obj[item.eyeColorcand] = [];        // Добавляем новый ключ
            return obj[item.eyeColorcand].push(item);       // И пушим кандидати в массив 
        }  
        return obj[item.eyeColorcand].push(item);       // Если такой ключ(цвет глаз) уже есть в obj - пушим кандидата сразу    
    })

    return obj;  
};

const eyeColorMap2 = getEyeColorMap2();
  console.log("---------------------------------Task - 4 (second way)---------------------------------");
  console.log(eyeColorMap);
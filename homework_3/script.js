const emplyeeArr = [
    {
        id: 1,
        name: 'Денис',
        surname: 'Хрущ',
        salary: 1010,
        workExperience: 10, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 2,
        name: 'Сергей',
        surname: 'Войлов',
        salary: 1200,
        workExperience: 12, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 3,
        name: 'Татьяна',
        surname: 'Коваленко',
        salary: 480,
        workExperience: 3, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 4,
        name: 'Анна',
        surname: 'Кугир',
        salary: 2430,
        workExperience: 20, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'female'
    },
    {
        id: 5,
        name: 'Татьяна',
        surname: 'Капустник',
        salary: 3150,
        workExperience: 30, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 6,
        name: 'Станислав',
        surname: 'Щелоков',
        salary: 1730,
        workExperience: 15, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 7,
        name: 'Денис',
        surname: 'Марченко',
        salary: 5730,
        workExperience: 45, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'male'
    },
    {
        id: 8,
        name: 'Максим',
        surname: 'Меженский',
        salary: 4190,
        workExperience: 39, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 9,
        name: 'Антон',
        surname: 'Завадский',
        salary: 790,
        workExperience: 7, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 10,
        name: 'Инна',
        surname: 'Скакунова',
        salary: 5260,
        workExperience: 49, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 11,
        name: 'Игорь',
        surname: 'Куштым',
        salary: 300,
        workExperience: 1, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
];


//--------------------------------TASK-1--------------------------------
// Create a function - a constructor that will have inside all the properties of the emplyee object from the array emplyeeArr;


// Long but clear solution

const Employee = function (employee) {
    this.id = employee.id;
    this.name = employee.name;
    this.surname = employee.surname;
    this.salary = employee.salary;
    this.workExperience = employee.workExperience;
    this.isPrivileges = employee.isPrivileges;
    this.gender = employee.gender;
};


//--------------------------------TASK-2--------------------------------
// Add functions - constructor method (remember about prototype):
// getFullName which will Adding the getFullName Method to the Employee Prototype

Employee.prototype.getFullName = function () {   //Adding the getFullName Method to the Employee Prototype
    return this.surname + ' ' + this.name;       //Adding the getFullName Method to the Employee Prototype using concatenation
};





//--------------------------------TASK-3--------------------------------
// Create a new array based on emplyeeArr which will contain the same objects, but created by the Emploee constructor function. 
// The new array must contain the name emplyeeConstructArr.


let createEmployesFromArr = (arr) => {                  //Create an arrow function that will take an array as an argument

    const newEmployeeArr = [];                          //Create an empty array

    for (const employee of arr) {                       //Looping through an array element by element
        const newEmployee = new Employee(employee);     //Assign a new Employee object to the newEmployee variable, in which we put the object from the passed array
        newEmployeeArr.push(newEmployee);               //Push the newEmployee variable into the emplyeeConstructArr array
    }

    return newEmployeeArr; //Returning a new array

};
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr); //Create a new array based on emplyeeArr
// console.log('--------------------------------TASK-3--------------------------------');
// console.log(emplyeeConstructArr);


//--------------------------------TASK-4--------------------------------
//Create a function that will return an array with all the full names of each employee
//contained in emplyeeConstructArr;

const getFullNamesFromArr = (arr) => {                  //Create an arrow function that will take an array as an argument

    const newEmployeeArr = [];                          //Create an empty array

    for (const employee of arr) {                       //Looping through an array element by element
        newEmployeeArr.push(employee.getFullName());    //Push getFullName created in task-2 to a new array     
    }

    return newEmployeeArr; //Returning a new array

};

// console.log('--------------------------------TASK-4--------------------------------');
// console.log(getFullNamesFromArr(emplyeeConstructArr));



//--------------------------------TASK-5--------------------------------
const getMiddleSalary = (arr) => {

    let sumOfSalary = 0;

    for (const employee of arr) {           //Looping through an array element by element
        sumOfSalary += employee.salary;     //Push getFullName created in task-2 to a new array     
    }

    let MiddleSalary = sumOfSalary / arr.length; //Calculate the average salary of all employees
    return Math.round(MiddleSalary); //Return rounded value
};

// getMiddleSalary(emplyeeConstructArr); 
// console.log(getMiddleSalary(emplyeeConstructArr));


//--------------------------------TASK-6--------------------------------
// Create a function that will randomly select an employee from the emplyeeConstructArr array. 
// You must take into account the length of the array in the function, 
// because if there are 7 workers, and the random number is greater than 7, 
// then the result will be undefined. You can use the declared function in your own. 
// Math random is a hint

const getRandomEmployee = (arr) => {

    randomNumber = Math.floor(Math.random() * (arr.length - 0) + 0); //We get a random number from 0 to the length of the array
    // console.log(randomNumber);
    return arr[randomNumber]; //Returning a random employee from an array
}


//--------------------------------TASK-6--------------------------------
// console.log (getRandomEmployee(emplyeeConstructArr));



//--------------------------------TASK-7--------------------------------
// Create a descriptor with a fullInfo property that will write all the properties 
// passed to it in the instance from which it is called. And give out all properties, 
// if you refer to it, as a string <Property name> - <value> separated by commas.

const employeeObj = new Employee(emplyeeArr[0]);

console.log(employeeObj);

Object.defineProperty(employeeObj, 'fullInfo', {
    get: function () {
        return `id - ${this.id}, name - ${this.name}, surname - ${this.surname}, salary - ${this.salary}, workExperience - ${this.workExperience}, isPrivileges - ${this.isPrivileges}, gender - ${this.gender}`
    },

    set: function (property) {
        for (let key in property) {
            if (this.hasOwnProperty(key)) {
                this[key] = property[key];
            }
        }
    },
})

console.log(employeeObj.fullInfo);

employeeObj.fullInfo = { name: 'Вася', salary: 9000, email: 'ex@mail.ua' };

console.log(employeeObj);
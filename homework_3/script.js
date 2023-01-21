//--------------------------------TASK-1--------------------------------
// Create a constructor function that will have all the properties of the emplyee object from the emplyeeArr array;

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

// console.log('--------------------------------TASK-3 - end--------------------------------');




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

console.log('--------------------------------TASK-4--------------------------------');
console.log(getFullNamesFromArr(emplyeeConstructArr));



//--------------------------------TASK-5--------------------------------
//Create a function that returns the average salary of all employees

const getMiddleSalary = (arr) => {

    let sumOfSalary = 0;

    for (const employee of arr) {
        sumOfSalary += employee.salary;     //Collecting the sum of all salaries    
    }

    let MiddleSalary = sumOfSalary / arr.length; //Divide the amount by the number of employees
    return Math.round(MiddleSalary); //Return rounded value
};

// getMiddleSalary(emplyeeConstructArr); 
console.log('--------------------------------TASK-5--------------------------------');
console.log(getMiddleSalary(emplyeeConstructArr));


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


console.log('--------------------------------TASK-6--------------------------------');
console.log(getRandomEmployee(emplyeeConstructArr));



//--------------------------------TASK-7--------------------------------
// Create a descriptor with a fullInfo property that will write all the properties 
// passed to it in the instance from which it is called. And give out all properties, 
// if you refer to it, as a string <Property name> - <value> separated by commas.


console.log('--------------------------------TASK-7--------------------------------');


const employeeObj = new Employee(emplyeeArr[0]);


Object.defineProperty(employeeObj, 'fullInfo', {
    get() {
        for (const key in employeeObj) {
            if (typeof employeeObj[key] !== 'function') { // вирішення проблеми, якщо key це функція, скоріше за все це трохи костильно, але дозволяє виконати задачу.
            }
        }
        return employeeObj; // не розумію чому всі намагалися тут вивести масив, в задачі ж видно, що повертатися має об’єкт.
    },

    set(properties) {
        for (const property in properties) {
            if (this.hasOwnProperty(property)) { // Якщо властивості в об'єкті, що передається, не було оголошено в класі, то цю властивість не записуємо в екземпляр
                this[property] = properties[property];
            }
        }
    }
}
);

console.log(employeeObj);
// Employee {id: 1, name: 'Денис', surname: 'Хрущ', salary: 1010, workExperience: 10, …}

employeeObj.fullInfo = { name: "Вася", salary: 9000, email: "ex@mail.ua" };

console.log(employeeObj.fullInfo);
//Employee {id: 1, name: 'Вася', surname: 'Хрущ', salary: 9000, workExperience: 10, …}


// ---------------------------- TASK 1 ----------------------------
console.log('Task 1 result:');
console.log(' ');

for (let i = 1; i <= 10; i++) {

    let a = "Fiz";
    let b = "Buz";

    if (i % 3 === 0) {
        console.log(a + b);

    } else if (i % 2 === 0) {
        console.log(a);

    } else if (i % 2 !== 0) {
        console.log(b);
    }
}

// ---------------------------- TASK 2 ----------------------------

let fact = 7;
let result = 1;

for (let i = fact; i > 0; i--) {
    result *= i;
}
console.log('');
console.log('Task 2 result:');
console.log(result);


// ---------------------------- TASK 3 ----------------------------

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

console.log('');
console.log('Task 3 result:');

let totalPaper = consumptionPerWeek * weeksAmount;
let roundresult = (totalPaper - (totalPaper % sheetsInReamPaper)) / sheetsInReamPaper;

if (totalPaper % sheetsInReamPaper !== 0) {
    console.log(++roundresult);
} else {
    console.log(roundresult);
}


// ---------------------------- TASK 4 ----------------------------

const roomsOnFloor = 3;

const floors = 9;

const roomNumber = 456;

let porch = 0;
let floor = 0;

const amountRoomOnPorch = roomsOnFloor * floors;

console.log('');
console.log('Task 4 result:');

if (roomNumber % amountRoomOnPorch === 0) {
    porch = roomNumber / amountRoomOnPorch;
} else {
    porch = (roomNumber - roomNumber % amountRoomOnPorch) / amountRoomOnPorch + 1;
}

console.log('Porch is:' + ' ' + porch);

let leftRoomsInLastPorch = roomNumber - ((porch - 1) * amountRoomOnPorch);

if (leftRoomsInLastPorch % roomsOnFloor === 0) {
    floor = leftRoomsInLastPorch / roomsOnFloor;
} else {
    floor = (leftRoomsInLastPorch - leftRoomsInLastPorch % roomsOnFloor) / roomsOnFloor + 1;
}

console.log('Floor is:' + ' ' + floor);
console.log('');
console.log('---------------------------- TASK 5 ----------------------------');
console.log('');

// ---------------------------- TASK 5 ----------------------------

const medianNumber = 10;

let i = 0;
let j = 0;

let maxLine = medianNumber;
let space = '';
let symbol = '';

while (i < maxLine) {
    space = '';
    symbol = '';

    for (j = 0; j < maxLine - i; j++) {
        space += '-';
    }
    for (j = 0; j < 2 * i + 1; j++) {
        symbol += '#';
    }
    console.log(space + symbol + space);
    i++;
}
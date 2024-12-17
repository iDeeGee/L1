// function greetUser(userName) {
//     userName = userName + "!";
//     let greeting = "Hello, " + userName;
//     console.log(greeting);
// }

// let userName = "Joe";
// // greetUser(userName);
// // // console.log(userName);

// function greetUser2(userName, text = "Привет, ") { // аргумент функции, значение по умолчанию
//     userName = userName + "!";
//     let greeting = text + userName;
//     console.log(greeting);     
// }
// greetUser2(userName);
// greetUser2(userName, "Hi, ");

// function greetingUser2(userName, oneMoreFunction()){}

// // наследие прошлого 
// function showMessage(from, text) {
//     if (text === undefined) {
//         text = "текст не добавлен";
//     }
//     console.log(from + ": " + text );
// }

// // возврат значений
// function howReturnWorks() {
//     return 8;
//     return 9; // не вернётся
// }
// console.log(howReturnWorks());

// function getSum(a, b) {
//     sum = a + b;
//     return sum;
// }
// console.log(getSum(5, -10));

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } 
//     else {
//         return confirm('Вход запрещён');
//     }    
// }
// console.log(checkAge(25));

// let greeting = function() {
//     console.log("Добрый день!");
// }

// console.log(greeting);

// let func = greeting;
// console.log(func);

// стрелочные функции

// let numbers = [6, 187, 66, 4, 67, 30, 18];
// console.log(numbers.sort((a, b) => a - b));

// let sum1 = (a, b) => a + b;

// let sum2 = function(a, b) {
//     return a + b;
// }
// console.log(sum1(6, 5));
// console.log(sum2(6, 5));

// let mult = c => c * 2;
// console.log(mult(10));

// let greeting1 = () => console.log("Hello!");
// greeting1();

// let sum3 = (a, b) => {
//     let result = a + b;
//     return result;
// }
// console.log(sum3(7, 3));


// // пользовательская ф-ция
// function greetAnna() {
//     console.log("Hello, Anna!")
// }

// greetAnna();

// // область видимости переменных
// function greetAnna1() {
//     let greeting = "Hello Anna1";
//     console.log(greeting);
// }

// greetAnna1();
// // console.log(greeting);

let userName1 = "Anna2 ";
function greetAnna2() {
    let greeting = "Hello, " + userName1;
    console.log(greeting); 
}

greetAnna2();

function greetAnna3() {
    userName1 = "Hobana";
    let greeting = "Hello !!! " + userName1;
    console.log(greeting);
}
console.log("--------------");
console.log(userName1);
greetAnna3();
console.log(userName1);
greetAnna2();
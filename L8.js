// let newDate = new Date();

// //newDate = new Date(0);


// let year = newDate.getFullYear();
// let month = newDate.getMonth();
// let day = newDate.getDate();
// let hours = newDate.getHours();
// let minutes = newDate.getMinutes();
// let seconds = newDate.getSeconds();
// let milliseconds = newDate.getMilliseconds();

// // console.log(day);
// //console.log(newDate.getTime());

// // ------------------------------------------------------------------
// let date = new Date(2016, 1, 28); //месяцы 0 - 11
// console.log(date.getDate());

// date.setDate(date.getDate() + 2); // авто корректировка даты.
// console.log(date);

// // ------------------------------------------------------------------

// let currentTimeStamp = new Date();
// let myBirthDayTimeStamp = new Date("2024-12-24");
// const SECS_PER_DAY = 60 * 60 * 24 * 1000;
// let daysToNextBirthDay = parseInt((myBirthDayTimeStamp - currentTimeStamp) / SECS_PER_DAY); // без getTime работает!
// console.log(daysToNextBirthDay);

// let user = {
//     name: "Hoba",
//     age: 18,
//     toString() {
//         return `{name: "${this.name}", age: "${this.age}"}`;
//     }
// };
// console.log(user);

// let userNew = {
//     name: "Hopa",
//     age: 55,
//     isAdmin: false,
//     courses: ["html", "css", "js"]
// };

// let json = JSON.stringify(userNew); // сериализация 
// console.log(json);
// console.log(typeof(json));

// console.log(JSON.stringify(1));
// console.log(JSON.stringify("Nuka"));
// console.log(JSON.stringify(true));
// console.log(JSON.stringify([1, 2, 3]));

// ВЛЛОЖЕННЫЕ ОБЪЕКТЫ
// let meetup = {
//     title: "Conference",
//     room: {
//         number: 23,
//         participants: ["Hoba", "Hopa"],
//         date: new Date("2024-12-17"),
//     },
//     toJSON() {
//         return this.title;
//     }
// };

// console.log(JSON.stringify(meetup));


//let json = JSON.stringify(value, [replacer, space]); 
//let value = JSON.parse(str, [reviver]);


//console.log(JSON.parse({"name": "Hopa","age": 55,"isAdmin": false,"courses": ["html","css","js"]}));
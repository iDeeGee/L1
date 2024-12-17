// // // объекты
// // let obj1 = new Object(); // конструктор объекта.
// // let obj2 = {}; // литерал объекта.

// let autorizedUser = {
//     name: "JoJo",
//     login: "JoJo_hobana",
//     year: 1990,
//     phone: "8(999)777-77-77",
//     "has friends": true,   
//     age: 35,  
// };

// // autorizedUser.itMale = true;
// // console.log(autorizedUser);

// // delete autorizedUser.age;
// // console.log(autorizedUser);


// const userFullName = {
//     firstName: "Joe",
//     surname: "Wowovo",
// };

// console.log(userFullName);

// userFullName.firstName = "Bububu";

// console.log(userFullName);

// let fruit = "pineApples";
// let market = {
//     [fruit] : 100 //pineApples: 100
// };
// console.log(market["pineApples"]);
// console.log(market.pineApples);

// console.log("pineApples" in market); // есть ли ключ "pineApples" в объекте market.
// console.log("Apples" in market);

// console.log("------------------------");
// for (let key in autorizedUser) {
//     console.log(key, autorizedUser[key]); // перебор ключей в объекте + значения ключей.
// }


// // map
// let map = new Map();
// map.set("1", "stringAsKey");
// map.set(1, "numAsKey");
// map.set(true, "boolAsKey");

// //console.log(map);
// console.log(map.get(1)); // получить значение по ключу.
// console.log(map.has("20")); // проверить есть ли ключ.
// console.log(map.size); // количество ключей.
// console.log("-----------------");
// console.log(map.delete("1"));
// console.log(map.delete(55));
// console.log(map);
// map.clear();
// console.log(map);

// let clients = new Map([
//     ["user1", 1994],
//     ["user2", 1996],
//     ["user3", 1984],
// ]);

// console.log(clients);

// for (let name of clients.keys()){
//     console.log(name);
// }


// for (let value of clients.values()){
//     console.log(value);
// }


// for (let client of clients){
//     console.log(client);
// }

// clients.forEach((value, key, map) => {  //менее читаемый метод
//     console.log(`${key} : ${value}`);
// });

// // Set // отсутствие ключей в коллекции
// let set = new Set();
// let user1 = {name: "Joe"};
// let user2 = {name: "Tu"};
// let user3 = {name: "Moe"};

// console.log(set.size);

// set.add(user1);
// set.add(user2);
// set.add(user3);
// set.add(user1);
// set.add(user3);

// console.log(set.size); // три элемента, вместо пяти. Не даёт добавлять дубли (дублирующие значения) в коллекцию.
// console.log(set);

// for (let user of set){
//     console.log(user.name);
// }



// let daysOfWeek = {
//     1: "понедельник",
//     2: "вторник",
//     3: "среда",
//     4: "четверг",
//     5: "пятница",
//     6: "суббота",
//     7: "воскресение",
// };

// console.log(daysOfWeek);
// console.log(daysOfWeek[1]);
// delete daysOfWeek[1];
// console.log(daysOfWeek);
let backticks = `шаблонные литералы`;


let userList = `Users online:
 * Ivan
 * Anna
 * John
 * Pupu
`;
console.log(userList);

console.log("\u{1F60D}");

let str = "Какая-то старнная строка";
console.log(`Какая-то старнная строка ${str.length}`); // lenght это свойство, а не функция.

let greeting = "Hello!";
console.log(greeting[0]);
console.log(greeting.charAt(1)); // charAt - это метод

// for of
for(let char of greeting)
{
    console.log(char);
}

// методы
// console.log(greeting.toUpperCase());
// console.log(greeting.toLowerCase());
// console.log(greeting[0].toUpperCase());

let darthVader = "Luke, I am your father";
// console.log(darthVader.indexOf("Luke"));
// console.log(darthVader.indexOf("mother"));
// console.log(darthVader.indexOf("a"));
// console.log(darthVader.indexOf("a", 9));

// console.log("Работает цикл: ");
// let pos = -1;
// while ((pos = darthVader.indexOf("a", pos + 1)) != -1)
// {
//     console.log(pos);
// }
// console.log(darthVader.lastIndexOf("Luke"));
// console.log(darthVader.lastIndexOf("u"));

//console.log(darthVader.includes("a"));

 



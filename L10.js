// let promise = new Promise(function(resolve, reject) {
//     // executor
// });


let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let mark = Math.floor(Math.random() * 4) + 2;
        if (mark > 3) {
            resolve(mark);
        }
        reject(mark); // reject(new Error("Whoops!"))
    }, 2000);
});



// обработка промисов

/*
promise.then (
result => console.log(`Получи приз за оценку ${result}`),
error => console.log(`О нет ты получил ${error}`)
)
*/

// второй вариант обработки

promise
.finally( () => console.log("Промис завершил работу"))
.then(result => console.log(`Получи приз за оценку ${result}`))
.catch(error => console.log(`О нет ты получил ${error}`));
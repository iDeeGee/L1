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
    }, 3000);
});
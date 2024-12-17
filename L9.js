function first() {
    setTimeout(function() {
    console.log("1. I am the first!");
    }, 3000)
}

function second() {
    console.log("2. I am the second!");
}


first();
second();
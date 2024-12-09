let a = 10;
let b = 200;

const timeout = setTimeout(() => {
    console.log("inside timeout");
}, 1000);

debugger
function sample() {
    let c = 30;
    console.log(a);
    console.log(b);
    console.log(a + b);
}

sample();

clearTimeout(timeout);
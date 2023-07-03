// console.log("Hello world");
// console.log("typescript file is running");
// console.log("another file from tyscript");
// console.log("Running TS");
function sum(n1: number, n2: number): number | string {
    console.log("i am inside a function");
    if(typeof n1 == "number"){
        return n1 + n2;
    }
    else{
        return 44;
    }
    

}

let score : number | string = 44;

let score2 : number | string = "44";

let total = sum(score,44);

console.log(total);
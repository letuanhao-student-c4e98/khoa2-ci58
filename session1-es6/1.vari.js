console.log("Hello, world");

const x=1;
// x=2;
// wrong

const arr =[];
arr.push(1);

console.log("y",y);
// hoisting (khai bao var se dc nhay len trc)
var y=1;

y=2;
let z=1;
console.log("z", z);
z=2;


// scope

let bar="bar";
if(bar=="bar"){
    var foo="foo";
}
console.log(foo);
// var khong bi gioi han o trong block, con let thi bi->nen dung let


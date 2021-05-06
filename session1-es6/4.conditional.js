const foo="hello"; 
if(foo){
    console.log ("the foo is true"); // neu truyen vao 1 gia tri thi no se mac dinh chuyen sang dang bolean

}else{
 console.log("false");
}

const bar="bar";
switch (bar) {
    case "bar":
    console.log("1st case")
         break;
         case "bar2":
    console.log("2st case")
         break;

    default:
        break;
}

let isEven="event";
const x=3;
// cach 1
if(x%2 ===0){
    isEven ="even"; 
}else{
    isEven="odd";
}
// cach 2
isEven = x%2 ===0 ? "even" : "odd";

console.log(isEven);
// const alice ={
//  name : "Alice",
//  age:25,
// };

// const bob ={
//     name : "bob",
//  age:28,
// }

class Person {
    name="Demo";
    age=10;
    address="Hanoi";

    constructor(name , age){
        this.name=name;
        this.age=age;
        this.address="Hanoi";
    }
    setName(name){
        this.name=name;
    }
  sayHello (){
      console.log("Hello, this is "+this.name);
  }
}

const alice=new Person("Alice",25);
const bob=new Person("bob",26);

console.log(alice,bob);

alice.sayHello();



class Student extends Person {
    className="";
    grade=0;

    constructor (name,age ,className,grade){
        super(name ,age );
        this.className=className;
        this.grade=grade;

    }
    display =()=>{
        console.log("this is display method");
    }
   sayHello(){
       super.sayHello();
       console.log("I'm a student");
   }
}

const nguyenVanA=new Student( "nguyenVanA",25,"CI_58",8);
const nguyenVanB=new Student( "nguyenVanB",26,"CI_58",7.5);

console.log(nguyenVanA,nguyenVanB);
nguyenVanA.sayHello();


const app=document.getElementById("app");
const btnAddForm=document.getElementById("btnAddForm");
btnAddForm.addEventListener("click",()=>{
 const myForm = new MyForm();
 myForm.render(app);
})

class MyForm{
    input=null;
    button=null;
    constructor(){
        this.input=document.createElement("input");
        this.button=document.createElement("button");
        this.button.innerHTML="getValue";
        this.button.addEventListener("click",()=>{
            console.log(this.input.value);
        })
    }
    render = (container) => {
        const div = document.createElement("div");
div.appendChild(this.input);
div.appendChild(this.button);
container.appendChild(div);
    }
}







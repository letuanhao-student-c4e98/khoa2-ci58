class employee{
    name;
    taskList;
    // quanLy;

    constructor(name,taskList){
        this.name =name;
    this.taskList =taskList;
    // this.quanLy =quanLy;

    }
    
    displayInfo(){
        console.log("name: "+this.name);
        console.log("task :" +this.taskList);

    }
}

class Manager {
    name;
     quanLy;
     addE;
    constructor(name , quanLy){
        this.name=name;
        this.quanLy=quanLy;
    }
    addEmployee (){
 this.addE = addE;
    }
}


const e1 =new employee ("hoa","Tester");
const e2 =new employee ("Ngoc","Developer");
const e3 =new employee ("Thu","Tester");
const e4 =new Manager ("Trung","Manager","Trung");
const e5 =new employee ("Nghia","Tester");



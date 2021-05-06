
function sum (a ,b){
    return a+b;
}
// let value=sum(1,2);
// console.log(value);


const sub=function(a,b){
    return a-b;
}
console.log(sub(15,2));

const multi = (a,b)=>{
    return a*b;
}
console.log(multi(2,2));

const divide=(a,b)=>a/b;
console.log(divide(10,2));


const myMath={};
myMath.sum=sum;
myMath.sub=function(){};
myMath.multi=()=>{};


// write a function solve quadratic equation : ax^2+bx+c=0;
// viet chuong trinh giai phuong trinh bac nhat
// viet chuong trinh tinh dien tich hinh tam giac

// const bacNhat=(a,b)=>{
//    if(a===0){
//        if (b===0){
//            return "phuong trinh vo so nghiem";
//        }else {
//            return "vo nghiem";
//        }
//    }else{
//        -b/a;
//    }
    
// }
// console.log(bacnhat(2,14));

// const bacHai=(a,b,c)=>{
// delta=b*b-4*a*c;
// if(delta>0){

// }else if (delta=0){ 
//  return -b/(2*a);
// }else return "Phuong trinh vo nghiem"

// }

const Stamgiac=()=> {
    return divide (multi(a,h),2);
}


const btnClickMe=document.getElementsByClassName("btnClickMe");
btnClickMe.addEventListener("click",function(){
    console.log(this);
})





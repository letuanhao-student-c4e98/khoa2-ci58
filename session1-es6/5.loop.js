const arr =[1,2,3];
const obj ={foo:"foo vl",bar:"bar vl"};
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

let i=0;
while(i<arr.length){
    console.log(arr[i]);
    i++;
}

for(let element of arr){ //viet ngan gon hon de goi cac phan tu cua arr nhung khong biet index
    console.log(element);
}

for (let key in obj){
    console.log(key);
}


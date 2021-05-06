
// setTimeout(()=>{
//     console.log("hello");
//     setTimeout(()=>{
//         console.log("world");
//         setTimeout(()=>{
//             console.log("this");
//             setTimeout(()=>{
//                 console.log("is");
//                 setTimeout(()=>{
//                     console.log("CI58");
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)

// setTimeout(()=>{
//     console.log("parallel");
// },1000)


// cach 2:promise
const delay1s = ()=>{ return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve();
    },1000)
})
}

delay1s(1000)
.then(() =>  console.log("hello"))
.then(()=>delay1s(1000))
.then(() => console.log("world"))
.then(()=>delay1s(1000))
.then(() => console.log("this"))
.then(()=> delay1s(1000))
.then(() => console.log("is"))
.then(()=> delay1s(1000))
.then(() => console.log("CI58"))
.then(()=>  delay1s(1000));






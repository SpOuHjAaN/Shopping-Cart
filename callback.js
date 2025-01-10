//async 

// console.log("udhuwidh");
// const hello = () => {
//     console.log("hello");
// }
// setTimeout(hello,2000);

//we can also write in this way

// setTimeout(()=>{
//     console.log("hello!");
// }, 4000);

// console.log("check");
// console.log("lets");

//callback

// function sum (a,b){
//     console.log(a+b);
// }

// function calculator (a,b,sumcallback) {
//     sumcallback(a,b);
// }
// calculator(1,2,sum);

//callback hell

// function data (dataId,nextdata) {
//     setTimeout (()=>{
//         console.log("data",dataId)
//         if(nextdata){
//             nextdata();
//         }
//     },2000);
// };

// data (1,()=>{
//     console.log("getting data 2 ......");
//     data(2 ,()=>{
//     console.log("getting data 3 ......");
//     data(3);
//     });
// });

//promises : 3 state- pending , resolved , reject

// let promise = new Promise((resolve, reject)=>{
//     console.log("i am promise");
//     resolve("success");
    // reject("some errors occurred");
// });

//for example

// function data (dataId,nextdata) {
//     return new Promise((resolve,reject)=>{
//         setTimeout (()=>{
            // console.log("data",dataId)
            // resolve("success");
//             reject("error");
//             if(nextdata){
//                 nextdata();
//             }
//         },5000);
//     });
// };


//then and catch functions

// const getPromise = () => {
//     return new Promise((resolve, reject)=>{
//             console.log("i am promise");
            // resolve("success");
//             reject("some errors occurred");
//         });
// };

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("success",res);
// });

// promise.catch((err)=>{
//     console.log("rejected",err);
// });

//promise chain

// function asyncFunc1 () {
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("love");
//             resolve("success");
//         },4000);
//     });
// };

// function asyncFunc2 () {
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("love1");
//             resolve("success");
//         },4000);
//     });
// };

// console.log("fetching data1......");
// let promise1 = asyncFunc1();
// promise1.then(()=>{
//     console.log("successfully fetched");
// console.log("fetching data2......");
// let promise2=asyncFunc2();
// promise2.then(()=>{
//     console.log("successfully fetched data 2");
// })

// })

//async-await

async function hello(){
    console.log("hello");
};
hello();

function some(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data");
        resolve("success");
        },2000);
    });
};

// async function getdata() {
//     await some(); //1st time
//     await some(); //2nd time
// }

// here we have to call the function but using iife then donot need to call the function it called automatically.
(async function getdata() {
    await some(); //1st time
    await some(); //2nd time
})();
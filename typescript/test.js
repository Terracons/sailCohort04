"use strict";
// // let ar1:string[]=["two", "five"]
// // console.log(ar1);
// // let ar2:string[]=["two", "five", 'seven']
// // console.log(ar2);
// // let ar3 = [1,2,3,4,5,6]
// // console.log();
// // let sum = 0;
// // for(let i=0; i< ar3.length; i++){
// //     sum+=ar3[i]
// // }
// // console.log(sum);
// interface person{
//     oruko:string,
//     age:number,
//     classes:string[],
//     id:boolean
// }
// interface stack{
//     course:string
//     human:person
// }
// let obj1:stack = {
//     course:"javascript" ,
//        human:{
//         oruko:"muiz",
//         age:45,
//         classes:["hh","th"],
//         id:false
//     }
// }
// console.log(obj1.human.age);
// let value2:(string|number|object)[]=[]
// value2.push('hELLO')
// function addition(a:number, b:number){
//     return a+b
// }
// addition(3,4)
const inputText = document.querySelector("#inputElement");
const inputText2 = document.querySelector("#inputElement2");
const formButton = document.querySelector("#submitButton");
const listContainer = document.querySelector("#todo-list");
formButton.addEventListener('click', () => {
    console.log(inputText.value, inputText2.value);
});

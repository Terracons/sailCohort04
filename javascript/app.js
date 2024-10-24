// let a = parseInt(window.prompt("Enter the value of A"))
// let b = parseInt(window.prompt("Enter the value of B"))
// let c = parseInt(window.prompt("Enter the value of c"))
// let d = parseInt(window.prompt("Enter the value of D"))
// // let average = (a+b+c+d)/4
// // console.log(`The average is ${average}`);

// let y = 5
// let z = `5`
// console.log(y+z);

// var a = 5
// console.log(++a);
// let number = parseInt(prompt("Enter the number: "))
// let checkNumber = number > 0 ? "Number is positive": "Number is Negetive"
// alert(checkNumber)

// let number2 = parseInt(prompt("Enter the number: "))
// let checkNumber2 = (number2 %2 == 0)? "Number is Even": "Number is odd"
// alert(checkNumber2)

// let participant = ["igbo", "ezinne", "amina", 3, 5]

// console.log(participant.slice(-2));

// let human ={
//     three:[1,"samuel", false]
// }

// console.log(human.three[1]);

// console.log(`3 + 2 + '7'`);
// console.log(2 + '2' - 1);
// let jumia = [
//     {name: "powerbank", itemprice:8000, category: "Gadget", quantity:1},
//     {name: "phone", itemprice:125000, category: "Gadget" , quantity:5},
//     {name: "nivea", itemprice:5000, category: "Skincare", quantity:1},
//     {name: "Pendrive", itemprice:3000, category: "Gadget", quantity:1},
//     {name: "Pendrive", itemprice:3000, category: "Gadget", quantity:1},
//     {name: "Pendrive", itemprice:3000, category: "Gadget", quantity:1}
// ]

// function getTotalPrice(item) {
//     return item.itemprice*item.quantity;
//   }

// let map_jumia = jumia.map(getTotalPrice)

// console.log(map_jumia);


// let a = jumia.filter((x)=>{
// return (x.category =="Gadget" && x.price  >7000)
// })

// console.log(a);



// let b = jumia.reduce((subtotal, itemprices)=>{
//     return subtotal+itemprices.price

// }, 0)
// let shippingFees =1500
// console.log(b+shippingFees);

// if (15<10) {
//     console.log("Greater");
    
// }
// else{
//     console.log("lesser");
    
// }


// let num1 = parseInt(prompt("Enter the fist number"))
// let num2 = parseInt(prompt("Enter the second number"))

// if (num1> num2) {
//     alert (`${num1}  is greater`);
    
    
// } else if (num2>num1){
//     alert (`${num2} is greater`);
// }

// else if (num1===num2){
//     alert (`The numbers are the same`);
// }
// else{
//     alert (`Invalid Value`);
// }


// let num1 = parseInt(prompt("Enter the fist number"))
// let num2 = parseInt(prompt("Enter the second number"))
// let num3 = parseInt(prompt("Enter the Third number"))
// let num4 = parseInt(prompt("Enter the Fourth number"))

// if (num1> num2 && num1> num3 && num1> num4) {
//     alert (`${num1}  is greater`);
    
    
// } else if (num2> num3 && num2> num4 && num2> num1){
//     alert (`${num2} is greater`);
// }
//  else if (num3> num1 && num3> num2 && num3> num4){
//     alert (`${num3} is greater`);
// }

// else{
//     alert (`${num4} is the greater`);
// }

// let age = parseInt(prompt("Enter the Age"))

// if (age <= 0) {
//     alert("You enter invalid Age")
    
// } 

// else if (age < 12) {
//     alert("You Ticket price is $5")

// }
// else if (age < 18) {
//     alert("You Ticket price is $10")

// }
// else if (age < 60) {
//     alert("You Ticket price is $20")
    
// }
// else if (age >=60) {
//     alert("You Ticket price is $15")

// }


// else{
//     alert('you enter invalid age')
// }
// // let score = parseInt(prompt("Enter your score"))

// // if (score>=75 && score <=100) {
// //     alert("Your Grade is A")
    
// // } else if (score>=74 && score <=100) {
// //     alert("Your Grade is   B")
// // }


// let i = 1
// while (i <=10 ){
//     console.log(`${i}`);
//     ++i
//     if (i == 10){
//         console.log(`${i} is the last number`);
//         break

//     }
    

// }  

// for (let i = 1; i<=20; i++){
//     if (i==15){
//         continue
//        }
//     console.log(i);

    

// }


// function division (num1, num2) {
//     total = num1/num2
//     return total
    
// }

// function multiplication (num1, num2, num3,num4) {
//     total = num1*num2*num3*num4
//     return total  
// }

// console.log(multiplication(1,2,3,4));


// function squareNum(list) {
//     result = list.map(x=>x*x)
// return result
    
// }

// console.log(squareNum([1,2,3,5]));


console.log(document.getElementById('h1').style.color="red");


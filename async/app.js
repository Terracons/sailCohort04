// // console.log("Hello");

// function attempt (val){
//     return new Promise((resolve, reject) => {
//         if (val ==="okay"){
//             resolve("okay oooo")
//         }
//         else{
//             reject("dey play")
//         }
        
//     })
// }

// attempt("dey ").then((data)=>{
//     console.log(data);
    
// })
// .catch((data)=>{
//     console.log(data);
// }

// )


// //  

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((muiz)=>muiz.json())
// .then(data=>console.log(data[0].name)
// ).catch((error)=>console.log(`An Error occured which is ${error}`)
// ) g
// class Rectangle {
//     constructor(width,height, area, perimeter) {
//         this.width= width
//         this.height = height
//         this.area = width*height
//         this.perimeter= width+height
        
//     }
//     talk(){
//         console.log(`The area is ${this.area} and the perimeter is ${this.perimeter}`);
        
//     }
// }

// const rectangle1 = new Rectangle(5, 10)
// console.log(rectangle1.area,rectangle1.perimeter);
// rectangle1.talk()


// const rectangle2 = new Rectangle(30, 8)
// console.log(rectangle2.area, rectangle2.perimeter);


// rectangle2.talk()
// const rectangle3 = new Rectangle(2, 0.5)
// console.log(rectangle3.area, rectangle3.perimeter);

// rectangle3.talk()



class parent {
    constructor(house, land, business) {
        this.house = house
        this.land= land
        this.business = business
        
    }
    talk(){
        console.log("say something");
        
    }
}

class child extends parent{
    constructor(house, land){
        super(house, land)
    }
}

let ezikiel = new child("terrace","lekki", "real estate")

console.log(ezikiel.house);
ezikiel.talk()

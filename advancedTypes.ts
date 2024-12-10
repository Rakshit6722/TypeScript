//union types
// let value: string | number = "Hello"
// value = 10
// console.log(value)

//Intersection types
// type Admin = {
//     role:string
// }
// type User = {
//     name:string
// }

// type AdminUser = Admin & User

// let user: AdminUser = {
//     name:"Rakshit",
//     role:"Admin",
// }

// console.log(user)

//Exercise->
//Create a type Shape with color property and a type Circle with radius property. 
//Combine them into a new type and create an object of that type.

type Shape = {
    color:string
}

type Circle = {
    radius:number
}

type ShapeCircle = Shape & Circle
const circle:ShapeCircle = {
    color:"red",
    radius:10,
}

console.log(circle)
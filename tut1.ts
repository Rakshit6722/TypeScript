//variables
// let age: number = 25
// let name1: string = "Rakshit"
// let isStudent: boolean = true

//functions
// function add(a:number, b:number):number{
//     return a+b
// }


//object using interface
// interface info{
//     address:string
// }

// interface User{
//     name:string,
//     age:number,
//     ingot:info,
// }

// let user = {
//     name: "Rakshit",
//     age: 25,
//     info:{
//         address: "Delhi"
//     }
// }

//object using types
// type User={
//     name:string,
//     age:number,
//     info:Additional
// }
// type Additional = {
//     address:string
// }

// let user:User = {
//     name:"Rakshit",
//     age:23,
//     info:{
//         address:"Delhi"
//     }

// }

//advanced types
// let id: number|string = 123
// console.log(id)

//optional properties
// interface Car{
//     brand:string,
//     model?:string,
// }

// let car:Car={
//     brand:"Toyota",
// }
// console.log(car)

//readonly properties
type Direction = "up" | "down"
let move:Direction = "up"
console.log(move)


//Interface
// interface User{
//     name1:string,
//     age:number,
//     additionalInfo?:Additional //optional
// }

// interface Additional{
//     address:string,
// }

// let user:User = {
//     name1:"Rakshit",
//     age:20,
//     additionalInfo:{
//         address:"Bangalore"
//     }
// }

// console.log(user)

//Type
type User = {
    name1:string,
    age:number,
    additionalInfo?:Additional //optional
}

type Additional = {
    address:string
}

let user:User={
    name1:"Rakshit",
    age:20,
    additionalInfo:{
        address:"Bangalore"
    }
}

console.log(user)

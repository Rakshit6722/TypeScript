//type assertion

let value: unknown = "Hello"
let strLen: number = (value as string).length
console.log(strLen)

let value2: unknown = 25.5
let num: number = Math.floor(value2 as number)
console.log(num)



//NOTE -> 
//differnce between any and unknown
//any -> can be assigned to any type without any errors or type safety checks
//unknown -> can be assigned to any type but with type safet checks
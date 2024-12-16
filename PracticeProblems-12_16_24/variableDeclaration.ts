function func(param: string|number):number {
    if(typeof param === "string"){
        return param.length
    }
    return param**2
}

console.log(func("Hello"))
console.log(func(10))
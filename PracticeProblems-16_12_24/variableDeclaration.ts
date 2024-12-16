function func(param: unknown):number {
    if(typeof param === "string"){
        return (param as string).length
    }else{
        return (param as number)**2
    }
    
}

console.log(func("Hello"))
console.log(func(10))
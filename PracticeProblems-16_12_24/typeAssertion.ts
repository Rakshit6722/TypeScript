function getLength(param: unknown): number{
    return (param as string).length
}

console.log(getLength("Hello"))
console.log(getLength(10))
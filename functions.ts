//simple function
function func1() {
    console.log('func1');
}
func1();

//function with parameter and its type
function func2(name:string){
    console.log('Hello '+name);
}
func2('Rakshit');

//function with parameter and return statement and its type
function func3(a:number,b:number):number{
    return a+b;
}
console.log(func3(10,20));

//default value
function func4(name:string,age:number=10){
    console.log(name,age);
}
func4('Rakshit',40);

//optional parameter
function func5(name:string,age?:number){//here age is optional parameter
    console.log(name,age?age:"");
}
func5('Rakshit');

//multiply two number and return the result, also add an optional parameter to multiply the result by a factor
function multiply(a:number,b:number,factor?:number):number{
    let result = a*b;
    return factor?result*factor:result;
}

console.log(multiply(10,20));

interface Person{
    name: string,
    age: number
}

function displayDetails(arr: unknown[]): void{
    arr.forEach(obj => {
        let person = obj as Person
        console.log(person.name)
        console.log(person.age)
    })
}

const data: unknown[] = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 40 },
  ];

displayDetails(data)
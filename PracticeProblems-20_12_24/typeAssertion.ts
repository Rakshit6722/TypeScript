interface Person1{
    name1: string,
    age2: number
}

function displayDetails(arr: unknown[]): void{
    arr.forEach(obj => {
        let person = obj as Person1
        console.log(person.name1)
        console.log(person.age2)
    })
}

const data: unknown[] = [
    { name1: "John", age2: 30 },
    { name1: "Alice", age2: 25 },
    { name1: "Bob", age2: 40 },
  ];

displayDetails(data)
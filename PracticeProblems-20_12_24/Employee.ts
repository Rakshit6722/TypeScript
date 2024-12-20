class Employee{
    public name: string;
    public position: string;
    public salary: number;

    constructor(name: string, position: string, salary: number){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    increaseSalary(amount: number): void{
        this.salary += amount;
    }

    decreasingSalary(amount: number): void{
        this.salary -= amount;
    }

    static calculateTotalSalary(employee: Employee[]): number{
        let totalSalary: number = 0;
        employee.forEach(emp => {
            totalSalary += emp.salary;
        })
        return totalSalary;
    }
}

let emp1 = new Employee("John", "Developer", 50000);
let emp2 = new Employee("Alice", "Manager", 80000);
let emp3 = new Employee("Bob", "Tester", 40000);

emp1.increaseSalary(5000);
emp2.decreasingSalary(10000);

console.log(Employee.calculateTotalSalary([emp1, emp2, emp3]))
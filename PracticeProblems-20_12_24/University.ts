class Person1{
    constructor(public name: string, public age: number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person1{
    constructor(name: string, age: number, public rollNumber: number, public standard: number){
        super(name, age);
        this.rollNumber = rollNumber;
        this.standard = standard;
    }
}

class Course{
    students: Student[];
    constructor(public courseName: string, public duration: number){
        this.courseName = courseName;
        this.duration = duration;
        this.students = [];
    }

    addStudent(student: Student): void{
        this.students.push(student);
    }

    removeStudent(student: Student): void{
        this.students = this.students.filter(s => s.rollNumber !== student.rollNumber);
    }

    getStudents(): Student[]{
        return this.students;
    }
}

let student1 = new Student("John", 23, 1, 12);
let student2 = new Student("Alice", 22, 2, 12);
let student3 = new Student("Bob", 24, 3, 12);
let student4 = new Student("Charlie", 21, 4, 12);
let student5 = new Student("David", 23, 5, 12);

let course = new Course("Computer Science", 4);
course.addStudent(student1);
course.addStudent(student2);
course.addStudent(student3);
course.addStudent(student4);
course.addStudent(student5);

console.log(course.getStudents())

course.removeStudent(student3);
course.removeStudent(student4);

console.log(course.getStudents())

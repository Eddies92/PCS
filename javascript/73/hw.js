(function () {
    'use strict';

    class Student {
        constructor(firstName, lastName, age, grade) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.grade = grade;
        }
    }

    const aClass = [new Student('John', 'Smith', 23, 87), new Student('Jim', 'Doe', 25, 91), new Student('Sam', 'Turner', 27, 89), new Student('Tyler', 'Sinclair', 24, 90), new Student('Trey', 'Grey', 25, 98)];

    function printStudents(...students) {
        for (let student of students) {
            console.log(student.firstName, student.lastName, student.age, student.grade);
        }

    }

    function switchNames(...students) {

        for (let student of students) {
            let { firstName: last, lastName: first, ...rest } = student;
            console.log(first, last, rest.age, rest.grade);
        }
    }

    printStudents(...aClass);
    switchNames(...aClass);
    //printStudents(...switchNames(...aClass));

}());
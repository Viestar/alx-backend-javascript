// 1. Let's build a Teacher interface
interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [anyKey: string]: any
}


// 2. Extending the Teacher class
// Extending Directors from Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}


// 3. Printing teachers
// Interface for the printTeacher function
interface PrintTeacherFunction {
    (firsName: string, lastName: string): string;
}

// Function printTeacher that formats a name else.g ("John", "Doe") -> J.Doe
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`
}



// 4. Writing a class
interface StudentInterface {
    workOnHomework(): string,
    displayName(): string
}

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClass;
}

class StudentClass implements StudentInterface {
    constructor(public firstName: string, public lastName: string) {
    }
    workOnHomework() {
        return 'Working from home';
    }
    displayName() {
        return `${this.firstName}`
    }
}

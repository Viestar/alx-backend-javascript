// 5. AMBIENT NAMESPACES
// A DirectorInterface interface with the 3 expected methods
interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string

}
// A TeacherInterface interface with the 3 expected methods:
interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string
}

// A class Director that will implements DirectorInterface
class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

// A class Teacher that will implement TeacherInterface
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

// A function createEmployee with the following requirements:
function createEmployee(salary: string | number): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher;
    }
    return new Director;
}

// TEsting expected results
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));




// 6. CREATING FUNCTIONS SPECIFIC TO EMPLOYEES
// Define Employee interface
interface Employee {
    employeeId: number;
    role: 'Director' | 'Teacher';
}
// Define workDirectorTasks function
function workDirectorTasks() {
    console.log('Getting to director tasks');
}

// Define workTeacherTasks function
function workTeacherTasks() {
    console.log('Getting to teacher tasks');
}

function isDirector(employee: Employee): employee is Employee & { role: 'Director' } {
    return employee.role === 'Director';
}

function executeWork(employee: Employee) {
    if (isDirector(employee)) {
        workDirectorTasks();
    }
    workTeacherTasks();
}


// 7. STRING LITERAL TYPES
type Subjects = "Math" | "History";

function teachclass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    else if (todayClass === "History") {
        return "Teaching History";
    }
    return '';
}
// 5. Advanced types Part 1
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

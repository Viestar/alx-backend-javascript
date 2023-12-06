interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [anyKey: string]: any
}

interface Directors extends Teacher {
    numberOfReports: number;
}

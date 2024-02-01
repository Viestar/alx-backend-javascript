const readDatabase = require('../utils');

class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const students = await readDatabase('./database.csv');
            res.status(200).send(`This is the list of our students\n${formatStudents(students)}`);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const { major } = req.params;

        if (major !== 'CS' && major !== 'SWE') {
            return res.status(500).send('Major parameter must be CS or SWE');
        }

        try {
            const students = await readDatabase('./database.csv');
            const majorStudents = students[major] || [];
            res.status(200).send(`List: ${majorStudents.join(', ')}`);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

const formatStudents = (students) => {
    return Object.keys(students)
        .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
        .map((field) => {
            const studentList = students[field].join(', ');
            return `Number of students in ${field}: ${students[field].length}. List: ${studentList}`;
        })
        .join('\n');
};

export default StudentsController;

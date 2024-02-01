const fs = require('fs');

const readDatabase = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
            } else {
                const students = {};
                const lines = data.trim().split('\n');

                for (const line of lines) {
                    const [name, , , field] = line.split(',');
                    if (!students[field]) {
                        students[field] = [];
                    }
                    students[field].push(name);
                }

                resolve(students);
            }
        });
    });
};

export default readDatabase;
const fs = require('fs');

const countStudents = (path) => {
  const promise = (res, rej) => {
    fs.readFile(path, 'utf8', (err, resData) => {
      if (!err) {
        const printOut = [];
        let itemToPrint;
        const data = resData.toString().split('\n');
        let students = data.filter((item) => item);
        students = students.map((item) => item.split(','));
        itemToPrint = `Number of students: ${students.length - 1}`;
        console.log(itemToPrint);
        printOut.push(itemToPrint);

        const fields = {};
        for (const student in students) {
          if (student !== 0) {
            if (!fields[students[student][3]]) {
              fields[students[student][3]] = [];
            }
            fields[students[student][3]].push(students[student][0]);
          }
        }
        delete fields.field;
        for (const key of Object.keys(fields)) {
          itemToPrint = `Number of students in ${key}: ${
            fields[key].length}. List: ${fields[key].join(', ')}`;
          console.log(itemToPrint);
          printOut.push(itemToPrint);
        }
        res(printOut);
      } else {
        rej(new Error('Cannot load the database'));
      }
    });
  };

  return new Promise(promise);
};

module.exports = countStudents;

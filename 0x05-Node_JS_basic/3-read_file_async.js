const fs = require('fs');

function countStudents (path) {
  const promise = (res, rej) => {
    fs.readFile(path, (err, data) => {
      if (err) rej(Error('Cannot load the database'));
      if (data) {
        let myData = data.toString().split('\n');
        myData = myData.slice(1, myData.length - 1);
        console.log(`Number of students: ${myData.length}`);
        const obj = {};
        myData.forEach((el) => {
          const student = el.split(',');
          if (!obj[student[3]]) obj[student[3]] = [];
          obj[student[3]].push(student[0]);
        });
        for (const cls in obj) {
          if (cls) console.log(`Number of students in ${cls}: ${obj[cls].length}. List: ${obj[cls].join(', ')}`);
        }
      }
      res();
    });
  };
  return new Promise(promise);
}

module.exports = countStudents;

const fs = require('fs');
const csv = require('csv-parser');

const students = [];
const cs = [];
const swe = [];

const countStudents = (file) => {
  if (!fs.existsSync(file)) {
    throw new Error('Cannot load the database');
  }
  fs.createReadStream(file)
    .pipe(csv())
    .on('data', (row) => {
      students.push(row);
      if (row.field === 'CS') {
        cs.push(row.firstname);
      } else {
        swe.push(row.firstname);
      }
    })
    .on('end', () => {
      console.log(`Number of students: ${students.length}`);
      console.log(`Number of students in CS: ${cs.length}. List: ${cs}`);
      console.log(`Number of students in SWE: ${swe.length}. List: ${swe}`);
    });
};

module.exports = countStudents;

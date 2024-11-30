const fs = require('fs');

const students = [];
const cs = [];
const swe = [];

const countStudents = (file) => {
  if (!fs.existsSync(file)) {
    throw new Error('Cannot load the database');
  }

  const data = fs.readFileSync(file, 'utf8');

  const rows = data.split('\n');

  rows.forEach((row) => {
    const fields = row.split(',');
    const student = { firstname: fields[0], lastname: fields[1], field: fields[3] };
    students.push(student);
    if (student.field === 'CS') {
      cs.push(student.firstname);
    } else if (student.field === 'SWE') {
      swe.push(student.firstname);
    }
  });
  console.log(`Number of students: ${students.length - 1}`);
  console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
  console.log(`Number of students in swe: ${swe.length}. List: ${swe.join(', ')}`);
};

module.exports = countStudents;

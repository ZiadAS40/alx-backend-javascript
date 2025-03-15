const fs = require('fs');

module.exports = function countStudents(path) {
  const fileContent = fs.readFileSync(path, 'utf-8');

  if (!fileContent) {
    throw new Error('Cannot load the database');
  }

  const lines = fileContent.split('\n');
  lines.shift();
  const fields = {};

  for (const line of lines) {
    const parsedLine = line.split(',');
    const lineField = parsedLine[parsedLine.length - 1];
    const firstName = parsedLine[0];

    if (!(Array.isArray(fields[lineField]))) fields[lineField] = [];

    fields[lineField].push(firstName);
  }

  console.log(`Number of students: ${lines.length}`);

  for (const [key, value] of Object.entries(fields)) {
    console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
  }
};

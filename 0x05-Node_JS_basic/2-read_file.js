const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const fileContent = fs.readFileSync(path, 'utf-8');
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

    process.stdout.write(`Number of students: ${lines.length}\n`);

    for (const [key, value] of Object.entries(fields)) {
      process.stdout.write(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`);
    }
  } catch (e) {
    throw new Error('Cannot load the database');
  }
};

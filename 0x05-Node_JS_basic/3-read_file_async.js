const fs = require('fs');

module.exports = function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, fileContent) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }

      if (fileContent) {
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
        resolve({});
      }
    });
  });
};

process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});

console.log('Welcome to ALX, what is your name?');

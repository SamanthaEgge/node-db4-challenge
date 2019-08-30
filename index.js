const server = require('./server.js');

const PORT = process.env.PORT || 5000;

const name = 'Samantha'
server.listen(PORT, () => {
  console.log(`Hello, ${name}. Listening on port ${PORT}...`);
});
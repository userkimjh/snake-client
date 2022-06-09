// setup interface to handle user input from stdin
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = (input) => {
  if(input === '\u0003') {
    console.log('exited');
    process.exit();
  }

  if(input === 'w') {
    connection.write("Move: up" )
  }
  if(input === 'a') {
    connection.write("Move: left" )
  }
  if(input === 's') {
    connection.write('Move: down')
  }
  if(input === 'd') {
    connection.write('Move: right')
  }
};

module.exports = {setupInput};
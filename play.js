const net = require("net");

//establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.1.33',
    port: '50541'
  })

  conn.on('data', (data) => {
    console.log(data);
  })

  conn.setEncoding("utf8");
  return conn;
}


console.log("Connecting ...");
connect();
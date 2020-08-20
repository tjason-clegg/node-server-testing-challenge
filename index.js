const server = require("./api/server");
const Port = process.env.PORT || 4000;

server.listen(Port, () => {
  console.log(`\n Listening on port ${Port} \n`);
});

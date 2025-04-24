const fs = require("fs");

//this is callback example
//in this the other function is pass as argument which execute after the completion of first function

function person(name, address) {
  console.log(`my name is ${name}`);
  address();
}

function address() {
  console.log("sargodha");
}

person("asjad", address);

//callback example using nodejs

fs.readFile("world.txt", "utf8", (err, data) => {
  if (err) {
    console.log("error Mesage", err);
  } else {
    console.log(data);
  }
});

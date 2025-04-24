const fs = require("fs");

//this is calllback-hell example using node
//important we use promises and async await instead of callback hell

fs.readFile("world.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("data which is default written", data);

  const updatedData = data.toUpperCase();

  fs.appendFile("world.txt", updatedData, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("data which is updated successfully");

    fs.readFile("world.txt", "utf8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("data which is updated successfully", data);
    });
  });
});

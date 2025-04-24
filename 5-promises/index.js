const fs = require("fs").promises;

fs.readFile("world.txt", "utf8")
  .then((data) => {
    console.log("Original content:", data);

    const lowerCaseData = data.toLowerCase();
    return fs.writeFile("newWorld.txt", lowerCaseData);
  })
  .then(() => {
    console.log("Data written to newWorld.txt");

    return fs.readFile("newWorld.txt", "utf8");
  })
  .then((newData) => {
    console.log("Content of new file:", newData);

    return fs.unlink("newWorld.txt");
  })
  .then(() => {
    console.log("newWorld.txt deleted ✅");
  })
  .catch((err) => {
    console.log("Something went wrong 😢", err);
  });

const path = require("path");
const fs = require("fs");

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("Data Folder Created", dataFolder);
} else {
  console.log("Data Folder Already Exists", dataFolder);
}

const filepath = path.join(dataFolder, "data.txt");

//Creates or overwrites a file with the given data
fs.writeFileSync(filepath, "Hello from asjad adding data in file using code");

//read data in file utf-8 mean in string format
console.log("read content from file", fs.readFileSync(filepath, "utf-8"));

//add more data in file
fs.appendFileSync(
  filepath,
  "\nhallo this is second line in this specific file"
);

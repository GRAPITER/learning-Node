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

fs.writeFileSync(filepath, "Hello from asjad adding data in file using code");

console.log("read content from file", fs.readFileSync(filepath, "utf-8"));

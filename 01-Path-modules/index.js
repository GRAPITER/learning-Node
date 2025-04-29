const path = require("path");

console.log("dirName:", path.dirname(__filename));

console.log("fileName:", path.basename(__filename));

console.log("join Path:", path.join("/asjad", "ali", "qazi"));

console.log("normalizedPath:", path.normalize("/asjad/ali/...ali/..qazi"));

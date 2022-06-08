import fs from "fs";
import path from "path";

fs.appendFile( "./app-4/text.txt", "Hello World", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Success!");
  }
});

fs.readFile("./app-4/text.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

fs.writeFile("./app-4/text.txt", "Hello World!!!", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Success");
  }
});

fs.rename("./app-4/text.txt", "./web-node-drills-1/app-4/somethingElse.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Success");
  }
});

fs.unlink(path.join(".", "app-4", "text.txt"), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Success");
  }
});

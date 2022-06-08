const fs = require("fs");
const path = require("path");

fs.appendFile(path.join(__dirname, "/text.txt"), "Hallo world", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successful appendage!");
    }
  });

// fs.readFile(__dirname + "/text.txt", "utf8", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data, "Successfully read!");
//     }
//   });

//   fs.writeFile(__dirname + "/text.txt", "Hellooooo World", (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successful rewritten!");
//     }
//   });

//   fs.rename(__dirname + "/text.txt", __dirname + "/newName.txt", (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successful renamed!");
//     }
//   });

//   fs.unlink(__dirname + "/text.txt", (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successful unlinked!");
//     }
//   });

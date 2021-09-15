const fs = require("fs");

//read file
// fs.readFile("doc/docs.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });

//writing file
// fs.writeFile("doc/docs.txt", "Hello world", () => {
//   console.log("file was written");
// });

//directories
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     return err ? console.log(err) : console.log("Folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     return err ? console.log(err) : console.log("Folder deleted");
//   });
// }

//delete file
// if (fs.existsSync("doc/delete.txt")) {
//   fs.unlink("doc/delete.txt", (err) => {
//     console.log(err);
//   });
//   console.log("File deleted");
// } else {
//   console.log("File not found");
// }

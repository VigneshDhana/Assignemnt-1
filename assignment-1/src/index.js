const fs = require("fs");

const myFileWriter = async (fileName, fileContent) => {
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

const myFileReader = async (fileName) => {
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};

const myFileUpdater = async (fileName, fileContent) => {
  fs.appendFile(fileName, fileContent, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

const myFileDeleter = async (fileName) => {
  fs.unlink(fileName, (err) => {
    if (err) {
      console.log(err);
    }
  });
};
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };

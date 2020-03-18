const fs = require('fs');

module.exports = (path, message) => {
  fs.exists(path, (exists) => {
    if (exists) {
        fs.readFile(path, (e, data) => {
            if (e) return e;
            fs.writeFile(path, `${data.toString()}\n\n${message}`, (err) => {
              if (err) return err;
              return message;
            });
        });
    } else {
      fs.writeFile(path, message, (e) => {
        return e || message;
      });
    }
  });
};

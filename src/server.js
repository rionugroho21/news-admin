const path = require('path');
const fs = require('fs');
const express = require('express');

const BUILD_DIR = path.resolve(__dirname, '../public');

const app = express();
const port = 8181;

app.use(express.static(BUILD_DIR));

app.get('/', (req, res) => {
  fs.readFile(`${BUILD_DIR}/index.html`, (error, data) => {
    if (error) {
      throw error;
    }

    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

// const express = require('express');
// let app = express()

// app.get('/', (req, res) => res.send('HELLO FROM EXPRESS'));
// app.use(express.static('public'))
// app.listen(3000, () => console.log('Example app listening on port 3000!'));

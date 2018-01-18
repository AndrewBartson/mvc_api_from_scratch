let express = require('express');
let app = express();
const PORT = process.env.PORT || 3001;
let morgan = require('morgan');
let uuid = require('uuid/v4')
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.disable('x-powered-by');

app.use(require('./routes/getAllTrees'))
app.use(require('./routes/getTreeById'))
app.use(require('./routes/createTree'))
app.use(require('./routes/updateTree'))
app.use(require('./routes/deleteTree'))

app.use((err, req, res, next) => {
  let status = err.status || 500;
  res.status(status).json({error: err});
});

app.use((req, res, next) => {
  res.status(404).json({error: {message: "Not found"}});
});

let listener = () => console.log(`Listening on port ${PORT}`);
app.listen(PORT, listener);

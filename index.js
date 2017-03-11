let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');

let db = require('./database');
let app = express();
// logging middleware
app.use(morgan('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

let routes = require('./routes');
app.use('/bank', routes);
// Start Server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
  db.sync()
  .then(() => {
    console.log('database connection confirmed')
  })
  .catch(err => {
    console.error(err);
  })
})


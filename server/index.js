const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());


const db = require('./models');
const hotsiteRoute = require('./routes/Hotsite');


db.sequelize.sync().then((req)=> {
    app.listen(3001, ()=>{
        console.log("Server running");
    })
})

app.use('/hotsite', hotsiteRoute);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

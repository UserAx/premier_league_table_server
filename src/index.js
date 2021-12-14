// require('dotenv').config({path: './../config/dev.env'});
const express = require('express');
const app = express();
const cors = require('cors');
const LeagueRouter = require('./routes/LeagueRoute'); 

const whiteList = [process.env.FRONTEND_URL];

const corsOption = {
    origin: (origin, callback) => {
        console.log("Origin from", origin);
        if(whiteList.indexOf(origin) !== -1){
            return callback(null, true);
        }
        callback(new Error("Cors not allowed"));
    },
    optionsSuccessStatus: 200
}

app.use(function (req, res, next) {
    console.log(req.headers.origin, req.headers.host);
    req.headers.origin = req.headers.origin || req.headers.host;
    next();
  });

app.use(cors(corsOption));

// app.use(cors());
app.use(express.json());
app.use(LeagueRouter);

app.get('/', (req, res) => {
    res.send({Message: "Application is working correctly"});
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is up.');
});
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const api = require('./api');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_CONNECTION_STRING = "mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true";

mongoose.connect(DB_CONNECTION_STRING, { useNewUrlParser: true,useUnifiedTopology: true });
const database = mongoose.connection;
database.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(api);

app.listen(PORT, () => {
    console.log(`Connected to ${PORT} port.`);
});
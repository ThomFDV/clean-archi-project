import express from 'express';
import json from "body-parser";
import mongoose from 'mongoose';

const app = express();

app.use(json);

mongoose.connect("mongo://localhost:27017/project", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("connected to database");
});

app.get('/', async (req, res) => {
    res.send("yo!");
});

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
});

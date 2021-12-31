import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import hostelApplications from './routes/hostelApplication.js';

const app = express();

const url =
  "mongodb+srv://MUsama:78692110@cluster0.c6ptp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true} )
.then(() => console.log("Connected to the database."));

app.listen(5000);

app.use(cors());
app.use(bodyParser.json( { extended: true } ));
app.use(bodyParser.urlencoded( { extended: true } ));
app.use("/hostelApplicants", hostelApplications);
app.use("/viewApplicants", hostelApplications);
// app.use("/deleteApplicants", hostelApplications);
// app.use("/putApplicants", hostelApplications);



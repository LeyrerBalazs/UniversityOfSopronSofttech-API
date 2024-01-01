console.log('Initial the server');
const express = require('express');
console.log('The express module loadaed.');
const mongoose = require('mongoose');
console.log('The mongosse module loadaed.');
const cors = require('cors');
console.log('The cors module loaded.');
const app = express();
console.log('Server is created.');
app.use(cors());
console.log('Cors modul used.');
const connectMongoose = async () => {
    const mongoDB = "mongodb+srv://softtech-api-admin:ctzroP0PLbRIu9Q4@softtech-api.8iucbhh.mongodb.net/entertainments";
    try {
        await mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Mongoose db is connected');
    }
    catch {
        console.log('Something is wrong in connectMongoose function');
    }
};
connectMongoose()
.catch((error) => {
    console.log(error);
});
const cinemaSchema = new mongoose.Schema({
    id: String,
    longitude: String,
    latitude: String,
});
const Cinema = mongoose.model('cinemas', cinemaSchema);
console.log('Schema is defined.');
const getDatas = async () => {
    try {
        let data = []
        await Cinema.find({})
        .then((responseData) => {
            for (let i = 0; i < responseData.length; i++) {
                data.push({
                    id: responseData[i].id,
                    longitude: responseData[i].longitude,
                    latitude: responseData[i].latitude,
                });
            }
        })
        .catch((error) => {
            console.log(error);
        })
        return data;
    }
    catch {
        console.log("Something is wrong in getUserDataFromMongoose function");
    }
};
app.get("/api/longitude_and_latitude", async (request, response) => {
    console.log('Request arrived.')
    try {
        response.send(await getDatas());
    }
    catch {
        console.log('Something is wrong with the get');
    }
});
app.listen(3002, () => {
    console.log('Server is started.');
    console.log('Listening on the http://localhost:3002');
});
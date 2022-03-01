const express = require("express");
const mongoose = require("mongoose");
const port = 5000;
const app = express();

mongoose.connect("mongodb://localhost/movieWeb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("connected to db")).catch(err => console.log(err));

const msgSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});
const msg = mongoose.model("msg", msgSchema);

const rateSchema = new mongoose.Schema({
    name: String,
    rate: Number
});
const rating = mongoose.model("rating", rateSchema);

app.use(express.json());

app.post("/contact", (req, res) => {
    const {name, email, message} = req.body;
    const msgData = new msg({name, email, message});

    msgData.save().then(() => {
        res.status(200).json({message: "save successfully..."})
    }).catch((error) => {
        res.status(404).json({error})
    });
});

app.post("/rate", (req, res) => {
    const {name, rate, id} = req.body;
    const rateData = new rating({ name, rate, id });

    if(!name || !rate){
        return res.status(400).json({error: "all field are required!"})
    }

    rateData.save().then(() => {
        res.status(200).json({message: "rate successfully.."});
    }).catch(error => {
        res.status(404).json({error})
    });
})

app.listen(port, () => {
    console.log(`app is running on port number ${port}`);
});
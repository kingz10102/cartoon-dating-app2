import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";


// Application Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url='mongodb+srv://admin:raven10102@cluster0.r87je.mongodb.net/datedb?retryWrites=true&w=majority'

// MiddleWares
app.use(express.json());
app.use(Cors());

// Database Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true, 
    useUnifiedTopology: true,
});



// API EndPoints 
app.get("/", (req, res) => res.status(200).send("whatgood good people"));

app.post('/cartoondating/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if(err) { 
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    });
});
 
app.get('/cartoondating/cards', (req, res) => {
    Cards.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    });
});

// Listeners
app.listen(port, () => console.log(`listening to localhost:${port}`));
const { subscribe } = require("diagnostics_channel");
const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors({
    origin: "http://127.0.0.1:3000"
}));


app.get("/", (req, res) =>{
    res.json({ name: "Code Bless You", subscribe: true});

});

app.listen(5000, () => console.log("server is listening on 5000"));

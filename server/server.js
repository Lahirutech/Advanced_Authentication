const express = require("express");
const app = express();
const cors = require("cors");

const profileRoutes = require('./routes/profile')
const userRoutes=require('./routes/user-routes')
const mongoose = require("mongoose")

app.use(cors());
app.use(express.json());

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5001;

//app.get('/ping', (req, res) => res.send('pong'))
app.use('/',profileRoutes)
app.use('/user',userRoutes)

mongoose
    .connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("db Connected"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

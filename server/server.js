const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

const profileRoutes = require('./routes/profile')
const userRoutes=require('./routes/user-routes')
const mongoose = require("mongoose")

require("dotenv").config({ path: "./config.env" });

app.use(cors());
app.use(cookieParser());
app.use(express.json());

const port = process.env.PORT || 5000;

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

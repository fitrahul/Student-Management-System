const express = require('express');
const connect = require ("./configs/db");
const cors = require('cors');

const studentController = require("./controllers/student.controller");
const contestController = require("./controllers/contest.controller");
const adminController = require("./controllers/admin.controller");
const homeController = require("./controllers/home.controller");
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cors({origin: PORT, credentials: true}));
app.use("/",homeController);
app.use("/students", studentController);
app.use("/contest",contestController);
app.use("/admins",adminController);


app.listen(PORT, async () => {
    await connect();
    console.log("Listening on port 8000");
})

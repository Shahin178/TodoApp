const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
require("./db");
app.use(cors());
const PORT = 8000;
const host = "localhost";
const userRoute = require("./routes/routes");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", userRoute);

app.listen(PORT, () => console.log(`Listening at http://${host}:${PORT}`));

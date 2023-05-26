const express = require("express");
const cors = require("cors");

const DBconnect = require("./config/mongodb");

const PORT = 8000;

const app = express();

// connections
DBconnect().then(() => console.log(`Database Connected`));

// middlewares
app.use(cors());

// routes

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

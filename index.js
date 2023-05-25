const express = require("express");
const cors = require("cors");

const PORT = 8000;

const app = express();

// connections


// middlewares
app.use(cors());


// routes

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

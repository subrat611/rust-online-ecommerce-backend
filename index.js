const express = require("express");
const cors = require("cors");

const PORT = 8000;

const app = express();

// Middlewares
app.use(cors());

app.listen(PORT, () => console.log(`Server Running On Port ${PORT}`));

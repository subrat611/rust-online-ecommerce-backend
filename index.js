const express = require("express");
const cors = require("cors");

const DBconnect = require("./config/mongodb");

const productRouter = require("./routes/product.route");

const PORT = 8000;

const app = express();

// connections
DBconnect().then(() => console.log(`Database Connected`));

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/product", productRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

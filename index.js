const express = require("express");
const cors = require("cors");

const DBconnect = require("./config/mongodb");

const productRouter = require("./routes/product.route");

const PORT = 8000;

const app = express();

// connections
DBconnect()
  .then(() => console.log(`Database Connected`))
  .catch((err) => console.log(err));

// middlewares
app.use(express.json({ limit: "50mb" }));
app.use(cors());

// routes
app.use("/api/products", productRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

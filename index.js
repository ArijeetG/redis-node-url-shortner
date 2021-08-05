const express = require("express");
const urlShortnerRoutes = require("./routes/urlShortnerRoutes");

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use("/api/v1/url", urlShortnerRoutes);

app.listen(PORT, () => console.log("Listening"));

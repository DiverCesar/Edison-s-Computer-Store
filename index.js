const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Cadena de conexión directa a su base de datos
const MONGODB_URI = "mongodb+srv://oop:oop@cluster0.9knxc.mongodb.net/oop?appName=Cluster0";

mongoose.connect(MONGODB_URI);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Galarza system connected to MongoDB Database"));

app.use(express.json());

// Se asume que usted tiene la carpeta "routes" con el archivo "customerRoutes.js"
const customerRouter = require("./routes/customerRoutes");
app.use("/computerstore", customerRouter);

// Crucial: Vercel necesita que exportemos la app, no que escuchemos un puerto local
module.exports = app;

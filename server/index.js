const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const photosRoutes = require("./photos.routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./archivos/",
  })
);
app.use(photosRoutes);
app.listen(3000);
console.log(`Server on port ${3000}`);

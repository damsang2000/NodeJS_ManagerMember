import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import path from 'path'
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

//use morgan
// app.use(morgan('combined'))
const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
app.use(express.static(path.join(__dirname,'public')))

// Template Engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "./src/resources/views");
//route
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/new", (req, res) => {
  res.render("news");
});
//127.0.0.1 -
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

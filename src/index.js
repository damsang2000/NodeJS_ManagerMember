import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";
import Connect from "./config/db/index.js";
import route from "./routes/index.js";
import methodOverride from "method-override";
const app = express();
const port = 3000;

//Connect db
Connect();
//use morgan
// app.use(morgan('combined'))
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

//middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());


app.use(methodOverride('_method'))
// Template Engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", "./src/resources/views");
//route init
route(app);

//127.0.0.1 -
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

const express = require("express");
var morgan = require("morgan");
const path = require("path");
const { engine } = require("express-handlebars");
const app = express();
const methodOverride = require('method-override');
const port = 3001;
const db = require("./config/db/index");
const routes = require('./routes');

//connect to database
db.connect();

//set post request
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//static file
app.use(express.static(path.join(__dirname, "public")));

//http logger
app.use(morgan("combined"));

//template engine handlebars
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));


app.get("/", (req, res) => {
  res.render("home");
});

app.use(methodOverride('_method'));

routes(app);

app.listen(port, () => {
  console.log(`Student management app listening on port ${port}`);
});

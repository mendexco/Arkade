process.env.PROCCESS_AMBIENT = "development";
// process.env.PROCCESS_AMBIENT = "production";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORT = 3333;

var app = express();

var indexRouter = require("./src/routes/index");
var usersRouter = require("./src/routes/users");
var charsRouter = require("./src/routes/chars");
var statsRouter = require("./src/routes/stats");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/chars", charsRouter);
app.use("/stats", statsRouter)

app.listen(PORT, function () {
    console.log(`Site server is running in: http://localhost:${PORT} \n
    You are running your application in ${process.env.PROCCESS_AMBIENT} \n
    \t\tIf "development", local database (MySQL Workbench). \n
    \t\tIf "production", remote database (SQL Server in Azure cloud)`);
});
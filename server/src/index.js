const express = require("express");
const cors = require("cors");
const app = express();

// const um = require("./exemplo1");
// const dois = require("./exemplo2");

require("dotenv").config();

app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route

const db = require("./models");

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./routes/user.routes")(app);

const PORT = process.env.PORT;

// app.use("/um", um);
// app.use("/dois", dois);

app.listen(PORT, console.log(`Server is running on port ${PORT}`));

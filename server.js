const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use("/login", (req, res) => {
  res.send({
    token: "login-user",
  });
});

app.listen(8070, () =>
  console.log("API is running on http://localhost:8070/login")
);

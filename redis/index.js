const express = require("express");
const app = express();
const { getUser, doHeavy_compute } = require("./service");

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("<h1>Redis demo</h1>");
});

app.get("/user/:uid", async (req, res) => {
  try {
    const user = await getUser(req.params.uid);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

// this function does calculation till specified milliseconds(ms)
app.get("/heavy_compute/:ms", async(req, res) => {
  try {
    const result = await doHeavy_compute(Number(req.params.ms));
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

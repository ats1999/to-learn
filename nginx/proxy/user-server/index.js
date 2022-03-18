const express = require("express");
const app = express();
const PORT = 4001;

app.use((req, res) => {
  res.send("From users server - " + req.path);
});

app.listen(PORT, () => console.log(`Product server is running on ${PORT}`));

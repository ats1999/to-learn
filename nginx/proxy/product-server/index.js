const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  let html = `
        <html>
            <body>
                <h1>Products</h1>
                <ol>
                ${["Computer", "Mobile", "Fan", "TV", "0"]
                  .map(
                    (p) => `<li>
                  <a href="/${p}">${p}</a>
                  </li>`
                  )
                  .join("")}
                </ol>
            </body>
        </html>
    `;

  res.send(html);
});

app.get("/:product", (req, res) => {
  res.send(`<h1>Buy me - ${req.params.product}</h1>`);
});

app.listen(PORT, () => console.log(`Product server is running on ${PORT}`));

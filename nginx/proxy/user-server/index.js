const express = require("express");
const app = express();
const PORT = 4001;

app.get("/", (req, res) => {
  let html = `
        <html>
            <body>
                <h1>Users</h1>
                <ol>
                ${["Rahul", "Shani", "Raushan", "Kishore", "Kapil"]
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
  res.send(`<h1>Hi, i am ${req.params.product}</h1>`);
});

app.listen(PORT, () => console.log(`Product server is running on ${PORT}`));

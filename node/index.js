const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    service: "mesh-vault-api"
  });
});

app.get("/health", (req, res) => {
  res.send("healthy");
});

app.listen(PORT, () => {
  console.log(`Mesh Vault API listening on port ${PORT}`);
});

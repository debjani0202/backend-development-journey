const express = require("express");
const app = express();

app.get("/news/:id", (req, res) => {
    const newsId = req.params.id;

    res.send(`News Details for ID: ${newsId}`);
});

app.listen(3000, () => {
    console.log("Server running on port 8000");
});

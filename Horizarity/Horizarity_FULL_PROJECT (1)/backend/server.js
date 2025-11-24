// Simple placeholder backend
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/version', (req, res) => {
    res.json({ version: "1.0.0" });
});

app.listen(PORT, () => console.log("Server running"));

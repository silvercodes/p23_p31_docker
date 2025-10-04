
const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: "NodeJS API works"
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('🟢', `File server started on port ${port}`);
});
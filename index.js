const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.post('/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'Invalid input. Please provide two numbers.' });
    }

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        default:
            return res.status(400).json({ error: 'Invalid operation.' });
    }

    res.json({ result });
});

// Start server
app.listen(port, () => {
    console.log(`Calculator backend running at http://localhost:${port}`);
});
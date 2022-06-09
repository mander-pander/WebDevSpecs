require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3035;
const controller = require('./controller');

app.use(express.json());
app.use(cors());

app.get('/api/info', controller.getInputs);
app.post('/api/info', controller.createInput);

app.listen(port, () => console.log(`running on ${port}`));

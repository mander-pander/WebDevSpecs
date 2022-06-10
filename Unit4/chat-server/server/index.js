const express = require('express');
const app = express();
const port = 3001;
const messages = require('./controllers/messages_controller');

app.use(express.json());
app.use(express.static(__dirname + '../public/build'))

const mBaseURL = "/api/messages";
app.post(mBaseURL, messages.create);
app.get(mBaseURL, messages.read);
app.put(`${mBaseURL}/:id`, messages.update);
app.delete(`${mBaseURL}/:id`, messages.delete);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

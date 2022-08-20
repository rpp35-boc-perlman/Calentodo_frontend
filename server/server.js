const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('client/dist'));

// routes

app.listen(port, () => {
  console.log(`CalenTodo 🥳 listening on port ${port}`);
});

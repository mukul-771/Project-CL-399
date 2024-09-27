const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON requests

// Sample GET endpoint
app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Sample POST endpoint
app.post('/api/users', (req, res) => {
  const user = req.body;
  // Here you would normally save the user to a database
  res.status(201).json({ message: 'User created', user });
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});

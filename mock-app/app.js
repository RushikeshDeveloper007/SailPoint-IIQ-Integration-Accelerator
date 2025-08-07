// mock-app/app.js
// Mock REST API to simulate external target system for SailPoint integration

const express = require('express');
const app = express();
app.use(express.json());

let mockDB = {};

app.post('/createUser', (req, res) => {
  const { id, name, department } = req.body;

  // Validate required fields
  if (!id || !name || !department) {
    return res.status(400).send({ error: 'Missing required fields' });
  }

  // Prevent accidental overwrite when the user already exists
  if (mockDB[id]) {
    return res.status(409).send({ error: 'User already exists' });
  }

  mockDB[id] = { name, department, status: 'active' };
  console.log(`User created: ${id}`);
  res.status(201).send({ status: 'success', id });
});

app.put('/updateUser/:id', (req, res) => {
  const id = req.params.id;
  if (mockDB[id]) {
    mockDB[id] = { ...mockDB[id], ...req.body };
    console.log(`User updated: ${id}`);
    res.send({ status: 'updated', id });
  } else {
    res.status(404).send({ error: 'User not found' });
  }
});

app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  if (mockDB[id]) {
    mockDB[id].status = 'disabled';
    console.log(`User disabled: ${id}`);
    res.send({ status: 'disabled', id });
  } else {
    res.status(404).send({ error: 'User not found' });
  }
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => console.log('Mock app running on http://localhost:3000'));
}

// routes/users.js
const express = require('express');
const fs = require('fs');
const router = express.Router();

const USERS_FILE = './data/users.json';

// Read users from the JSON file
function getUsers() {
  const data = fs.readFileSync(USERS_FILE);
  return JSON.parse(data);
}

// Write users to the JSON file
function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// Get all users
router.get('/', (req, res) => {
  const users = getUsers();
  res.json(users);
});

// Get a specific user by ID
router.get('/:id', (req, res) => {
  const users = getUsers();
  const user = users.find((user) => user.id === req.params.id);

  if (!user) {
    res.status(404).json({ message: 'User not found' });
  } else {
    res.json(user);
  }
});

// Create a new user
router.post('/', (req, res) => {
  const users = getUsers();
  const newUser = req.body;
  users.push(newUser);
  saveUsers(users);
  res.status(201).json(newUser);
});

// Update an existing user
router.put('/:id', (req, res) => {
  const users = getUsers();
  const updatedUser = req.body;
  const index = users.findIndex((user) => user.id === req.params.id);

  if (index === -1) {
    res.status(404).json({ message: 'User not found' });
  } else {
    users[index] = { ...users[index], ...updatedUser };
    saveUsers(users);
    res.json(users[index]);
  }
});

// Delete a user
router.delete('/:id', (req, res) => {
  const users = getUsers();
  const index = users.findIndex((user) => user.id === req.params.id);

  if (index === -1) {
    res.status(404).json({ message: 'User not found' });
  } else {
    users.splice(index, 1);
    saveUsers(users);
    res.status(204).end();
  }
});

module.exports = router;
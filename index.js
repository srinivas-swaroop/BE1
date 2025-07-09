const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.post('/creditnote', (req, res) => {
  res.status(200).json({ message: 'Credit Note received', data: req.body });
});

app.post('/debitnote', (req, res) => {
  res.status(200).json({ message: 'Debit Note received', data: req.body });
});

app.post('/taxnote', (req, res) => {
  res.status(200).json({ message: 'Tax Note received', data: req.body });
});

app.post('/combinednote', (req, res) => {
  res.status(200).json({ message: 'Combined Note received', data: req.body });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

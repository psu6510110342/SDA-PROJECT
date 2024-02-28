const express = require('express');
const app = express();

// mock data
const student = [
  {
    id: '1001',
    name: 'john',
    stdnumber: '001',
  
  },
  {
    id: '1002',
    name: 'chris',
    stdnumber: '486',

  },
  {
    id: '1003',
    name: 'Mary',
    stdnumber: '305',

  }
];

app.get('/student', (req, res) => {
  res.json(student);
});

app.get('/student/:id', (req, res) => {
  const { id } = req.params;
  const result = student.find((product) => product.id === id);
  res.json(result);
});

app.post('/student', (req, res) => {
  const payload = req.body;
  res.json(payload);
});

app.put('/student/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id });
});

app.delete('/student/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id });
});

app.listen(3000, () => {
  console.log('Application is running on port 3000');
});
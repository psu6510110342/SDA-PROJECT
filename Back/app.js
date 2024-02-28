const express = require('express');
const app = express();

app.use(express.json());
// mock data
const student = [
  {
    id: '1',
    name: 'jack',
    Stdnumber: '307',
  },
  {
    id: '2',
    name: 'john',
    Stdnumber: '305',
    
  },
  {
    id: '3',
    name: 'Mary',
    Stdnumber: '301',
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
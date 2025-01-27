import express from 'express';
const app = express();
const PORT = 9000;

app.get('/api/get/', (req, res) => {
  res.send({ message: 'Welcome to MyApp API' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});





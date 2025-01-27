import express from 'express';
const app = express();
const PORT = 9000;

// Middleware to parse JSON
app.use(express.json());

// GET Route: Welcome Message
app.get('/api/get/', (req, res) => {
  res.send({ message: 'Welcome to MyApp Nodejs' });
});

// POST Route: Echo API
app.post('/api/echo', (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).send({ error: 'Message is required' });
  }
  res.send({ echo: message });
});

// GET Route: Health Check
app.get('/api/health', (req, res) => {
  res.send({ status: 'OK', uptime: process.uptime() });
});

// Dynamic Route: Greeting
app.get('/api/greet/:name', (req, res) => {
  const { name } = req.params;
  res.send({ message: `Hello, ${name}!` });
});

// Start server only if not in test mode
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app; // Export the app for testing




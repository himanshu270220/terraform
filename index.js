const express = require('express');
const app = express();

const PORT = 9000; // Define port explicitly

app.get('/api/get/', (req, res) => {
  res.send({ message: 'Welcome to MyApp API' });
});

// Start the server and bind it to PORT
app.listen(9000, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});




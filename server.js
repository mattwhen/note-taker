const express = require('express');
const path = require('path');
const api = require('./routes/apiroutes');

const PORT = 3001;

// Instantiate the express constructor.
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// Server our static resources from the 'public' folder.
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Open the port and listen to the request and response
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

const http = require('http');

// Define the port number
const port = 1245;

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the status code and content type in the HTTP response header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body
  res.end('Hello Holberton School!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Callback function executed when the server starts
  console.log(`Server running at http://localhost:${port}/`);
});

// Export the app variable for external use (e.g., testing)
module.exports = app;

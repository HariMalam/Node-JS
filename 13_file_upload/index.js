const http = require('http');
const formidable = require("formidable");

const server = http.createServer(async (req, res) => {
  if (req.url === '/api/upload' && req.method.toLowerCase() === 'post') {
    // Handling file upload

    // Create an instance of IncomingForm
    const form = new formidable.IncomingForm();
    let fields;
    let files;

    try {
      // Parse the form data
      [fields, files] = await form.parse(req);
    } catch (err) {
      // Handle form parsing errors
      if (err.code === formidable.Errors.MAX_FIELDS) {
        // Handle a specific error (maxFieldsExceeded)
      }
      console.error(err);
      res.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
      res.end(String(err));
      return;
    }

    // Send a JSON response with parsed fields and files
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ fields, files }, null, 2));
    return;
  }

  // Display the file upload form for GET requests
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <h2>With Node.js <code>"http"</code> module</h2>
    <form action="/api/upload" enctype="multipart/form-data" method="post">
      <div>Text field title: <input type="text" name="title" /></div>
      <div>File: <input type="file" name="multipleFiles" multiple="multiple" /></div>
      <input type="submit" value="Upload" />
    </form>
  `);
});

// Start the server on port 8080
server.listen(8080, () => {
  console.log('Server listening on http://localhost:8080/ ...');
});

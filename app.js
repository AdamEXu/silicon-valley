const express = require("express");
const app = express();

// Port to run the server on (default is 3000)
const PORT = process.env.PORT || 3000;

// Redirect all incoming requests to the specified URL
app.use((req, res) => {
  res.redirect("https://counterspell.hackclub.com/silicon-valley");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

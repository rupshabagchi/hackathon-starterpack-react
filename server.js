/** (OPTIONAL FILE)
 *  Simple Node Express.js server for testing browserHistory or API integrations
 *  It uses the built assets in the /build folder
 */
const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.static('./build'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(port, () => console.log(`Server running: http://localhost:${port}`));
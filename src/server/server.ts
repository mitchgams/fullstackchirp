import * as express from 'express';
import apiRouter from './routes';

const path = require('path');
const app = express();

/******
 * this is important. w/o this, fetch post/put w/ json
 * headers don't get processed.
 */
app.use(express.json());

app.use(express.static('public'));
app.use(apiRouter);


// refresh fix
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    });
  });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));

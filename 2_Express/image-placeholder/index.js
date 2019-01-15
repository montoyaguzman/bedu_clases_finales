const express = require('express');
const parsers = require('./parsers');
const PNGImage = require('pngjs-image');
const hexRgb = require('hex-rgb');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola mundo!');
});

app.get('/:dimentions', (req, res) => {
  let [x, y] = parsers.parseDimentions(req.query.dimentions)
  console.log('color : ', req.query.background)
  let image = PNGImage.createImage(x, y ? y : x);
  // image.setAt(20, 30, {red: 255, green: 0, blue: 0, alpha: 100});
  image.fillRect(20, 100, 400, 200, hexRgb(req.query.background))
  image.toBlob((err, buffer) => {
    res.contentType('png');
    res.send(buffer);
  })
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
// 100x150?text=hola&color=255,255,255,255
// '100' [100]
// '100x150' [100, 100]
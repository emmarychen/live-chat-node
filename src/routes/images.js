const express = require('express');
const fs = require('fs');
const uuid = require('uuid');
const path = require('path');
const multer = require('multer');
const upload = multer({ dest: 'tmp_uploads' });
const router = express.Router();

const config = require('../config');
const imgFilePath = path.resolve(__dirname, '../images/carousel');

router.post('/', upload.single('avatar'), (req, res) => {
  const output = {
    file: req.file
  };
  if (req.file && req.file.originalname) {
    let ext = ''; // 副檔名
    switch (req.file.mimetype) {
      case 'image/jpeg':
          ext = '.jpg';
          break;
      case 'image/png':
          ext = '.png';
          break;
      case 'image/gif':
          ext = '.gif';
          break;
    }
    if (ext) {
      let filename = uuid.v4() + ext;
      output.newName = filename;
      fs.rename(
          req.file.path,
          './src/images/' + filename,
          error => {}
      );
    } else {
      fs.unlink(req.file.path, error => {});
    }
  }
  res.json(output);
});

router.get('/carousel', (req, res) => {
  fs.readdir(imgFilePath, (error, data) => {
    if (error) {
      console.log('讀取檔案失敗');
      return;
    }
    const fullImageUrls = data.map(filename => {
      return `${config.domain}/images/carousel/${filename}`;
    });
    res.json({ images: fullImageUrls });
  });
});

module.exports = router;
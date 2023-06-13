const express = require("express");
const fs = require('fs');
const path = require('path');
const router = express.Router();

const imgFilePath = path.resolve(__dirname, '../../images/carousel');

fs.readdir(imgFilePath, (error, data) => {
  // 若錯誤 error 為一個物件，則會在這邊觸發內部程式碼，作為簡單的錯誤處理
  if (error) {
    console.log('讀取檔案失敗');
    return;
  }
  data.forEach((filename) => {
    router.get(`/carousel/${filename}`, (req, res) => {
      const imagePath = `${imgFilePath}/${filename}`;
      res.sendFile(imagePath);
    });
  });
});

module.exports = router;
const multer = require('multer');
const upload = multer({ dest: 'tmp_uploads' }); // 標的資料夾為何

module.exports = upload;
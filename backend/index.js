require("dotenv").config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const multer = require('multer');

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/api/portfolio', require('./routes/portfolioRoutes'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
});

const upload = multer({ storage })

app.post('/image', upload.single('file'), (req, res) => {
    console.log(req.body);
    console.log(req.file);

})

app.listen(3001, () => {
    console.log('Server is running');


})
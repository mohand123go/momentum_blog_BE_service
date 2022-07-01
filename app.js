const express = require('express');
const mongoose = require('mongoose');

const multer = require('multer')
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb' }));


app.use(express.static('public'))
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,`${file.fieldname}_${uniqueSuffix}_${file.originalname}`)
    }
  })

  const upload = multer({storage}).single('postImg')
  

// app.use(bodyParser.json());
// app.use(bodyParser.raw());
const postsRouter = require('./routes/posts');
// connect to mongoDB using mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/momentum').then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log(err);
})

app.use((req, res, next) => {
// console.log('ss', req.body)
    res.set('Access-Control-Allow-Origin', '*') 
    next()
    })

app.use('/', postsRouter)

app.post('/upload',upload, (req,res,next)=>{
    const { file } = req
    console.log(file)
    res.json({
        path: file.filename
    })
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


// install express and mongoose 
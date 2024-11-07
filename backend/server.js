import express from 'express';
import cors from 'cors'
import multer from 'multer';
import { FileUpload } from './controller/FileUpload.js';

const app = express()
app.use(cors())
app.use(express.json())

// Configure multer for file uploads
const storage = multer.memoryStorage(); // Use memory storage to avoid saving files to disk
const upload = multer({ storage });

app.use('/api/check', (req,res)=>{
    res.send("hi from backend also")
})

app.post('/api/post',upload.single('image'),FileUpload)

app.get('/', (req, res)=>{
    res.send("hi from backend")
})

app.listen(8000, ()=>console.log("Server is rinning on port: 8000"))
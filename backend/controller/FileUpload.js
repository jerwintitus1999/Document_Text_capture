import Tesseract from "tesseract.js";

const FileUpload = async(req, res)=>{
    const data = req.body;
    console.log(req.body);
    console.log(req.file);
    
    
    const imagePath = req.file.buffer
    try {
        // Process image with Tesseract
    const { data: { text } } = await Tesseract.recognize(
        imagePath,
        'eng',
        { logger: m => console.log(m) }
      );
      res.send({"Extracted text": text})
  
      console.log('Extracted Text:', text);
    } catch (error) {
        console.log(error);
        res.send(data)
        
    }
    
}

export {FileUpload}
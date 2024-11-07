import axios from "axios";
import { useEffect, useState } from "react";


const FileUpolad = ()=>{

    const [submitFile, setSubmitFile] = useState()

    const handleFile = (e)=>{
        setSubmitFile(e.target.files[0])
    }
    
    const handleSubmit = async(e)=>{
        e.preventDefault();

        const formData = new FormData();
        if(submitFile) formData.append("image", submitFile)

        try {
            const response = await axios.post('http://localhost:8000/api/post', formData, {headers: {"Content-Type": "multipart/form-data",},})
            console.log(response);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    return(
        <div>
            <p>Upload image</p>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFile}/>
                <button>Upload</button>
            </form>
        </div>
    )

}

export default FileUpolad
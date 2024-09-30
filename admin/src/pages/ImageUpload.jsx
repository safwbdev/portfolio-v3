import { Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

const ImageUpload = () => {
    const [file, setFile] = useState();
    const [preview, setPreview] = useState();
    const handleChange = (e) => {
        setPreview(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0]);
    }
    const upload = () => {
        const formData = new FormData();
        formData.append('file', file)
        axios.post(`${import.meta.env.VITE_APP_URL}/image`, formData)
            .then(res => { })
            .catch(err => console.log(err)
            )
    }

    return (

        <div>
            <Button
                component="label"
                variant='outlined'
            >
                Upload File
                <input type="file" hidden onChange={handleChange} />
            </Button>
            <Button onClick={upload} variant='contained' disabled={!file}>Upload</Button>
            {preview && <img src={preview} />}
        </div>
    )
}

export default ImageUpload
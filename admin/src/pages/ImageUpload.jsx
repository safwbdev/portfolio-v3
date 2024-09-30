import axios from 'axios';
import React, { useState } from 'react'

const ImageUpload = () => {
    const [file, setFile] = useState();
    const upload = () => {
        const formData = new FormData();
        formData.append('file', file)
        axios.post(`${import.meta.env.VITE_APP_URL}/image`, formData)
            .then(res => { })
            .catch(err => console.log(err)
            )
    }

    return (

        <div><input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button type="button" onClick={upload}>Upload</button>
        </div>
    )
}

export default ImageUpload
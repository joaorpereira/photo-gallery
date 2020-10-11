import React, { useState } from 'react'
import Progress from '../components/Progress'

function Form() {

    const [image, setImage] = useState(null)
    const [error, setError] = useState(null)
    const types = ('image/png', 'image/jpeg')  
 
    const handleImageChange = (e) => {
        let image = e.target.files[0]
        if(image && types.includes(image.type)) {
            setImage(image)
            setError(null)
        } else {
            setImage(null)
            setError('Please select a png or jpeg image file')
        }
    }
 
    return (
        <form>
            <label>
                <input onChange={handleImageChange} type='file' />
                <span>+</span>
            </label>
            <div className='output'>
                {error && <div className='error'>{error}</div>}
                {image && <div className='image'>{image.name}</div>}
                {image && <Progress image={image} setImage={setImage} />}
            </div>
            {/* <button onClick={handleSubmit}>Submit</button> */}
        </form>
    )
}

export default Form

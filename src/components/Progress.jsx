import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import useStorage from '../hooks/useStorage'

function Progress({image, setImage}) {

    const {url, progress} = useStorage(image)

    useEffect(() => {
        if(url){
            setImage(null)
        }
    }, [url, setImage])

    return (
        <motion.div className='progress-bar' 
            initial={{width: 0}}
            animate={{width: progress + '%'}}/>
    )
}

export default Progress

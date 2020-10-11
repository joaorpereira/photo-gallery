import React from 'react'
import { motion } from 'framer-motion'
import useFirestore from '../hooks/useFirestore'

function ImageGrid({setSelectedImg}) {
    const { docs } = useFirestore('images')

    return (
        <motion.div className='img-grid'>
            {docs && docs.map(item => {
                return (
                    <motion.div className="img-wrap" key={item.id} 
                        onClick={() => setSelectedImg(item.url)}
                        layout
                        whileHover={{opacity: 1}}s>

                        <motion.img src={item.url} alt="uploaded" 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}/>
                    </motion.div>
                )
            })}
        </motion.div>
    )
}

export default ImageGrid

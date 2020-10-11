import {useState, useEffect} from 'react'
import {storage, store, timestamp} from '../config/firebase'

const useStorage = (image) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        const storageRef = storage.ref(image.name)
        const collectionRef = store.collection('images')

        storageRef.put(image).on('state_changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            setProgress(percentage)
        }, (err) => {
            setError(err)
        }, async () => {
            const url = await storageRef.getDownloadURL()
            const createdAt = timestamp()
            collectionRef.add({
                url: url, 
                createdAt: createdAt
            })
            setUrl(url)
        })
    },[image])

    return { progress, url, error }
}

export default useStorage

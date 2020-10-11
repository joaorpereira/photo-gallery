import {useState, useEffect} from 'react'
import {store} from '../config/firebase'

const useFirestore = (collection) => {
    const [docs, setDocs]  = useState([])   

    useEffect(() => {
        const unsub = store.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snapshot) => {
            let documents = []
            snapshot.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
            })
            setDocs(documents)
        })

        return () => unsub()
    },[collection])

    return { docs }
}

export default useFirestore

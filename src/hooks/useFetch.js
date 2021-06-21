import { useState, useEffect } from 'react'
import { createUrl } from '../utils/Variables'

const useFetch = (param, resource) => {
    const URL = createUrl(param, resource)
    const [search, setSearch] = useState([])

    useEffect(() => {
        console.log(URL)
        fetch(URL)
            .then(res => res.json())
            .then(data => setSearch(data))
    }, [URL])


    return search
}

export default useFetch

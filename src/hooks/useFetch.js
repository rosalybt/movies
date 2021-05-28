import { useState, useEffect } from 'react'
import { createUrl } from '../utils/Variables'

const useFetch = (param) => {
    const URL = createUrl(param)
    const [search, setSearch] = useState([])

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setSearch(data.results || data))
    }, [URL])


    return search
}

export default useFetch
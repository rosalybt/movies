import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [search, setSearch] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setSearch(data.results))
    }, [url])


    return search
}

export default useFetch
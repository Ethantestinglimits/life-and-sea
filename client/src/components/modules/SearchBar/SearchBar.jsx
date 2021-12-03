import Link from 'next/link';
import styles from './SearchBar.module.scss'
import {useCallback, useRef, useState} from "react";
import {useRouter} from "next/router";
import { axiosPublic } from '@util/axios'

export default function SearchBar() {

    const searchRef = useRef(null)
    const [query, setQuery] = useState('')
    const [active, setActive] = useState(false)
    const [results, setResults] = useState([])

    const endpoint = (query) => `api/search?query=${query}`

    const onChange = useCallback((e) => {
        const query = e.target.value
        setQuery(query)
        if (query.trim().length) {
            axiosPublic(endpoint(query.trim()))
                .then(res => res.json())
                .then(res => {
                    setResults(res.results)
                })
        } else {
            setResults([])
        }
    }, [])

    const onClick = useCallback((e) => {
        if (searchRef.current && !searchRef.current.contains(e.target)) {
            setActive(false)
            window.removeEventListener('click', onClick)
        }
    }, [])


    const onFocus = useCallback(() => {
        setActive(true)
        window.addEventListener('click', onClick)
    }, [onClick])


    return (<>
        <div className={styles.searchContainer}>
            <form className={styles.searchBar}>
                <input
                    onChange={onChange}
                    onFocus={onFocus}
                    value={query}
                    type="text"
                    placeholder="Chercher une personne..."
                    className={styles.sweetBorder}
                />
                <button
                    className={styles.sweetBorder}
                >🔍</button>
            </form>
            {active && results.length > 0 && (
                <ul className={styles.results}>
                    {results.map(({id, title, img}) => (
                        <li key={id}>
                            {img && <img src={img} alt={title}/>}
                            <div className={title}>
                                <Link href={`/profile/${id}`}>
                                    <h2>{title}</h2>
                                </Link>
                            </div>
                            
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </>)
}
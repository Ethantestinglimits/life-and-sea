import Link from 'next/link';
import styles from './SearchBar.module.scss'
import {useCallback, useRef, useState} from "react";

export default function SearchBar() {
    const searchRef = useRef(null)
    const [query, setQuery] = useState('')
    const [active, setActive] = useState(false)
    const [results, setResults] = useState([])

    const endpoint = (query) => `api/search?q=${query}`
    // TODO: CHECK API ENDPOINT

    const onChange = useCallback((e) => {
        const query = e.target.value
        setQuery(query)
        if (query.trim().length) {
            fetch(endpoint(query.trim()))
                .then(res => res.json())
                .then(res => {
                    setResults(res.results)
                    // TODO: CHECK API RESPONSE
                })
        } else {
            setResults([])
        }
    }, [])

    const onFocus = useCallback(() => {
        setActive(true)
        window.addEventListener('click', onClick)
    }, [])

    const onClick = useCallback((e) => {
        if (searchRef.current && !searchRef.current.contains(e.target)) {
            setActive(false)
            window.removeEventListener('click', onClick)
        }
    }, [])

    return (<>
        <div className={styles.searchContainer}>
            <div className={styles.searchBar}>
                <input
                    onChange={onChange}
                    onFocus={onFocus}
                    value={query}
                    type="text"
                    placeholder="Chercher une personne"
                    className={styles.sweetBorder}
                />
                <button className={styles.sweetBorder}>🔍</button>
            </div>
            {active && results.length > 0 && (
                <ul className={styles.results}>
                    {results.map(({id, title, desc}) => (
                        // TODO: HANDLE RESPONSE
                        <li key={id}>
                            <Link href={`/profile/${id}`}>
                                <h2>{title}</h2>
                            </Link>
                            <div>{desc}</div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </>)
}
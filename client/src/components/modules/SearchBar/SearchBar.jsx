import Link from 'next/link';
import styles from './SearchBar.module.scss'
import {useCallback, useRef, useState} from "react";
import {useRouter} from "next/router";
import axios from 'axios'
import baseURL from "@config/connection";
import { Person, Ship, Wreck } from '@element/SearchResults'
 
export default function SearchBar() {

    const searchRef = useRef(null)
    const [query, setQuery] = useState('')
    const [active, setActive] = useState(false)
    const [results, setResults] = useState([])

    const endpoint = (query) => `/search?query=${query}`

    const onChange = useCallback((e) => {
        const query = e.target.value
        setQuery(query)
        if (query.trim().length) {
            const uri = endpoint(query.trim())
            console.log(uri)
            axios.get(baseURL + uri)
                .then(res => {
                    return res?.data || null
                })
                .then(res => {
                    if (res) {
                        const formatedResults = [
                            res.person.map(entity => Object.assign(entity, { type: 'person' })),
                            res.ship.map(entity => Object.assign(entity, { type: 'ship' })),
                            res.wreck.map(entity => Object.assign(entity, { type: 'wreck' }))
                        ].flat()
                        console.log(formatedResults)
                        setResults(formatedResults)
                    }
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
            {results?.length > 0 && (
                <ul className={styles.results}>
                    {results.map((entity) => {
                        if (entity.type === 'person') return <Person entity={entity}/>
                        if (entity.type === 'ship') return <Ship entity={entity}/> 
                        if (entity.type === 'wreck') return <Wreck entity={entity}/>
                    })}
                </ul>
            )}
        </div>
    </>)
}
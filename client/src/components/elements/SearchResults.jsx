import styles from './SearchResults.module.scss'
import Link from 'next/link'

export function Person ({ entity }) {

    const { id, Picture, FirstName, LastName } = entity
    return (<>
        <li key={id}>
            {Picture && <img src={Picture} alt={FirstName}/>}
            <div className={styles.title}>
                <Link href={`/profile/${id}`}>
                    <h2>{FirstName + ' ' + LastName}</h2>
                </Link>
            </div>
            
        </li>
    </>)
}

export function Ship ({ entity }) {

    const { id, Name } = entity

    return (<>
    
        <li key={id}>
            <div className={styles.title}>
                <h2>{Name}</h2>
            </div>
            
        </li>
    </>)
}

export function Wreck ({ entity }) {

    const { id, Name, Date } = entity
    
    return (<>
    
        <li key={id}>
            <div className={styles.title}>
                <h2>{Name} ({Date})</h2>
            </div>
        </li>
    </>)
}
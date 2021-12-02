import styles from './SearchBar.module.scss'

export default function SearchBar() {

    return (<>
        <div className={styles.searchBar}>
            <form action={"/s"} onSubmit={"handleSubmit"}>
                <input
                    type="text"
                    placeholder="Chercher une personne"
                    className={styles.sweetBorder}
                />
                <button className={styles.sweetBorder}>🔍</button>
            </form>
        </div>
    </>)
}
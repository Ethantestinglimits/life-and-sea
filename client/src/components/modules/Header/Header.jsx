import Link from 'next/link'
import styles from './Header.module.scss'

import { tabs } from '@config/navbar'

export default function Header () {

    return (<>
        <nav className={styles.navbar}>
            <div className={styles.home}>Life & <span className={styles.homeSpan}>Sea</span></div>
            <div className={styles.right}>
                <div className={styles.search}></div>
                <div className={styles.login}>Login</div>
            </div>
        </nav>
    </>)
}
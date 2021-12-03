import styles from './SearchPage.module.scss';
import React, { useState } from "react";

export default function SearchPage () {
    
    return (<>

        {/* Background Océan / Bulles */}
        <div className={styles.ocean}>
            
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            
        </div>

        {/* Scuba Diver */}
        <div className={styles.diver}>
            <img className={styles.diving} src="https://s-media-cache-ak0.pinimg.com/originals/0d/9d/0c/0d9d0c2d31522443a0aa0c253e21c851.png"/>
        </div>
        
        {/* Search Input */}
        <div>
            <input type="text" placeholder="Rechercher un sauveteur..."></input>
        </div>
    </>)
}
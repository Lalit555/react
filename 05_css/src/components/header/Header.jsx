import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h3 className={styles.h3}>Vibe Coders</h3>
      <button className={styles.btn}>Register</button>
    </div>
  )
}

export default Header

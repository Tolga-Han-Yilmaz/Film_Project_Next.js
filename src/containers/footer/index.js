import Link from 'next/link'
import React from 'react'
import styles from "./styles.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with by {" "}
      < Link href="https://github.com/Tolga-Han-Yilmaz/Film_Project_Next.js" target="_blank">
       {" "} Tolga Han Yilmaz
      </Link>
    </footer>
  )
}

export default Footer

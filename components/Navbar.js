import Link from 'next/link';
import Image from 'next/image';

import styles from '/styles/Navbar.module.css'



export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/">
            <div className={styles.logo}>
                <Image className={styles.imageLogo} src="/images/pokeball.png" width="30" height="30" alt="pokenext" />
                <h1>Poke<span>Next</span></h1>
            </div>
            </Link>
            <ul>
                <li>
                    <Link href="/"> Home </Link>
                </li>
                <li>
                    <Link href="/about"> Sobre </Link>
                </li>
            </ul>
        </nav>
    )
}
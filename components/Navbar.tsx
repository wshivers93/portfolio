import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

function Navbar() {
    return (
        <header className={styles['site-header']}>
            <nav className={styles.navbar}>
                <ul>
                    <li>
                        <Link href='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href='/aboutme'>
                            About Me
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className={styles['social-links']}>
                <a href='https://github.com'>
                    <FontAwesomeIcon icon={['fab', 'github']} />
                </a>

                <a href='https://linkedin.com'>
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>
            </div>
        </header>
    )
}

export default Navbar
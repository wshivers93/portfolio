import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'
import {
    light,
    dark,
    selectTheme
} from './navThemeSlice'

function Navbar() {
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();
    
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

            <div className={styles['theme-toggle']} onClick={() => theme === 'dark' ? dispatch(light()) : dispatch(dark())}>
                Toggle Theme
            </div>

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
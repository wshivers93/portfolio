import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/navbar/Navbar'
import styles from '../styles/Home.module.css'
import { useSelector } from 'react-redux'
import { selectTheme } from '../components/navbar/navThemeSlice'

const AboutMe: NextPage = () => {
    return(
        <>
            <div className={styles.container}>
                <div>About Me</div>
            </div>
        </>
    )
}

export default AboutMe
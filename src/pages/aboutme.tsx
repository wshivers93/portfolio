import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/navbar/Navbar'
import styles from '../styles/Home.module.css'

const AboutMe: NextPage = () => {
    return(
        <>
        <NavBar />
        <div className={styles.container}>
            <div>About Me</div>
        </div>
        </>
    )
}

export default AboutMe
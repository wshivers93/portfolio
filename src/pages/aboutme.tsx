import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/navbar/Navbar'
import styles from '../styles/Home.module.css'
import { useSelector } from 'react-redux'
import { selectTheme } from '../components/navbar/navThemeSlice'

const AboutMe: NextPage = () => {
    return(
        <>
            <div className={useSelector(selectTheme)} data-theme={useSelector(selectTheme)}>
                <NavBar />
                <main className='h-screen bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-50'>
                    <div className={styles.container}>
                        <div>About Me</div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default AboutMe
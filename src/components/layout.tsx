import Navbar from './navbar/Navbar'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import { selectTheme } from '../components/navbar/navThemeSlice'
import Head from 'next/head'

// TODO: fix children type error

export default function Layout({ children }) {
  return (
    <>
      <div className={useSelector(selectTheme)} data-theme={useSelector(selectTheme)}>
        <Head>
          <title>Will Shivers</title>
        </Head>

        <Navbar />
        <main className="bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-50">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
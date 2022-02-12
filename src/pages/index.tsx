import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navbar/Navbar'
import { useSelector } from 'react-redux'
import { selectTheme } from '../components/navbar/navThemeSlice'
import { Typography } from '@mui/material'

interface pageProps {
  data: {
    avatar_url: string;
    bio: string;
  }
}

const Home: NextPage<pageProps> = ({ data }) => {
  return (
    <>
    <div className={useSelector(selectTheme)} data-theme={useSelector(selectTheme)}>
      <NavBar />
      <Head>
        <title>Will Shivers</title>
        <meta name="description" content="My Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='h-screen bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-50'>
        <div className="container h-full lg:space-y-4 flex flex-col justify-center items-center">
            <div className='hidden lg:block w-3/4'>
                {/* <Image className="rounded-full" src={data.avatar_url} alt="profile image" layout='fill' priority/> */}
            </div>
            <div className='w-3/4 text-left'>
              <Typography component='div' variant='h2'>Hi, my name is Will.</Typography>
            </div>
            <div className="w-3/4 text-left">{data.bio}</div>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
    </>
  )
}

export async function getStaticProps() {
  // call external Github Api
  const res = await fetch('https://api.github.com/users/wshivers93');
  const data = await res.json();

  console.log(data);

  return {
      props: {
          data,
      }
  }
}

export default Home

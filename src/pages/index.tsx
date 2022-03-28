import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navbar/Navbar'
import Card from '../components/card/Card'
import { useSelector } from 'react-redux'
import { selectTheme } from '../components/navbar/navThemeSlice'
import { Typography } from '@mui/material'

interface pageProps {
  data: {
    avatar_url: string;
    bio: string;
  },
  cmsData: {
    data: {
      attributes: {
        [key: string]: string
      };
    }
  }
}

const Home: NextPage<pageProps> = ({ data, cmsData }) => {
  console.log('CMS', cmsData.data.attributes);
  return (
    <>
    <div className={useSelector(selectTheme)} data-theme={useSelector(selectTheme)}>
      <NavBar />
      <Head>
        <title>Will Shivers</title>
      </Head>

      <main className='h-screen bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-50'>
        <div className="container h-full mx-auto lg:space-y-4 flex flex-col justify-center px-2 lg:px-6">
            <div className='hidden lg:block'>
                {/* <Image className="rounded-full" src={data.avatar_url} alt="profile image" layout='fill' priority/> */}
            </div>
            <div className='w-fit max-w-lg'>
              <Card header={cmsData.data.attributes.IntroHeader} content={cmsData.data.attributes.IntroContent} headerImg={false} />
            </div>
            {/* <div className="w-3/4 text-left">{data.bio}</div> */}
        </div>
        <div className="container w-10 h-10">
          <Card header='Test' content='Testing' headerImg={false}></Card>
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

  // get data from Strapi CMS
  const cmsRes = await fetch('http://localhost:1337/api/home', {
    method: 'GET',
    headers: new Headers({
      'Authorization': `bearer ${process.env.CMS_TOKEN}`,
    }), 
  });
  const cmsData = await cmsRes.json();

  return {
      props: {
          data,
          cmsData
      }
  }
}

export default Home

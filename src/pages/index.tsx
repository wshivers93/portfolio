import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/card/Card'
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiPython,
  DiReact
} from 'react-icons/di'
import {
  SiTailwindcss,
  SiTypescript,
  SiCsharp,
  SiUnity,
  SiNextdotjs,
} from 'react-icons/si'
import { keys } from '@mui/system'

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
  const techObj = {
    html: <DiHtml5/>,
    css: <DiCss3/>,
    tailwind: <SiTailwindcss/>,
    javascript: <DiJavascript/>,
    typescript: <SiTypescript/>,
    react: <DiReact/>,
    nextjs: <SiNextdotjs/>,
    python: <DiPython/>,
    'c#': <SiCsharp/>,
    unity: <SiUnity/>,
  }

  return (
    <>
    <section className="container h-screen mx-auto lg:space-y-4 flex flex-col justify-center px-2 lg:px-6">
        <div className='hidden lg:block'>
            {/* <Image className="rounded-full" src={data.avatar_url} alt="profile image" layout='fill' priority/> */}
        </div>
        <div className='w-fit max-w-lg'>
          <Card header={cmsData.data.attributes.IntroHeader} content={cmsData.data.attributes.IntroContent} headerImg={false} />
        </div>
    </section>

    <section className="container h-screen mx-auto px-2 lg:px-6">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className='uppercase text-xl'>Tech i&apos;ve worked with:</div>
          <div className='flex flex-row wrap'>
            {Object.entries(techObj).map(([k, v]) => { return <Card key={k} header={v} content={k} headerImg={true} /> })}
          </div>
        </div>
      </div>
    </section>
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

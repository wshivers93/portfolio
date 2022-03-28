import React from 'react'
import styles from '../../styles/Card.module.css'

interface cardProps {
  header: string,
  content: string,
  headerImg: boolean,
}

function Card(props: cardProps) {
  const { headerImg } = props
  const headerStyle = 'text-xl lg:text-4xl text-left'
  return (
    <div className='relative w-full h-full'>
      <div className={`absolute rounded-lg -inset-px bg-gradient-to-r from-[#22D3EE] to-[#EC4899]  blur`}></div>
      <div className='relative rounded-lg bg-slate-0 dark:bg-slate-800 p-5 lg:p-10'>
        <div className={`${headerImg ? styles.cardImg : headerStyle} mb-10`}>
          {props.header}
        </div>
        <div className={styles.cardContent}>{props.content}</div>
      </div>
    </div>
  );
}

export default Card;
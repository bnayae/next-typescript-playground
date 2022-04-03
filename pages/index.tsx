import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Choices } from '../components/Choices'
import { Comp, Kind } from '../components/Comp'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [value, setValue] = useState<string | undefined>();
  const [values, setValues] = useState<string[]>([]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Typescript Sample</title>
        <meta name="description" content="Power by https://weknow.network/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>value = {value}</div>
        <Choices options={['A', 'B', 'C']} kind='single' value={value} setValue={setValue}/>
        <div>values = {values.join(', ')}</div>
        <Choices options={['A', 'B', 'C']} kind='multi' values={values} setValues={setValues}/>
        <Comp kind={Kind.a} name='Typescript' />
        <Comp kind={Kind.b} id={10}/>
        <Comp kind={Kind.a} name='Discriminated union' bold/>
      </main>

      <footer className={styles.footer}>
        Typescript playground 
      </footer>
    </div>
  )
}

export default Home

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {useState} from 'react'
import { useRouter } from 'next/router'


const inter = Inter({ subsets: ['latin'] })

export default function Home() { 

  const router = useRouter()

  const [formData, setFormData] = useState({
    firstName: '',
    username: ''
  })

  const CheckLogin = () => {
    console.log(formData.firstName)
    console.log(formData)

    if(formData.username !== null){
      router.push({
      pathname: './counter',
      query:{
         username: formData.username
      }
    })
  }

  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=OpenSan"></link>
        
      </Head>
      <main className={styles.main}>

       
       <h1 class="title">Enter Your Fist name and Username here</h1>
      <label name="text1">Your First name:</label>
       <input
       type="text"
       id="first"
       name="first"
       pattern="[A-Z]{1} [a-z]{2,10}"
       title="The first letter should be capitalized"
       onChange={(e=> setFormData({...formData, firstName: e.target.value}))}
       value={formData.first}
       />

       <label name="text1">Your Username:</label>
       <input
       type="text"
       id="username"
       name="username"
       pattern="[A-Z]{1} [a-z]{2,10}"
       title="Type your username"
       minLength="5"
       maxLength="10"
       onChange={(e=> setFormData({...formData, username: e.target.value}))}
       value={formData.first}
       />
       
       <button name="submit_button" type="submit" onClick={()=>CheckLogin()}>Submit</button>

 
      
      
      </main>
    </>
  )
}

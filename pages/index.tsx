/* import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
 */

import React,{useContext, useEffect} from 'react'
import { Context } from '../context'
import TextField from '@mui/material/TextField';

import Router from 'next/router'
import axios from 'axios'
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Link from 'next/link';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

function Auth() {
const {userName,
  setUserName,
  secret,
  setSecret}=useContext(Context)

  useEffect(()=>{
    console.log("username",userName)
    
  },[userName])
  
  useEffect(()=>{
    
    console.log("secret",secret)
  },[secret])
  

  return (
    <div className='background'>
      <div className='auth-container'>
        <form className='auth-form' style={{display:"flex"}} onSubmit={e=>{
          e.preventDefault()
          console.log("submit clicked, username:",userName," secret=",secret)
          }}>
          <div className='auth-title text-title ' style={{width:'95%',marginLeft:'2.5%'}}>WhosApp

          </div>
          {/* <div className='input_container'>
            <input placeholder='Enter Email' className='text-input'/>
          </div> */}

          <div className='login-buttons'>
      <div style={{margin:5}}></div>

            <Button className='white-font-buttons' style={{backgroundColor:'white',fontWeight:'900',color:'black'}} disabled={true} 
            >Sign In</Button>
      <div style={{margin:5}}></div>

            <Link href={'/register'} passHref><Button className='white-font-buttons'>Register
            <ArrowForwardIcon></ArrowForwardIcon>
            </Button></Link>
      <div style={{margin:5}}></div>

          </div>


          <div style={{color:'white' ,backgroundColor:'hsla(136, 89%, 91%,0.85)',borderRadius:15,padding:5,paddingLeft:15,paddingRight:15,borderColor:'blue',borderWidth:5}}>
          <TextField sx={{color:'warning.main',width:1}} id="email" label="Enter Email" variant="standard" color="primary" type="email" onChange={(e)=>{setUserName(e.target.value)}}></TextField>
          </div>



          {/* <TextField
  label="Standard warning"
  variant="standard"
  color="warning"
  
/> */}
  <div style={{margin:'5%'}}></div>
  <div style={{color:'white' ,backgroundColor:'hsla(136, 89%, 91%,0.85)',borderRadius:15,padding:5,paddingLeft:15,paddingRight:15,borderColor:'blue',borderWidth:5}}>
            <TextField sx={{color:'warning.main',width:1}} id="password" label="Enter Password" variant="standard" color="primary" type="password" onChange={(e)=>{setSecret(e.target.value)}}/>

          </div>



    <div className="row">
      <div className='enter-button-container'>
      <Button className='enter-button' type="submit">
        <div>Sign In</div>
        <ArrowForwardIcon fontSize='medium'></ArrowForwardIcon>
      </Button>
      </div>
      <div style={{margin:5}}></div>
      <Link href={'/forgot_password'} passHref>
        <div className='forgot-button-container'>
        
          <Button className='forgot-button'>
            Forgot Password?
            {/* <QuestionMarkIcon fontSize='small'></QuestionMarkIcon> */}
            <ArrowForwardIcon></ArrowForwardIcon>
          </Button>
        
        </div>
      </Link>
    </div>
        </form>
        <div className="scroll-option" style={{justifyContent:'space-around',backgroundColor:'black',width:'50%',
        marginLeft:'20%',padding:'2.5%',position:'fixed',top:'88vh',
        alignItems:'center',color:'white',flexDirection:"row"}}>
          <div>Scroll in the above box</div>
          <ArrowCircleDownIcon fontSize="medium" />
        </div>
      </div>
      
    </div>
  )
}

export default Auth

import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import logoImg from '../../public/logoproject.png'
import styles from './styles.module.scss'
import Link from 'next/link'
import { AuthContext } from '../contexts/AuthContext'
import { toast } from 'react-hot-toast'
import { canSSRGuest } from '../utils/canSSRGuest'
import { canSSRAuth } from '../utils/canSSRAuth'

import { FormEvent, useState, useContext } from 'react'

export default function Home() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)


  const { signIn } = useContext(AuthContext)

  async function handleLogin(e: FormEvent) {
    e.preventDefault();

    if (email === '' || password === '') {
      toast.error("Preencha todos os campos!!!")
      return;
    }

    //loading
    setLoading(true)

    let data = {
      email,
      password
    }

    await signIn(data)

    //termina loading
    setLoading(false)
  }

  return (
    <>
      <main className={styles.container}>

        <section className={styles.slogan}>
          <h1>A gestão do seu negócio é o que nos move.</h1>
        </section>

        <section className={styles.formData}>
          <Image src={logoImg} height={140} width={280} alt="logo" />
          <form onSubmit={handleLogin}>
            <input
              placeholder='Digite seu Email...'
              type={'email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              placeholder='Sua senha...'
              type={'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type={'submit'} disabled={loading ? true : false}>{loading ? 'Logando...' : 'Acessar'}</button>

          </form>

          <Link href='/signUp' legacyBehavior>
            <a>Não tem uma Conta? <strong style={{ color: '#00DFBF' }}>Crie uma agora mesmo!</strong></a>
          </Link>

        </section>

      </main>
    </>
  )
}

//rota publica
export const getServerSideProps = canSSRGuest(
  async (ctx) => {
    return {
      props: {}
    }
  }
)


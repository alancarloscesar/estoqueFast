
import Image from 'next/image'
import logoImg from '../../../public/logoproject.png'
import styles from './styles.module.scss'
import Link from 'next/link'

import { FormEvent, useState } from 'react'

export default function SignUp() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleUserAdd(e: FormEvent) {
        e.preventDefault();//para não dar refresh

        alert("opaa")

    }

    return (
        <>

            <main className={styles.container}>

                <section className={styles.slogan}>
                    <h1>Crie uma conta</h1>
                </section>

                <section className={styles.formData}>
                    <Image src={logoImg} height={140} width={280} alt="logo" />
                    <form onSubmit={handleUserAdd}>
                        <input
                            placeholder='Digite seu Nome...'
                            type={'text'}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
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

                        <button type='submit'>Cadastrar</button>
                    </form>

                    <Link href='/' legacyBehavior>
                        <a>Já tem uma conta? <strong style={{ color: '#00DFBF' }}>Faça seu login!</strong></a>
                    </Link>

                </section>

            </main>
        </>
    )
}

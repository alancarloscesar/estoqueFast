
import Image from 'next/image'
import logoImg from '../../../public/logoproject.png'
import styles from './styles.module.scss'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import { AuthContext } from '../../contexts/AuthContext'

import { FormEvent, useState, useContext } from 'react'

export default function SignUp() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const [loading, setLoading] = useState(false)

    const {signUp} = useContext(AuthContext)

    async function handleAddUser(e: FormEvent) {
        e.preventDefault();

        if (email === '' || password === '' || name === '') {
            toast.error("Preencha todos os campos!!!")
            return;
        }

        if (password !== passwordRepeat) {
            toast.loading("Você repetiu a senha incorretamente!!!")
            return;
        }

        //loading
        setLoading(true)

        let data = {
            email,
            password,
            name
        }

        await signUp(data)

        //termina loading
        setLoading(false)
    }

    return (
        <>

            <main className={styles.container}>

                <section className={styles.slogan}>
                    <h1>Crie a conta de um novo usuário.</h1>
                </section>

                <section className={styles.formData}>
                    <Image src={logoImg} height={140} width={280} alt="logo" />
                    <form onSubmit={handleAddUser}>
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

                        <input
                            placeholder='Repita a senha...'
                            type={'password'}
                            value={passwordRepeat}
                            onChange={(e) => setPasswordRepeat(e.target.value)}
                        />

                        <button type={'submit'} disabled={loading ? true : false}>{loading ? 'Aguarde...' : 'Cadastrar'}</button>

                    </form>

                    <Link href='/' legacyBehavior>
                        <a>Já tem uma conta? <strong style={{ color: '#00DFBF' }}>Faça seu login!</strong></a>
                    </Link>

                </section>

            </main>
        </>
    )
}

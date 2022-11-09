import styles from './styles.module.scss'
import Image from 'next/image'
import logoImg from '../../../public/logoproject.png'
import { FiZap, FiTruck, FiGrid, FiBriefcase, FiLayers, FiLogOut } from 'react-icons/fi'
import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

export default function Menu() {

    const { signOut } = useContext(AuthContext);

    return (
        <div className={styles.container}>
            <section className={styles.header}>
                <Image alt='img logo' width={280} height={150} src={logoImg} />
                <div></div>
            </section>

            <section className={styles.areaOptions}>
                <ul>
                    <li><Link href='/productEntry'><FiZap color='#fff' size={22} style={{ marginRight: '20%' }} />Dashboard</Link></li>
                    <li><Link href='/productEntry'><FiTruck color='#fff' size={22} style={{ marginRight: '20%' }} />Entrada de Produtos</Link></li>
                    <li><Link href='/productEntry'><FiGrid color='#fff' size={22} style={{ marginRight: '20%' }} />Categorias</Link></li>
                    <li><Link href='/productEntry'><FiLayers color='#fff' size={22} style={{ marginRight: '20%' }} />Tamanhos</Link></li>
                    <li><Link href='/productEntry'><FiBriefcase color='#fff' size={22} style={{ marginRight: '20%' }} />Produtos</Link></li>
                    <li onClick={() => signOut()}><Link href='#'><FiLogOut color='#fff' size={22} style={{ marginRight: '20%' }} />Sair</Link></li>
                </ul>
            </section>

        </div>
    )
}
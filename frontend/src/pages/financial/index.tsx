
import Menu from "../../components/Menu"
import styles from './style.module.scss'
import { canSSRAuth } from "../../utils/canSSRAuth"
import { useState, FormEvent, useEffect } from "react"
import { setupAPIClient } from "../../services/api"
import toast from "react-hot-toast"

export default function Financial() {

    return (
        <>
            <div className={styles.dividerPage}>

                <Menu />

                <main className={styles.container}>

                    <h2>Financeiro...</h2>
                    <h2>Em desenvolvimento...</h2>

                </main>
            </div>
        </>
    )
}

//rota privada
export const getServerSideProps = canSSRAuth(
    async (ctx) => {
        return {
            props: {}
        }
    }
)
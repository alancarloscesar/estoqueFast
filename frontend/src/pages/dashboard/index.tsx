import { canSSRAuth } from "../../utils/canSSRAuth"
import styles from './style.module.scss'
import Menu from "../../components/Menu"
import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { setupAPIClient } from "../../services/api"
import Mounths from "../../components/Charts/Mounths"


export default function Dashboard() {

    const { user } = useContext(AuthContext)
    const api = setupAPIClient();




    return (
        <>
            <div className={styles.dividerPage}>

                <Menu />
                <main className={styles.container}>
                    <section>
                        Meu Dashboard
                    </section>

                    <Mounths />

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
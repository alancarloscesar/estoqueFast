import { canSSRAuth } from "../../utils/canSSRAuth"
import styles from './style.module.scss'
import Menu from "../../components/Menu"
import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { setupAPIClient } from "../../services/api"
import Mounths from "../../components/Charts/Mounths"
import Hours from "../../components/Charts/Hours"
import Ranking from "../../components/Charts/Ranking"


export default function Dashboard() {

    const { user } = useContext(AuthContext)
    const api = setupAPIClient();




    return (
        <>
            <div className={styles.dividerPage}>

                <Menu />
                <main className={styles.container}>

                    <div className={styles.chartsArea}>
                        <Mounths />
                        <Hours />
                    </div>

                    <div className={styles.chartsAreaRanking}>
                        <Ranking />
                    </div>

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
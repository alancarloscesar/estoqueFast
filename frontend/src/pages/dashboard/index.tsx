import { canSSRAuth } from "../../utils/canSSRAuth"
import styles from './style.module.scss'
import Menu from "../../components/Menu"
import { useContext,useEffect } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { setupAPIClient } from "../../services/api"

export default function Dashboard() {

    const {user} = useContext(AuthContext)
    const api = setupAPIClient();

    //não funciona estudar sobre localstorage
    // useEffect(()=>{

    //         async function loadSizeCategory() {
    //             const response = await api.get('/me', {
    //                 params: {
    //                     user_id: Number(1)
    //                 }
    //             })
    //             console.log(response.data)
    //         }
        

        
    //     loadSizeCategory()
    // },[])

    return (
        <>
            <div className={styles.dividerPage}>

                <Menu />
                <main className={styles.container}>
                    <section>
                        Meu Dashboard
                    </section>
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
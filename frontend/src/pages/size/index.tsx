
import Menu from "../../components/Menu"
import styles from './style.module.scss'
import { canSSRAuth } from "../../utils/canSSRAuth"

export default function Size() {
    return (
        <>
            <div className={styles.dividerPage}>

                <Menu />
                <main className={styles.container}>
                    <section>
                        Tamanhossss
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
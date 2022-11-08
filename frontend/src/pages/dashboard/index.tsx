import { canSSRAuth } from "../../utils/canSSRAuth"

export default function Dashboard() {
    return (
        <div>
            <h1>Minha Dash</h1>
        </div>
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
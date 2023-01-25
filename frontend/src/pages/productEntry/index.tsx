
import Menu from "../../components/Menu"
import styles from './style.module.scss'
import { canSSRAuth } from "../../utils/canSSRAuth"
import { FormEvent, useState } from 'react'
import { api } from "../../services/apiClient"

interface ProductProps {
    id: number;
    name: string;
    color: string;
    amount: number;
    measure: string;
}

export default function ProductEntry() {

    const [search, setSearch] = useState('');
    const [skip, setSkip] = useState(0)
    const [take, settake] = useState(5)
    const [cont, setCont] = useState(1)


    const [dataProduct, setDataProduct] = useState<ProductProps[]>([])

    async function pagination() {
        const response = await api.get('/pagination', {
            params: {
                product: search,
                skip: skip,//salto
                take: take//result por page
            }
        })

        setDataProduct(response.data)

        return;
    }

    async function searchProduct(e: FormEvent) {
        e.preventDefault();

        pagination();

        return;
    }

    function takeAcitionNext() {

        const newTake = take + 5;
        const newSkip = skip + 5;

        settake(newTake);
        setSkip(newSkip);

        pagination();

        console.log('takeee: ', take);
        console.log('skip: ', skip);

        return;
    }

    function takeAcitionPrevious() {

        const newTake = take - 5;
        const newSkip = skip - 5;

        settake(newTake);
        setSkip(newSkip);

        pagination();

        console.log('takeee: ', take);
        console.log('skip: ', skip);

        return;
    }

    return (
        <>
            <div className={styles.dividerPage}>

                <Menu />
                <main className={styles.container}>
                    <section>
                        Entrada de produtos.
                    </section>

                    <form onSubmit={searchProduct}>
                        <input
                            type={"search"}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button type="submit" onClick={searchProduct}>Search</button>
                    </form>

                    <br></br>
                    <br></br>

                    <div>
                        <table border={1}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NOME</th>
                                    <th>COR</th>
                                    <th>ESTOQUE</th>
                                    <th>UNIDADE DE MEDIDA</th>
                                    <th>AÇÃO</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dataProduct.map((item, index) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.color}</td>
                                                <td>{item.amount}</td>
                                                <td>{item.measure}</td>
                                                <td><button>Editar</button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                        <br></br>
                        <br></br>
                        <button
                            onClick={takeAcitionPrevious}
                            style={{ marginRight: 50, marginLeft: 50 }}
                        > anterior </button>
                        <button onClick={takeAcitionNext}> proximo </button>
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
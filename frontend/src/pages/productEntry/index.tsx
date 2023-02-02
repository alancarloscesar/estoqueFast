
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
    size: {
        id: number;
        price: number;
        name: string;
    }
}

export default function ProductEntry() {

    const [search, setSearch] = useState('');
    const [skip, setSkip] = useState(0)
    const [take, settake] = useState(5)

    const [dataProduct, setDataProduct] = useState<ProductProps[]>([])
    const [dataRowTable, setdataRowTable] = useState<ProductProps>()

    //dados para serem alterados
    const [amountAfter, setAmountAfter] = useState('')
    const [priceAfter, setPriceAfter] = useState<Number>()

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

    function handleRowTable(item: ProductProps) {
        setdataRowTable(item)
    }

    const handleUpdateProductEntry = async (e: FormEvent) => {
        e.preventDefault();

        await api.put('/product/entry', {
            // params: {
                product_id: Number(dataRowTable?.id),
                size_id: Number(dataRowTable?.size.price),
            // },
            amount_new: Number(amountAfter),
            price_new: Number(priceAfter)
        }).then(() => {
            alert(`Atualizado com sucesso.`)
        }).catch((err) => {

            console.log(err.response.data.errr)
        })

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
                                    <th>TAMANHO</th>
                                    <th>PREÇO</th>
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
                                                <td>{item.size.name}</td>
                                                <td>{`R$ ${item.size.price}`}</td>
                                                <td><button onClick={() => handleRowTable(item)}>Editar</button></td>
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

                    <div>
                        <label>ID: </label>
                        <span>{dataRowTable?.id}</span>
                        <br />

                        <label>NOME: </label>
                        <span>{dataRowTable?.name}</span>
                        <br />

                        <label>COR: </label>
                        <span>{dataRowTable?.color}</span>
                        <br />

                        <label>ESTOQUE: </label>
                        <span>{dataRowTable?.amount}</span>
                        <br />

                        <label>UNIDADE DE MEDIDA: </label>
                        <span>{dataRowTable?.measure}</span>
                        <br />

                        <label>TAMANHO: </label>
                        <span>{dataRowTable?.size.name}</span>
                        <br />

                        <label>PREÇO: </label>
                        <span>{`R$ ${dataRowTable?.size.price}`}</span>
                        <br />
                    </div>

                    <div>
                        <h2>Aqui você atualize a entrada de produtos.</h2>
                        <form onSubmit={handleUpdateProductEntry}>
                            <label>Quantidade: </label>
                            <input
                                placeholder="Nova Quantidade..."
                                value={amountAfter}//aqui vai o value original
                                onChange={(e) => setAmountAfter(e.target.value)}
                                type={"number"}
                            />

                            <label>Preço: </label>
                            <input
                                placeholder="Novo Preço..."
                                value={Number(priceAfter)}//aqui vai o value original
                                onChange={(e) => setPriceAfter(Number(e.target.value))}
                                type={"number"}
                            />

                            <button type="submit">Atualizar</button>
                        </form>
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
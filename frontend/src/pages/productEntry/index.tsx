
import Menu from "../../components/Menu"
import styles from './style.module.scss'
import { canSSRAuth } from "../../utils/canSSRAuth"
import { FormEvent, useState } from 'react'
import { api } from "../../services/apiClient"
import { toast } from "react-hot-toast"
import { FiSearch, FiEdit, FiArrowLeft, FiArrowRight } from "react-icons/fi"

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
    const [priceAfter, setPriceAfter] = useState('')

    const [dataProductsVisible, setdataProductsVisible] = useState(false)

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
        setdataProductsVisible(true)
    }

    const handleUpdateProductEntry = async (e: FormEvent) => {
        e.preventDefault();

        if (amountAfter === '' || priceAfter === '') {
            toast.error('campos QUANTIDADE e PREÇO não podem ficar VAZIOS');
            return;
        }

        await api.put('/product/entry', {

            product_id: Number(dataRowTable?.id),
            size_id: Number(dataRowTable?.size.id),
            amount_new: Number(amountAfter),
            price_new: Number(priceAfter)

        }).then((res) => {
            toast.success(res.data.Updated);
            pagination();
        }).catch((err) => {
            console.log(err.response.data.errr)
        })
    }

    return (
        <>
            <div className={styles.dividerPage}>

                <Menu />
                <main className={styles.container}>
                    <section className={styles.searchArea}>
                        <p>
                            Entrada de produtos
                        </p>

                        <form onSubmit={searchProduct}>
                            <input
                                type={"search"}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Pesquise um produto..."
                            />
                            <button type="submit" onClick={searchProduct}>
                                <FiSearch size={25} color='#fff' />
                            </button>
                        </form>
                    </section>

                    <div className={styles.tableArea}>
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
                                                <td>
                                                    <button
                                                        onClick={() => handleRowTable(item)}
                                                        className={styles.btnEditTableRow}
                                                    >
                                                        <FiEdit size={25} color='#fff' />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                        <section className={styles.btnsPaginationPreviousNext}>

                            <button onClick={takeAcitionPrevious}>
                                <FiArrowLeft size={'2vw'} color='#fff' />
                            </button>

                            <button onClick={takeAcitionNext}>
                                <FiArrowRight size={'2vw'} color='#fff' />
                            </button>
                        </section>
                    </div>

                    {
                        dataProductsVisible && (

                            <div className={styles.datasProducts}>
                                <label>ID: </label>
                                <span>{dataRowTable?.id}</span>

                                <label>NOME: </label>
                                <span>{dataRowTable?.name}</span>

                                <label>COR: </label>
                                <span>{dataRowTable?.color}</span>

                                <label>ESTOQUE: </label>
                                <span>{dataRowTable?.amount}</span>

                                <label>UNIDADE DE MEDIDA: </label>
                                <span>{dataRowTable?.measure}</span>

                                <label>TAMANHO: </label>
                                <span>{dataRowTable?.size.name}</span>

                                <label>PREÇO: </label>
                                <span>{`R$ ${dataRowTable?.size.price}`}</span>
                            </div>
                        )
                    }


                    {
                        dataProductsVisible && (
                            <div className={styles.editDataProduct}>
                                <p>Entrada de produtos.</p>
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
                                        value={priceAfter}//aqui vai o value original
                                        onChange={(e) => setPriceAfter(e.target.value)}
                                        type={"number"}
                                    />

                                    <button type="submit">Atualizar</button>
                                </form>
                            </div>
                        )
                    }



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
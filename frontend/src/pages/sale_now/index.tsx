
import Menu from "../../components/Menu"
import styles from './style.module.scss'
import { canSSRAuth } from "../../utils/canSSRAuth"
import { FormEvent, useState } from 'react'
import { api } from "../../services/apiClient"
import { toast } from "react-hot-toast"
import { FiSearch, FiShoppingCart, FiArrowLeft, FiArrowRight, FiEye } from "react-icons/fi"
import Modal from "../../components/Modal"

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

export default function SaleNow() {

    const [search, setSearch] = useState('');
    const [skip, setSkip] = useState(0)
    const [take, settake] = useState(5)

    const [dataProduct, setDataProduct] = useState<ProductProps[]>([])
    const [dataRowTable, setdataRowTable] = useState<ProductProps>()

    //dados para serem alterados
    const [amountAfter, setAmountAfter] = useState('')
    const [priceAfter, setPriceAfter] = useState('')

    const [dataProductsVisible, setdataProductsVisible] = useState(false)

    const [selectPayment, setSelectPayment] = useState('')
    const [selectCard, setSelectCard] = useState('')
    const [selectInstallment, setSelectInstallment] = useState('')

    //modal
    const [visibleModal, setVisibleModal] = useState(false)

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

        return;
    }

    function takeAcitionPrevious() {

        const newTake = take - 5;
        const newSkip = skip - 5;

        settake(newTake);
        setSkip(newSkip);

        pagination();

        return;
    }

    function handleRowTable(item: ProductProps) {
        setdataRowTable(item)
        setdataProductsVisible(true)
    }

    function paymentCard() {
        console.log(selectPayment)
    }

    function handleModal(item: ProductProps) {
        setVisibleModal(true)
        setdataRowTable(item)
        console.log(visibleModal)
    }

    // Modal.setAppElement('#__next');

    return (
        <>
            <div className={styles.dividerPage}>

                <Menu />
                <main className={styles.container}>
                    <section className={styles.searchArea}>
                        <p>
                            Realizar Vendas
                        </p>

                        <form onSubmit={searchProduct}>
                            <input
                                type={"search"}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Pesquise um produto..."
                            />
                            <button type="submit" onClick={searchProduct} title='Pesquisar produto'>
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
                                                    <div className={styles.btnsActionTable}>
                                                        <button
                                                            onClick={() => handleRowTable(item)}
                                                            className={styles.btnEditTableRow}
                                                            title='Realizar venda'
                                                        >
                                                            <FiShoppingCart size={'50%'} color='#fff' />
                                                        </button>

                                                        <button
                                                            onClick={() => handleModal(item)}
                                                            className={styles.btnEditTableRow}
                                                            title='Ver detalhes'
                                                        >
                                                            <FiEye size={'50%'} color='#fff' />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                        <section className={styles.btnsPaginationPreviousNext}>

                            <button onClick={takeAcitionPrevious} title='Anterior'>
                                <FiArrowLeft size={'2vw'} color='#fff' />
                            </button>

                            <button onClick={takeAcitionNext} title='Próximo'>
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
                                {/* <form onSubmit={handleUpdateProductEntry}> */}
                                <form>
                                    <label>Quantidade: </label>
                                    <input
                                        placeholder="Nova Quantidade..."
                                        value={amountAfter}//aqui vai o value original
                                        onChange={(e) => setAmountAfter(e.target.value)}
                                        type={"number"}
                                    />

                                    <label>Pagamento: </label>
                                    <select name="" id=""
                                        onChange={e => setSelectPayment(e.target.value)}
                                    >
                                        <option value="dinheiro">Dinheiro</option>
                                        <option value="cartao" onClick={paymentCard}>Cartão</option>
                                        <option value="pix">Pix</option>
                                    </select>

                                    {
                                        selectPayment === 'cartao' && (
                                            <select name="" id=""
                                                onChange={e => setSelectCard(e.target.value)}
                                            >
                                                <option value="debito">Débito</option>
                                                <option value="credito">Crédito</option>
                                            </select>
                                        )
                                    }

                                    {
                                        selectCard === 'credito' && (
                                            <select name="" id=""
                                                onChange={e => setSelectInstallment(e.target.value)}
                                            >
                                                <option value="1">1x</option>
                                                <option value="2">2x</option>
                                                <option value="3">3x</option>
                                                <option value="4">4x</option>
                                                <option value="5">5x</option>
                                                <option value="6">6x</option>
                                                <option value="7">7x</option>
                                                <option value="8">8x</option>
                                                <option value="9">9x</option>
                                                <option value="10">10x</option>
                                                <option value="11">11x</option>
                                                <option value="12">12x</option>
                                            </select>
                                        )
                                    }

                                    <button type="submit">Finalizar</button>
                                </form>


                            </div>
                        )
                    }

                    <p className={styles.priceTotal}>50,00 R$</p>


                    {
                        // modal abrindo
                        visibleModal && (

                            <Modal item={dataRowTable} />
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
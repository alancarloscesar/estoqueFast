
import { useState, useEffect, FormEvent } from "react"
import Menu from "../../components/Menu"
import styles from './style.module.scss'
import { canSSRAuth } from "../../utils/canSSRAuth"
import Switch from "react-switch";
import { api } from "../../services/apiClient";
import { toast } from "react-hot-toast";

interface CategoryProps {
    name: string;
    id: number;
}
interface SizeProps {
    name: string;
    id: number;
    price: number;
}

export default function Products() {

    const [name, setName] = useState('')
    const [qtd, setQtd] = useState('')
    const [cor, setCor] = useState('')
    const [uni_medida, setUniMedida] = useState('')
    const [checked, setChecked] = useState(true)

    const [category, setCategory] = useState<CategoryProps[]>([])
    const [categorySelected, setCategorySelected] = useState('0')

    const [size, setSize] = useState<SizeProps[]>([])
    const [sizeSelected, setSizeSelected] = useState('0')

    useEffect(() => {
        async function loadCategories() {
            const response = await api.get('/loadCategory');
            setCategory(response.data)
        }
        loadCategories();
    }, [])

    async function loadSize() {
        try {
            const response = await api.get('/sizes/load', {
                params: {
                    category_id: Number(category[Number(categorySelected)]?.id)
                }
            })

            setSize(response.data)
        } catch (error) {
            console.log('Erro ao buscar tamanhos...', error)
        }

    }

    useEffect(() => {
        loadSize();
    })

    //selecionando categoria
    function handleChangeCategory(event: React.ChangeEvent<HTMLSelectElement>) {
        setCategorySelected(event.target.value)
    }

    //selecionando size
    function handleChangeSize(event: React.ChangeEvent<HTMLSelectElement>) {
        setSizeSelected(event.target.value)
    }


    function handleChange() {

        setChecked(!checked)
    }

    async function handleAddProduct(e: FormEvent) {
        e.preventDefault();

        const response = await api.post('/product', {
            name: name.toUpperCase(),
            amount: checked ? qtd : 'null',
            color: cor.toUpperCase(),
            stock: checked,
            measure: uni_medida.toUpperCase(),
            category_id: category[Number(categorySelected)]?.id,
            size_id: size[Number(sizeSelected)]?.id
        }).then(() => {
            toast.success('Produto cadastrado com sucesso.')

            setName('');
            setQtd('');
            setCor('');
            setUniMedida('');
        }).catch((error) => {
            toast.error(error.response.data.errr)
            return;
        })
    }

    return (
        <>
            <div className={styles.dividerPage}>

                <Menu />
                <main className={styles.container}>
                    <h1>
                        Cadastro de produtos
                    </h1>

                    <form onSubmit={handleAddProduct}>
                        <section className={styles.inputRowOne}>
                            <section className={styles.inputName}>
                                <label>Nome:</label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Nome..."

                                />
                            </section>

                            <section className={styles.inputColor}>
                                <label>Cor:</label>
                                <input
                                    value={cor}
                                    onChange={(e) => setCor(e.target.value)}
                                    placeholder="Cor..."

                                />
                            </section>
                        </section>

                        <section className={styles.inputRowTwo}>
                            <section className={styles.inputQtd}>
                                <label>Qtd:</label>
                                <input
                                    disabled={checked ? false : true}
                                    style={{ cursor: checked ? "text" : "not-allowed" }}
                                    value={qtd}
                                    onChange={(e) => setQtd(e.target.value)}
                                    placeholder="Quantidade em estoque..."
                                    type={"number"}
                                />
                            </section>

                            <section className={styles.inputMeasure}>
                                <label>Unidade de medida:</label>
                                <input
                                    value={uni_medida}
                                    onChange={(e) => setUniMedida(e.target.value)}
                                    placeholder="Pacote, Kg..."

                                />
                            </section>

                            <label className={styles.switchArea} >
                                <span style={{ fontWeight: "bold" }}>Estoque?</span>
                                <Switch
                                    onChange={handleChange}
                                    checked={checked}
                                    onColor={'#00DFBF'}
                                    borderRadius={1}
                                />
                            </label>

                        </section>

                        <hr />

                        <section className={styles.selects}>
                            <label>Selecione a categoria e tamanho:</label>
                            <section className={styles.selectsGroup}>
                                <select
                                    value={categorySelected}
                                    onChange={handleChangeCategory}
                                    className={styles.inputsSize}>
                                    {
                                        category.map((item, index) => {
                                            return (
                                                <option key={item.id} value={index}>
                                                    {item.name}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                                <select
                                    value={sizeSelected} onChange={handleChangeSize}
                                    className={styles.inputsSize}>
                                    {
                                        size.map((item, index) => {
                                            return (
                                                <option key={item.id} value={index}>
                                                    {item.name}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </section>
                        </section>


                        <div className={styles.ButtonArea}>
                            <button type={"submit"} className={styles.inputs}>Cadastrar</button>
                        </div>
                    </form>
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

import Menu from "../../components/Menu"
import styles from './style.module.scss'
import { canSSRAuth } from "../../utils/canSSRAuth"
import { useState, FormEvent, useEffect } from "react"
import { setupAPIClient } from "../../services/api"
import toast from "react-hot-toast"


type CategorysProps = {
    id: number;
    name: string
}

export default function Category() {

    const [category, setCategory] = useState('')
    const [loadCat, setLoadCat] = useState<CategorysProps[]>([]);

    const [price, setPrice] = useState('')
    const [size, setSize] = useState('')
    const [categorySeleted, setCategorySelected] = useState()

    const api = setupAPIClient();

    useEffect(() => {
        async function loadCategory() {
            const response = await api.get('/loadCategory')

            setLoadCat(response.data)
        }
        loadCategory();
    }, [api])

    async function handleAddCategory(e: FormEvent) {
        e.preventDefault();

        try {
            await api.post('/category', {
                name: category
            })

            toast.success("Categoria cadastrada!")
            setCategory("")
        } catch (error) {
            console.log("Erro ao cadastrar categoria: " + error)
        }
    }

    async function handleAddSize(e: FormEvent) {
        e.preventDefault();

        console.log(loadCat)
        console.log(`sleecioandaaa - ${categorySeleted}`)
        console.log(`cat - ${loadCat[Number(categorySeleted)].name}`)

        try {
            await api.post('/size', {

                name: size,
                price: price,
                category_id: loadCat[Number(categorySeleted)]?.id

            })
            toast.success("Tamanho cadastrado com sucesso!")
            setPrice('');
            setSize('')
        } catch (error) {
            console.log('Erro ao cadastrar tamanho.', error)
        }



    }

    //selecionando categoria
    function handleChangeCategory(event: React.ChangeEvent<HTMLSelectElement>) {
        setCategorySelected(event.target.value)
    }

    return (
        <>
            <div className={styles.dividerPage}>

                <Menu />

                <main className={styles.container}>

                    <section className={styles.areaCategory}>
                        <h2>Nova Categoria</h2>
                        <hr />
                        <form onSubmit={handleAddCategory}>
                            <input
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                placeholder="Categoria..."
                                className={styles.inputs}
                            />

                            <button type={"submit"} className={styles.inputs}>Cadastrar</button>
                        </form>
                    </section>

                    <section className={styles.areaCategory}>
                        <h2 className={styles.h2Size}>Novo Tamanho</h2>
                        <hr />

                        <form onSubmit={handleAddSize} className={styles.formSize}>

                            <select value={categorySeleted} onChange={handleChangeCategory}
                                className={styles.inputsSize}>

                                {
                                    loadCat.map((item, index) => {
                                        return (
                                            <option key={item.id} value={index}>
                                                {item.name}
                                            </option>
                                        )
                                    })
                                }
                            </select>

                            <input type="text"
                                placeholder="Ex. Kg, pacote..."
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                                className={styles.inputsSize}
                            />

                            <input type="number"
                                placeholder="preço... Ex. 25"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className={styles.inputsSize}
                            />

                            <button type={"submit"} className={styles.inputsSize}>Cadastrar</button>
                        </form>
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
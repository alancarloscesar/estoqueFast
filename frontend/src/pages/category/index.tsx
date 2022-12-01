
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

        console.log(typeof loadCat)
        console.log(loadCat)


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
                            />

                            <button type={"submit"}>Cadastrar</button>
                        </form>
                    </section>

                    <hr />

                    <section className={styles.areaCategory}>
                        <form onSubmit={handleAddSize}>
                            <h2>Novo Tamanho</h2>
                            <hr />


                            <select /*value={categorySelected} onChange={handleChangeCategory} onClick={loadCategory}*/>
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
                            />

                            <input type="text"
                                placeholder="Ex. 25"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />

                            <button type={"submit"}>Cadastrar</button>
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
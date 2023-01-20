
import { useState, useEffect } from "react"
import Menu from "../../components/Menu"
import styles from './style.module.scss'
import { canSSRAuth } from "../../utils/canSSRAuth"


export default function Products() {

    const [name, setName] = useState('')
    const [qtd, setQtd] = useState('')
    const [cor, setCor] = useState('')
    const [uni_medida, setUniMedida] = useState('')

    return (
        <>
            <div className={styles.dividerPage}>

                <Menu />
                <main className={styles.container}>
                    <h1>
                        Cadastro de produtos
                    </h1>

                    <form>
                        <section className={styles.inputRowOne}>
                            <section className={styles.inputName}>
                                <label>Nome:</label>
                                <input
                                    // value={category}
                                    // onChange={(e) => setCategory(e.target.value)}
                                    placeholder="Nome..."

                                />
                            </section>

                            <section className={styles.inputColor}>
                                <label>Cor:</label>
                                <input
                                    // value={category}
                                    // onChange={(e) => setCategory(e.target.value)}
                                    placeholder="Cor..."

                                />
                            </section>
                        </section>

                        <section className={styles.inputRowTwo}>
                            <section className={styles.inputQtd}>
                                <label>Qtd:</label>
                                <input
                                    // value={category}
                                    // onChange={(e) => setCategory(e.target.value)}
                                    placeholder="Quantidade atual em estoque..."

                                />
                            </section>

                            <section className={styles.inputMeasure}>
                                <label>Unidade de medida:</label>
                                <input
                                    // value={category}
                                    // onChange={(e) => setCategory(e.target.value)}
                                    placeholder="Pacote, Kg..."

                                />
                            </section>

                            <input
                                // value={category}
                                // onChange={(e) => setCategory(e.target.value)}
                                placeholder="estoque sim ou não?..."
                                className={styles.inputs}
                                style={{ width: '22%', backgroundColor: '#ff0' }}
                            />

                        </section>

                        <hr/>

                        <section className={styles.selects}>
                            <label>Selecione a categoria e tamanho:</label>
                            <section className={styles.selectsGroup}>
                                <select
                                    // value={categorySeleted} onChange={handleChangeCategory}
                                    className={styles.inputsSize}>
                                    <option value="">categoria 1</option>
                                    <option value="">categoria 2</option>
                                    {/* {
                                        loadCat.map((item, index) => {
                                            return (
                                                <option key={item.id} value={index}>
                                                    {item.name}
                                                </option>
                                            )
                                        })
                                    } */}
                                </select>
                                <select
                                    // value={categorySeleted} onChange={handleChangeCategory}
                                    className={styles.inputsSize}>
                                    <option value="">tamanho 1</option>
                                    <option value="">tamanho 2</option>
                                    {/* {
                                        loadCat.map((item, index) => {
                                            return (
                                                <option key={item.id} value={index}>
                                                    {item.name}
                                                </option>
                                            )
                                        })
                                    } */}
                                </select>
                            </section>
                        </section>


                        <button type={"submit"} className={styles.inputs}>Cadastrar</button>
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
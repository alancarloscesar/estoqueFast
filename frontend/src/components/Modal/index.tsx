import { useState } from "react";
import ReactModal from "react-modal";
import styles from './styles.module.scss'

export default function Modal() {

    const [openModal, setOpenModal] = useState(true)

    //modal
    function openModalBoo() {
        setOpenModal(true)
    }

    function closeModalBoo() {
        setOpenModal(false)
    }

    const customStylesModal = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };


    // Modal.setAppElement('#__next');

    return (
        <>
            <ReactModal
                isOpen={openModal}
                onAfterOpen={() => console.log(`depois de abrir o modal....`)}
                onRequestClose={closeModalBoo}
                style={customStylesModal}
                contentLabel="Example ReactModal">

                <section className={styles.titleModal}>
                    <h1>Detalhes do produto</h1>
                    <button onClick={closeModalBoo}>
                        Fechar
                    </button>
                </section>

                <div className={styles.bodyModal}>

                    <div>
                        <section>
                            <label>ID: </label>
                            <strong>01</strong>
                        </section>

                        <section>
                            <label>NOME: </label>
                            <strong>Sacola</strong>
                        </section>
                    </div>

                    <div>
                        <section>
                            <label>COR: </label>
                            <strong>Verde</strong>
                        </section>

                        <section>
                            <label>ESTOQUE: </label>
                            <strong>500</strong>
                        </section>
                    </div>

                    <div>
                        <section>
                            <label>UNIDADE DE MEDIDA: </label>
                            <strong>Kg</strong>
                        </section>

                        <section>
                            <label>TAMANHO: </label>
                            <strong>P</strong>
                        </section>
                    </div>

                    <div>
                        <label>PREÇO: </label>
                        <strong>{`R$ 50`}</strong>
                    </div>
                </div>


            </ReactModal>

            {/* <h1>JFSLDJFLÇSDKJFLKSDJFLKSDJFÇLSKDJFÇLKDSJ</h1> */}
        </>
    )
}
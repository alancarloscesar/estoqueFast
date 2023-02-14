import { useState, useEffect } from "react";
import ReactModal from "react-modal";
import styles from './styles.module.scss'
import { FiXCircle } from 'react-icons/fi'

interface productProps {
    item: {
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
}

export default function Modal(props: productProps) {

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
            transform: 'translate(-50%, -50%)'
        },
    };

    function teste() {
        console.log(`###########`)
        console.log(props.item.name)
    }

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
                    <p>Detalhes do produto</p>
                    <button onClick={closeModalBoo} title='Fechar detalhes'>
                        <FiXCircle size={40} color={'#acacac'} />
                    </button>
                </section>

                <div className={styles.bodyModal}>

                    <div>
                        <section>
                            <label>ID: </label>
                            <strong>{props.item.id}</strong>
                            <strong></strong>
                        </section>

                        <section>
                            <label>NOME: </label>
                            <strong>{props.item.name}</strong>
                        </section>
                    </div>

                    <div>
                        <section>
                            <label>COR: </label>
                            <strong>{props.item.color}</strong>
                        </section>

                        <section>
                            <label>ESTOQUE: </label>
                            <strong>{props.item.amount}</strong>
                        </section>
                    </div>

                    <div>
                        <section>
                            <label>UNIDADE DE MEDIDA: </label>
                            <strong>{props.item.measure}</strong>
                        </section>

                        <section>
                            <label>TAMANHO: </label>
                            <strong>{props.item.size.name}</strong>
                        </section>
                    </div>

                    <div>
                        <label>PREÇO: </label>
                        <strong onClick={teste}>{`R$ ${props.item.size.price}`}</strong>
                    </div>
                </div>


            </ReactModal>

        </>
    )
}
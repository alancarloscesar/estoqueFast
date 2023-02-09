import { useState } from "react";
import ReactModal from "react-modal";

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

                <h1>Detalhes do produto</h1>

                <div>
                    <label>ID: </label>
                    <span>01</span>

                    <label>NOME: </label>
                    <span>Sacola</span>

                    <label>COR: </label>
                    <span>Verde</span>

                    <label>ESTOQUE: </label>
                    <span>500</span>

                    <label>UNIDADE DE MEDIDA: </label>
                    <span>Kg</span>

                    <label>TAMANHO: </label>
                    <span>P</span>

                    <label>PREÇO: </label>
                    <span>{`R$ 50`}</span>
                </div>

                <button onClick={closeModalBoo}>
                    Fechar
                </button>

            </ReactModal>

            {/* <h1>JFSLDJFLÇSDKJFLKSDJFLKSDJFÇLSKDJFÇLKDSJ</h1> */}
        </>
    )
}
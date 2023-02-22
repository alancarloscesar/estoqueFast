import styles from "./styles.module.scss"
import { api } from "../../../services/apiClient";
import { useEffect, useState } from "react";
import { getHours, format } from "date-fns"


//erro no next - config que funciona
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

interface propsProd {
    id: number;
    product: {
        name: string
    }
}

export default function Ranking() {

    const [top, setTop] = useState<propsProd[]>([])
    const [top2, setTop2] = useState([])
    const [top3, setTop3] = useState([])

    useEffect(() => {

        async function loadRanking() {
            await api.get('/sales/ranking')
                .then((response) => {
                    setTop(response.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        loadRanking()

    }, [])



    const options = {
        series: [500, 700, 400, 450],
        labels: ['Sacola Extra', 'Sacola Alça fina', 'Sacola Premium'],

        chartOptions: {
            labels: ['Sacola Extra', 'Sacola Alça fina', 'Sacola Premium']
        }
    }

    return (
        <>

            {/* <section className={styles.chart}> */}
            <ApexCharts
                options={options}
                series={options.series}
                type="donut"
                width={'100%'}
                height={'100%'}
                className={styles.chart}
            />
            {/* </section> */}

            {

                top.map((item, index) => {
                    return (
                        <span key={item.id}>
                            {item.product.name}
                        </span>
                    )
                })

                //OK JA ESTA TRAZENDO OS DADOS, MAS AINDA PRECISA TRAZER JUNTO AOS DADOS A 
                //QTD DE VENDAS E VALOR VENDIDO E MONTAR O HTML E CSS DO RANKING
                // BUSCAR INSPIRACAO NO CANVA
            }
        </>
    )
}
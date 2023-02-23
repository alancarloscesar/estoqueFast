import styles from "./styles.module.scss"
import { api } from "../../../services/apiClient";
import { useEffect, useState } from "react";
import { getHours, format } from "date-fns"


//erro no next - config que funciona
import dynamic from 'next/dynamic';
import ptBR from "date-fns/locale/pt-BR";
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

interface propsProd {
    id: number;
    saleCont: number;
    product: {
        name: string
    }
}

export default function Ranking() {

    const [podium, setPodium] = useState<propsProd[]>([])


    useEffect(() => {

        async function loadRanking() {
            await api.get('/sales/ranking')
                .then((response) => {
                    setPodium(response.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        loadRanking()

    }, [])



    const options = {
        series: [Number(podium[0]?.saleCont), Number(podium[1]?.saleCont), Number(podium[2]?.saleCont)],
        labels: [`${podium[0]?.product?.name}`, `${podium[1]?.product?.name}`, `${podium[2]?.product?.name}`],
        colors: ['#feb019', '#8d99ae', '#d89d6a'],

        chartOptions: {
            labels: [`${podium[0]?.product?.name}`, `${podium[1]?.product?.name}`, `${podium[2]?.product?.name}`]
        }
    }

    return (
        <>

            <div className={styles.areaRankingGeral}>

                <div className={styles.areaRankingContent}>
                    <p>TOP 3 - {format(new Date(), 'MMMM', { locale: ptBR }).toString().toLocaleUpperCase()}</p>

                    <div className={styles.areaRankingTopTree}>

                        <div>
                            <strong>{podium[1]?.product?.name}</strong>
                            <section className={styles.rankingTop2}>2</section>
                            <p>Vendas: {podium[1]?.saleCont}</p>
                        </div>

                        <div>
                            <strong>{podium[0]?.product?.name}</strong>
                            <section className={styles.rankingTop1}>1</section>
                            <p>Vendas: {podium[0]?.saleCont}</p>
                        </div>

                        <div>
                            <strong>{podium[2]?.product?.name}</strong>
                            <section className={styles.rankingTop3}>3</section>
                            <p>Vendas: {podium[2]?.saleCont}</p>
                        </div>

                    </div>
                </div>

                <div className={styles.chart}>
                    <ApexCharts
                        options={options}
                        series={options.series}
                        type="donut"
                        height={'100%'}
                        width={'100%'}
                        className={styles.chartPie}
                    />
                </div>

            </div>


            {/* //OK JA ESTA TRAZENDO OS DADOS, MAS AINDA PRECISA TRAZER JUNTO AOS DADOS A 
                //QTD DE VENDAS E VALOR VENDIDO */}
           

        </>
    )
}
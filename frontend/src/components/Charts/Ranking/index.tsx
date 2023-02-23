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
    product: {
        name: string
    }
}

export default function Ranking() {

    const [top, setTop] = useState<propsProd[]>([])


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
        series: [900, 700, 400],
        labels: [`${top[0]?.product?.name}`, `${top[1]?.product?.name}`, `${top[2]?.product?.name}`],
        colors: ['#feb019', '#8d99ae', '#d89d6a'],

        chartOptions: {
            labels: [`${top[0]?.product?.name}`, `${top[1]?.product?.name}`, `${top[2]?.product?.name}`]
        }
    }

    return (
        <>

            <div className={styles.areaRankingGeral}>

                <div className={styles.areaRankingContent}>
                    <p>TOP 3 - {format(new Date(), 'MMMM', { locale: ptBR }).toString().toLocaleUpperCase()}</p>

                    <div className={styles.areaRankingTopTree}>

                        <div>
                            <p>{top[1]?.product?.name}</p>
                            <p>7213</p>
                            <section className={styles.rankingTop2}>2</section>
                        </div>

                        <div>
                            <p>{top[0]?.product?.name}</p>
                            <section className={styles.rankingTop1}>1</section>
                        </div>

                        <div>
                            <p>{top[2]?.product?.name}</p>
                            <section className={styles.rankingTop3}>3</section>
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


            //OK JA ESTA TRAZENDO OS DADOS, MAS AINDA PRECISA TRAZER JUNTO AOS DADOS A 
                //QTD DE VENDAS E VALOR VENDIDO
           

        </>
    )
}
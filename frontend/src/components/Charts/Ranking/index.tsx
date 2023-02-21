import styles from "./styles.module.scss"
import { api } from "../../../services/apiClient";
import { useEffect, useState } from "react";
import { getHours, format } from "date-fns"


//erro no next - config que funciona
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });


export default function Ranking() {

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
        </>
    )
}
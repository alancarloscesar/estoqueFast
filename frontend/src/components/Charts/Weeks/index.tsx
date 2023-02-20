import styles from "./styles.module.scss"
import { api } from "../../../services/apiClient";
import { useEffect, useState } from "react";


//erro no next - config que funciona
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });


export default function Weeks() {

    const options = {
        series: [{
            name: 'Total Vendido',
            data: [400, 130, 848, 470, 40, 480, 890]
        }],

        plotOptions: {
            bar: {
                borderRadius: 7,
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
        },
        colors: ['#4a148c'],
        grid: {
            show: false
        },
    };

    return (
        <>

            <ApexCharts
                options={options}
                series={options.series}
                type="bar"
                width={'100%'}
                height={'100%'}
                className={styles.containerChart}
            />

        </>
    )
}
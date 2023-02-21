import styles from "./styles.module.scss"
import { api } from "../../../services/apiClient";
import { useEffect, useState } from "react";


//erro no next - config que funciona
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });


export default function Hours() {

    const options = {
        series: [{
            name: 'Total Vendido',
            data: [400, 130, 848, 470, 40, 480, 890, 400, 130, 848, 470]
        }],

        plotOptions: {
            bar: {
                borderRadius: 2,
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h']
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
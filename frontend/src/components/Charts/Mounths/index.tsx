import styles from "./styles.module.scss"

//erro no next - config que funciona
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });


export default function Mounths() {

    const options = {
        series: [{
            name: 'Valor Vendido',
            data: [30, 90, 45, 20, 4, 120],
        }],
        xaxis: {
            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun']
        },
        colors: ['#00DFBF'],
        grid: {
            show: false
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
                
            },

        }
    }

    return (
        <>

            <ApexCharts
                options={options}
                series={options.series}
                type="bar"
                width={'100%'}
                height={'30%'}
                className={styles.containerChart}
            />
        </>
    )
}
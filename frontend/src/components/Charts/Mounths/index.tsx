import styles from "./styles.module.scss"
import { api } from "../../../services/apiClient";
import { useEffect, useState } from "react";

//erro no next - config que funciona
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });


export default function Mounths() {

    const [monthOne, setmonthOne] = useState('')
    const [monthTwo, setmonthTwo] = useState('')
    const [monthTree, setmonthTree] = useState('')
    const [monthFour, setmonthFour] = useState('')
    const [monthFive, setmonthFive] = useState('')
    const [monthSix, setmonthSix] = useState('')

    useEffect(() => {

        async function loadPriceMonthOne() {
            await api.get('/sales/mounths', {
                params: {
                    month: "janeiro",
                }
            }).then((response) => {
                setmonthOne(response.data.valorVendido)
            }).catch((error) => {
                console.log(error)
            })
        }

        async function loadPriceMonthTwo() {
            await api.get('/sales/mounths', {
                params: {
                    month: "fevereiro",
                }
            }).then((response) => {
                setmonthTwo(response.data.valorVendido)
            }).catch((error) => {
                console.log(error)
            })
        }

        async function loadPriceMonthTree() {
            await api.get('/sales/mounths', {
                params: {
                    month: "marco",
                }
            }).then((response) => {
                setmonthTree(response.data.valorVendido)
            }).catch((error) => {
                console.log(error)
            })
        }

        async function loadPriceMonthFour() {
            await api.get('/sales/mounths', {
                params: {
                    month: "abril",
                }
            }).then((response) => {
                setmonthFour(response.data.valorVendido)
            }).catch((error) => {
                console.log(error)
            })
        }

        async function loadPriceMonthFive() {
            await api.get('/sales/mounths', {
                params: {
                    month: "maio",
                }
            }).then((response) => {
                setmonthFive(response.data.valorVendido)
            }).catch((error) => {
                console.log(error)
            })
        }

        async function loadPriceMonthSix() {
            await api.get('/sales/mounths', {
                params: {
                    month: "junho",
                }
            }).then((response) => {
                setmonthSix(response.data.valorVendido)
            }).catch((error) => {
                console.log(error)
            })
        }


        loadPriceMonthOne();
        loadPriceMonthTwo();
        loadPriceMonthTree();
        loadPriceMonthFour();
        loadPriceMonthFive();
        loadPriceMonthSix();
    }, [])


    const options = {
        series: [{
            name: 'Valor Vendido',
            data: [Number(monthOne), Number(monthTwo), Number(monthTree),
            Number(monthFour), Number(monthFive), Number(monthSix)],
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
                borderRadius: 5,
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
                height={'100%'}
                className={styles.containerChart}
            />

        </>
    )
}
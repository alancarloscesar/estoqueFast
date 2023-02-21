import styles from "./styles.module.scss"
import { api } from "../../../services/apiClient";
import { useEffect, useState } from "react";
import { getHours, format } from "date-fns"


//erro no next - config que funciona
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });


export default function Hours() {

    const [hourOne, setHourOne] = useState(0)
    const [hourTwo, setHourTwo] = useState(0)
    const [hourTree, setHourTree] = useState(0)
    const [hourFour, setHourFour] = useState(0)
    const [hourFive, setHourFive] = useState(0)
    const [hourSix, setHourSix] = useState(0)
    const [hourSeven, setHourseven] = useState(0)
    const [houreigth, setHourEigth] = useState(0)
    const [hourNine, setHourNine] = useState(0)
    const [hourten, setHourTen] = useState(0)
    const [hourEleven, setHourEleven] = useState(0)

    useEffect(() => {

        async function fhourOne() {
            await api.get('/sales/weeks', {
                params: {
                    initialDate: new Date(format(new Date(), 'yyyy-MM-dd')),
                    finalDate: new Date(format(new Date(), 'yyyy-MM-dd')),
                    hourAtual: '08'
                }
            }).then((response) => {
                setHourOne(response.data.value)
            }).catch((err) => {
                console.log(err)
            })
        }

        async function fhourTwo() {
            await api.get('/sales/weeks', {
                params: {
                    initialDate: new Date(format(new Date(), 'yyyy-MM-dd')).toString(),
                    finalDate: new Date(format(new Date(), 'yyyy-MM-dd')).toString(),
                    hourAtual: '09'
                }
            }).then((response) => {
                setHourTwo(response.data.value)
            }).catch((err) => {
                console.log(err)
            })
        }

        async function fhourTree() {
            await api.get('/sales/weeks', {
                params: {
                    initialDate: new Date(format(new Date(), 'yyyy-MM-dd')),
                    finalDate: new Date(format(new Date(), 'yyyy-MM-dd')),
                    hourAtual: '10'
                }
            }).then((response) => {
                setHourTree(response.data.value)
            }).catch((err) => {
                console.log(err)
            })
        }

        async function fhourFour() {
            await api.get('/sales/weeks', {
                params: {
                    initialDate: new Date(format(new Date(), 'yyyy-MM-dd')),
                    finalDate: new Date(format(new Date(), 'yyyy-MM-dd')),
                    hourAtual: '11'
                }
            }).then((response) => {
                setHourFour(response.data.value)
            }).catch((err) => {
                console.log(err)
            })
        }

        async function fhourFive() {
            await api.get('/sales/weeks', {
                params: {
                    initialDate: new Date(format(new Date(), 'yyyy-MM-dd')),
                    finalDate: new Date(format(new Date(), 'yyyy-MM-dd')),
                    hourAtual: '12'
                }
            }).then((response) => {
                setHourFive(response.data.value)
            }).catch((err) => {
                console.log(err)
            })
        }

        async function fhourSix() {
            await api.get('/sales/weeks', {
                params: {
                    initialDate: new Date(format(new Date(), 'yyyy-MM-dd')),
                    finalDate: new Date(format(new Date(), 'yyyy-MM-dd')),
                    hourAtual: '13'
                }
            }).then((response) => {
                setHourSix(response.data.value)
            }).catch((err) => {
                console.log(err)
            })
        }

        async function fhourSeven() {
            await api.get('/sales/weeks', {
                params: {
                    initialDate: new Date(format(new Date(), 'yyyy-MM-dd')),
                    finalDate: new Date(format(new Date(), 'yyyy-MM-dd')),
                    hourAtual: '14'
                }
            }).then((response) => {
                setHourseven(response.data.value)
            }).catch((err) => {
                console.log(err)
            })
        }

        async function fhourEigth() {
            await api.get('/sales/weeks', {
                params: {
                    initialDate: new Date(format(new Date(), 'yyyy-MM-dd')),
                    finalDate: new Date(format(new Date(), 'yyyy-MM-dd')),
                    hourAtual: '15'
                }
            }).then((response) => {
                setHourEigth(response.data.value)
            }).catch((err) => {
                console.log(err)
            })
        }

        async function fhourNine() {
            await api.get('/sales/weeks', {
                params: {
                    initialDate: new Date(format(new Date(), 'yyyy-MM-dd')),
                    finalDate: new Date(format(new Date(), 'yyyy-MM-dd')),
                    hourAtual: '16'
                }
            }).then((response) => {
                setHourNine(response.data.value)
            }).catch((err) => {
                console.log(err)
            })
        }

        async function fhourTen() {
            await api.get('/sales/weeks', {
                params: {
                    initialDate: new Date(format(new Date(), 'yyyy-MM-dd')),
                    finalDate: new Date(format(new Date(), 'yyyy-MM-dd')),
                    hourAtual: '17'
                }
            }).then((response) => {
                setHourTen(response.data.value)
            }).catch((err) => {
                console.log(err)
            })
        }

        async function fhourEleven() {
            await api.get('/sales/weeks', {
                params: {
                    initialDate: new Date(format(new Date(), 'yyyy-MM-dd')),
                    finalDate: new Date(format(new Date(), 'yyyy-MM-dd')),
                    hourAtual: '18'
                }
            }).then((response) => {
                setHourEleven(response.data.value)
            }).catch((err) => {
                console.log(err)
            })
        }

        fhourOne();
        fhourTwo();
        fhourTree();
        fhourFour();
        fhourFive();
        fhourSix();
        fhourSeven();
        fhourEigth();
        fhourNine();
        fhourTen();
        fhourEleven();

    }, [])

    const options = {
        series: [{
            name: 'Vendas de Hoje',
            data: [hourOne, hourTwo, hourTree, hourFour, hourFive,
                hourSix, hourSeven, houreigth, hourNine, hourten, hourEleven]
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
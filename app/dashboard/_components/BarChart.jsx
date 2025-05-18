'use client'

import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const labels = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']

export default function BarChart() {
    const data = {
        labels,
        datasets: [
            {
                label: 'Personalized',
                data: [10, 20, 5, 6, 10, 18, 9],
                backgroundColor: "#002f6c",
            },
            {
                label: 'Instant',
                data: [54, 75, 35, 60, 45, 85, 76],
                backgroundColor: '#CCE2FF',
            },

        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    }

    return <Bar options={options} data={data} />
}
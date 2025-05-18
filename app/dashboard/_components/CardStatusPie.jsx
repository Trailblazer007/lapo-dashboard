'use client'

import { Pie } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

export default function CardStatusPie({ totalCards }) {
    const data = {
        labels: ['Active', 'Expired', 'Inactive', 'Blocked', 'Lost'],
        datasets: [
            {
                data: [1800, 300, 200, 100, 50],
                backgroundColor: [
                    'rgba(16, 185, 129, 0.7)',
                    'rgba(239, 68, 68, 0.7)',
                    'rgba(156, 163, 175, 0.7)',
                    'rgba(55, 65, 81, 0.7)',
                    'rgba(249, 115, 22, 0.7)',
                ],
                borderWidth: 1,
            },
        ],
    }

    return (
        <div>
            <p className="text-center text-2xl font-bold mb-4"> Total Cards - {totalCards.toLocaleString()}</p>
            <Pie data={data} />
        </div>
    )
}
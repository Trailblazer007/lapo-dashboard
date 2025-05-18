'use client'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default function LineChartComponent() {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Weekly Income',
                data: [65, 59, 80, 81, 56, 55, 40, 100],
                borderColor: '#4DAF01', // line colour
                backgroundColor: 'rgba(1, 77, 175, 0.1)', // Area under line
                tension: 0.3, // Curve smoothness (0-1)
                fill: true, // Fill area under line
                pointBackgroundColor: '#014DAF', // Dot color
                pointBorderWidth: 2,
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false // Hide legend
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    drawBorder: false
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow h-64">
            <div className="h-48">
                <Line data={data} options={options} />
            </div>
        </div>
    )
}
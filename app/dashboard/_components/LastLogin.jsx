'use client'

import { useEffect, useState } from 'react'

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export default function LastLogin({ format = 'full' }) {
    const [dateString, setDateString] = useState('')

    useEffect(() => {
        const now = new Date()
        const day = now.getDate().toString().padStart(2, '0')
        const month = monthNames[now.getMonth()]
        const year = now.getFullYear()
        const hours = now.getHours().toString().padStart(2, '0')
        const minutes = now.getMinutes().toString().padStart(2, '0')

        setDateString(
            format === 'short'
                ? `${day} ${month} ${year}`
                : `Last login: ${day}/${now.getMonth() + 1}/${year} ${hours}:${minutes}` // Original format
        )
    }, [format])

    return (
        <div className="text-sm">
            {dateString}
        </div>
    )
}
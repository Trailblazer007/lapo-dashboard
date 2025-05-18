import Image from "next/image"

export default function AnalyticsCard({ title, value, change, period, iconPath }) {
    const isPositive = change.startsWith('+')

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            {/* First Row - Icon */}
            <div className="relative w-8 h-8 mb-2">
                <Image
                    src={iconPath}
                    alt={title}
                    fill
                    className="object-contain"
                />
            </div>

            {/* Second Row - Title */}
            <h3 className="text-base font-medium text-gray-500 mb-3">{title}</h3>

            {/* Third Row - Value, Change, Period */}
            <div className="flex items-end justify-between">
                <p className="text-3xl font-semibold">{value}</p>
                <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1">
                        {/* Add your icon here - adjust the size as needed */}
                        <div className="relative w-3 h-3">
                            <Image
                                src={isPositive ? "/icons/arrow-up-right.svg" : "/icons/arrow-up-right.svg"}
                                alt=""
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${isPositive ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                            {change}
                        </span>
                    </div>
                    <span className="mt-1 text-xs text-gray-500">{period}</span>
                </div>
            </div>
        </div>
    )
}
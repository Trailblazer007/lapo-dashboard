'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function TopBar({ children }) {
    const pathname = usePathname()
    const currentPage = pathname.split('/').pop() || 'Dashboard'
    const formattedPageName = currentPage.charAt(0).toUpperCase() + currentPage.slice(1).replace(/-/g, ' ')

    return (
        <header className="bg-white shadow-sm sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Current page with icon */}
                <div className="flex items-center gap-2">
                    <div className="relative w-6 h-6">
                        <Image
                            src={`/icons/${currentPage.toLowerCase()}.svg`}
                            alt=""
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h1 className="text-xl font-semibold">{formattedPageName}</h1>
                </div>

                {/* Search and action icons */}
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-3 flex items-center">
                            <Image
                                src="/icons/search.svg"
                                alt=""
                                width={20}
                                height={20}
                                className="opacity-50"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-10 py-2 border border-[#D0D5DD] rounded-full focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button className="p-1 hover:bg-gray-100 px-4 rounded-full">
                        <Image
                            src="/icons/bell.svg"
                            alt="Notifications"
                            width={24}
                            height={24}
                        />
                    </button>

                    <button className="p-1 hover:bg-gray-100 rounded-full">
                        <Image
                            src="/icons/profile.svg"
                            alt="Profile"
                            width={24}
                            height={24}
                        />
                    </button>
                </div>
            </div>
        </header>
    )
}
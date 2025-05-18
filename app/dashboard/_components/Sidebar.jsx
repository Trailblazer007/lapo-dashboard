'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const menuItems = [
    { name: 'Dashboard', path: '/dashboard', checked: false, icon: '/icons/dashboard.svg' },
    { name: 'Branches', path: '/branches', checked: false, icon: '/icons/branches.svg' },
    { name: 'Roles', path: '/roles', checked: true, icon: '/icons/roles.svg' },
    { name: 'Users', path: '/users', checked: true, icon: '/icons/users.svg' },
    { name: 'Card Scheme', path: '/card-scheme', checked: false, icon: '/icons/card-scheme.svg' },
    { name: 'Card Profile', path: '/card-profile', checked: false, icon: '/icons/card-profile.svg' },
    { name: 'Card Request', path: '/card-request', checked: false, icon: '/icons/card-request.svg' },
    { name: 'Stock', path: '/stock', checked: false, icon: '/icons/stock.svg' },
    { name: 'Cards', path: '/cards', checked: false, icon: '/icons/cards.svg' },
    { name: 'Authorization List', path: '/authorization-list', checked: false, icon: '/icons/auth-list.svg' },
    { name: 'Authorization Queue', path: '/authorization-queue', checked: true, icon: '/icons/auth-queue.svg' },
    { name: 'Trail', path: '/trail', checked: false, icon: '/icons/trail.svg' },
    { name: 'Account', path: '/account', checked: false, icon: '/icons/account.svg' },
]

export default function Sidebar() {
    const pathname = usePathname()
    const [dashboardItem, ...otherItems] = menuItems

    return (
        <div className="fixed inset-y-0 left-0 w-64 bg-[#002F6C] text-[#D0D5DD] flex flex-col shadow-lg py-7">
            <div className="p-4 mb-8 relative h-20">
                <Image
                    src="/images/lapo-logo.svg"
                    alt="LAPO Logo"
                    fill
                    className="object-contain"
                />
            </div>

            <div className="flex-1 overflow-y-auto">
                <div className="p-4 space-y-4">
                    <Link
                        href={dashboardItem.path}
                        className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium ${pathname === dashboardItem.path
                            ? 'bg-[#E4F0FF] text-[#014DAF]'
                            : 'text-[#D0D5DD] hover:bg-gray-100'
                            }`}
                    >
                        <div className={`relative w-5 h-5 mr-3 ${pathname === dashboardItem.path
                            ? 'text-[#014DAF]'
                            : 'text-[#D0D5DD]'
                            }`}>
                            <Image
                                src={dashboardItem.icon}
                                alt={dashboardItem.name}
                                fill
                                className={`${dashboardItem.checked ? 'opacity-100' : 'opacity-40'}`}
                            />
                        </div>
                        {dashboardItem.name}
                    </Link>

                    {/* MAIN MENU Header */}
                    <h2 className="text-xs uppercase tracking-wider my-4 text-[#7E8B9C]">
                        MAIN MENU
                    </h2>

                    {/* Other Menu Items */}
                    <nav className="space-y-2">
                        {otherItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${pathname === item.path
                                    ? 'bg-blue-50 text-[#014DAF]'
                                    : 'text-[#D0D5DD] hover:bg-gray-700'
                                    }`}
                            >
                                <div className={`relative w-5 h-5 mr-3 ${pathname === item.path
                                    ? 'text-[#014DAF]'
                                    : 'text-[#D0D5DD]'
                                    }`}>
                                    <Image
                                        src={item.icon}
                                        alt={item.name}
                                        fill
                                        className={`${item.checked ? 'opacity-100' : 'opacity-40'}`}
                                    />
                                </div>
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
            <div className="p-4">
                <button className="flex items-center text-[#FFFFFF] hover:text-gray-900 hover:cursor-pointer w-full">
                    <div className="relative w-5 h-5 mr-3">
                        <Image src="/icons/logout.svg" alt="Logout" fill />
                    </div>
                    <span>Logout</span>
                </button>

                <div className="mt-4 text-xs text-[#7E8B9C]">
                    <p>POWERED BY</p>
                    <div className="flex items-center mt-1">
                        <div className="relative w-24 h-10 mr-2">
                            <Image
                                src="/images/cardinfra-logo.svg"
                                alt="Cardinfra"
                                fill
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
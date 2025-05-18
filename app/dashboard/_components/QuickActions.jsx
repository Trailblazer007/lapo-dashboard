'use client'
import Image from 'next/image'

export default function QuickActions() {
    const quickActions = [
        {
            title: 'Manage a Card',
            iconPath: '/icons/manage_a_card.svg',
            chevron: true
        },
        {
            title: 'Issue Instant Card',
            iconPath: '/icons/issue_instant_card.svg',
            chevron: true
        },
        {
            title: 'Issue Personalized Card',
            iconPath: '/icons/issue_personalized_card.svg',
            chevron: true
        },
        {
            title: 'Review Card Requests',
            iconPath: '/icons/review_card_requests.svg',
            chevron: true
        }
    ];

    return (
        <div className="border border-[#E2E2E2] rounded-[10px] bg-white p-4 my-3">
            <h3 className="text-base font-medium mb-3">Your Quick Access</h3>
            <div className="flex flex-wrap gap-3">
                {quickActions.map((action, index) => (
                    <div
                        key={index}
                        className="flex-1 min-w-[200px] bg-[#CCE2FF] flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors border border-[#E2E2E2]"
                    >
                        <div className="flex items-center gap-3">
                            <div className="relative w-5 h-5">
                                <Image
                                    src={action.iconPath}
                                    alt={action.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-sm font-medium">{action.title}</span>
                        </div>
                        {action.chevron && (
                            <div className="relative w-4 h-4">
                                <Image
                                    src="/icons/chevron-right.svg"
                                    alt=""
                                    height={16}
                                    width={16}
                                    className="object-contain opacity-60"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
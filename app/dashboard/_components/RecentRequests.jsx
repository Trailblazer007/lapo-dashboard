export default function RecentRequests() {
    const requests = [
        {
            branch: 'Corporate',
            cardType: 'Instant',
            quantity: '10',
            status: 'Ready',
            action: 'View'
        },
        {
            branch: 'Corporate',
            cardType: 'Personalized',
            quantity: '10',
            status: 'In Progress',
            action: 'View'
        },
        {
            branch: 'Corporate',
            cardType: 'Personalized',
            quantity: '10',
            status: 'Acknowledged',
            action: 'View'
        },
        {
            branch: 'Corporate',
            cardType: 'Instant',
            quantity: '10',
            status: 'Pending',
            action: 'View'
        }
    ]

    return (
        <div className="overflow-hidden"> {/* Changed from overflow-x-auto to hidden */}
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Card Type</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {requests.map((request, index) => (
                        <tr key={index}>
                            <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500">{request.branch}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500">{request.cardType}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500">{request.quantity}</td>
                            <td className="px-4 py-3 whitespace-nowrap">
                                <span className={`px-1.5 inline-flex text-xs leading-4 font-semibold rounded-full ${request.status === 'Ready' ? 'bg-[#ECFDF3] border border-[#ABEFC6] text-[#067647]' :
                                        request.status === 'In Progress' ? 'bg-[#FEDF89] border border-[#FEDF89] text-[#B54708]' :
                                            request.status === 'Acknowledged' ? 'bg-[#EFF8FF] border border-[#B2DDFF] text-[#175CD3]' :
                                                'bg-[#F9FAFB] border border-[#EAECF0] text-[#344054]'
                                    }`}>
                                    {request.status}
                                </span>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap font-medium text-xs text-[#014DAF] hover:text-blue-800">
                                <a href="#">{request.action}</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
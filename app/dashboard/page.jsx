import QuickActions from "./_components/QuickActions";
import AnalyticsCard from "./_components/AnalyticsCard";
import BarChart from "./_components/BarChart";
import RecentRequests from "./_components/RecentRequests";
import CardStatusPie from "./_components/CardStatusPie";
import LastLogin from "./_components/LastLogin";
import Image from "next/image";
import WeeklyIncomeChart from "./_components/WeeklyIncomeChart";

export default function Dashboard() {
    const user = "Nazeer"

    return (
        <div>
            <div className="flex items-center justify-between">
                {/* left side */}
                <div>
                    <h1 className="text-2xl font-bold mb-2">
                        Hi {user}, what would you like to do today?
                    </h1>

                    < LastLogin />

                </div>

                {/* Right side */}
                <div className="border border-[#D0D5DD] rounded flex items-center justify-between">
                    <Image
                        src={'/icons/calendar.svg'}
                        height={14}
                        width={14}
                        alt="calendar"
                    />
                    < LastLogin format="short" />
                </div>
            </div>

            <QuickActions />

            <div className="space-y-6">
                <h2 className="text-xl font-semibold">Analytics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    <AnalyticsCard
                        iconPath="/icons/credit-card-check.svg"
                        title="Total Active Cards"
                        value="26,478"
                        change="+9%"
                        period="this month"
                    />
                    <AnalyticsCard
                        iconPath="/icons/credit-card-edit.svg"
                        title="Total Personalized Cards"
                        value="15,703"
                        change="8.5%"
                        period="this month"
                    />
                    <AnalyticsCard
                        iconPath="/icons/bank-note.svg"
                        title="Today's Revenue"
                        value="9.3M"
                        change="+6%"
                        period="vs yesterday"
                    />
                    <AnalyticsCard
                        iconPath="/icons/hourglass.svg"
                        title="Pending Requests"
                        value="38"
                        change="Requires attention"
                        period=""
                    />

                </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-2 mb-2">
                {/* First Card - Monthly Issuance */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">
                        Monthly Issuance
                    </h2>
                    <BarChart />
                </div>

                {/* Second Card - Recent Card Requests */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">
                        Recent Card Requests
                    </h2>
                    <RecentRequests />
                </div>
            </div>


            <div className="grid grid-cols-2 gap-2">
                {/* This Week's Income */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">
                        This Week&apos;s Income
                    </h2>
                    <WeeklyIncomeChart />
                </div>

                {/* Card Status Distribution */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">
                        Card Status Distribution
                    </h2>
                    <CardStatusPie totalCards={2450} />
                </div>
            </div>
        </div>
    );
}
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from './dashboard/_components/Sidebar'
import "./globals.css";
import TopBar from "./dashboard/_components/TopBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LAPO Dashboard",
  description: "Card Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#cce2ff] antialiased`}>
        <div className="flex min-h-screen bg-[#cce2ff]">
          {/* Sidebar - fixed width */}
          <div className="fixed h-full w-64 z-20">
            <Sidebar />
          </div>

          {/* Main content area - offset by sidebar width */}
          <div className="flex-1 flex flex-col ml-64">
            {/* TopBar - full width */}
            <div className="sticky top-0 z-10">
              <TopBar />
            </div>

            {/* Dashboard content - scrollable */}
            <main className="flex-1 overflow-auto px-5"> {/* Changed from p-6 to px-5 (20px) */}
              <div className="max-w-7xl mx-auto">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="w-full flex flex-col font-sans z-50">
            {/* Top Black Bar */}
            <div className="bg-brand-black w-full py-3 flex justify-center items-center">
                <Link href="/" className="flex items-center space-x-1">
                    <div className="bg-brand-orange text-brand-black font-black text-xl italic px-1 rounded-sm tracking-tighter mr-1">GW</div>
                    <span className="text-white font-black text-3xl tracking-wide">GEARWRENCH</span>
                </Link>
            </div>

            {/* Secondary White Bar */}
            <div className="bg-white w-full py-3 border-b border-gray-200 flex justify-center sticky top-0 z-40">
                <div className="max-w-6xl w-full flex items-center justify-center space-x-6 md:space-x-12 px-6">
                    <Image src="/images/wrench-icon.svg" alt="Tools" width={24} height={24} className="cursor-pointer hover:opacity-75 transition-opacity" />
                    <Image src="/images/map_pin-icon.svg" alt="Where to Buy" width={24} height={24} className="cursor-pointer hover:opacity-75 transition-opacity" />

                    <div className="flex-1 max-w-3xl relative hidden md:block">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Image src="/images/search-icon.svg" alt="Search" width={20} height={20} />
                        </div>
                        <input
                            type="text"
                            className="w-full border-2 border-brand-black rounded-full py-2 pl-12 pr-4 text-sm font-semibold focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                        />
                    </div>

                    <Image src="/images/world-icon.svg" alt="Region" width={24} height={24} className="cursor-pointer hover:opacity-75 transition-opacity" />
                    <Image src="/images/support-icon.svg" alt="Support" width={24} height={24} className="cursor-pointer hover:opacity-75 transition-opacity" />
                </div>
            </div>
        </header>
    );
}

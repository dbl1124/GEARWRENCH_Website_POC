'use client'

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full font-sans">
            {/* Top Support Banner (Off-white) */}
            <div className="bg-brand-gray w-full py-16 px-6 border-b-8 border-brand-orange">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">

                    {/* Support Column 1 */}
                    <div className="flex flex-col items-center">
                        <Image src="/images/support-icon.svg" alt="Support" width={48} height={48} className="mb-6 opacity-80" />
                        <h3 className="font-bold text-xl tracking-wide uppercase mb-4">Here For Support</h3>
                        <p className="text-sm font-medium mb-8 px-4 text-gray-700">We take extensive measures to ensure all our products are made to the very highest standards and meet all relevant industry regulations.</p>
                        <button className="bg-brand-black text-white uppercase font-bold tracking-widest text-sm py-3 px-8 hover:bg-brand-orange transition-colors">Service & Support</button>
                    </div>

                    {/* Support Column 2 */}
                    <div className="flex flex-col items-center">
                        <Image src="/images/map_pin-icon.svg" alt="Where to Buy" width={48} height={48} className="mb-6 opacity-80" />
                        <h3 className="font-bold text-xl tracking-wide uppercase mb-4">Where To Buy</h3>
                        <p className="text-sm font-medium mb-8 px-4 text-gray-700">We take extensive measures to ensure all our products are made to the very highest standards and meet all relevant industry regulations.</p>
                        <button className="bg-brand-black text-white uppercase font-bold tracking-widest text-sm py-3 px-8 hover:bg-brand-orange transition-colors">Find a Retailer</button>
                    </div>

                    {/* Support Column 3 */}
                    <div className="flex flex-col items-center">
                        <Image src="/images/talk-icon.svg" alt="Reach Out" width={48} height={48} className="mb-6 opacity-80" />
                        <h3 className="font-bold text-xl tracking-wide uppercase mb-4">Reach Out</h3>
                        <p className="text-sm font-medium mb-8 px-4 text-gray-700">We take extensive measures to ensure all our products are made to the very highest standards and meet all relevant industry regulations.</p>
                        <button className="bg-brand-black text-white uppercase font-bold tracking-widest text-sm py-3 px-8 hover:bg-brand-orange transition-colors">Contact Us</button>
                    </div>

                    {/* Support Column 4 */}
                    <div className="flex flex-col items-center">
                        <Image src="/images/wrench-icon.svg" alt="Warranty" width={48} height={48} className="mb-6 opacity-80" />
                        <h3 className="font-bold text-xl tracking-wide uppercase mb-4">EZ Warranty</h3>
                        <p className="text-sm font-medium mb-8 px-4 text-gray-700">We take extensive measures to ensure all our products are made to the very highest standards and meet all relevant industry regulations.</p>
                        <button className="bg-brand-black text-white uppercase font-bold tracking-widest text-sm py-3 px-8 hover:bg-brand-orange transition-colors">Submit a Claim</button>
                    </div>

                </div>
            </div>

            {/* Main Dark Footer */}
            <div className="bg-brand-black w-full py-16 px-6 text-white text-sm">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Logo & Address - 4 cols */}
                    <div className="lg:col-span-4 flex flex-col space-y-6">
                        <div className="flex items-center space-x-1 mb-2">
                            <div className="bg-brand-orange text-brand-black font-black text-lg italic px-1 rounded-sm tracking-tighter mr-1">GW</div>
                            <span className="text-white font-black text-2xl tracking-wide">GEARWRENCH</span>
                        </div>
                        <div className="text-gray-400 space-y-2 font-medium">
                            <p>Apex Tool Group</p>
                            <p>910 Ridgebrook Road, Suite 200</p>
                            <p>Sparks, Maryland 21152</p>
                        </div>
                        {/* Social Icons Placeholder */}
                        <div className="flex space-x-4 pt-4">
                            <div className="w-5 h-5 bg-gray-600 rounded"></div>
                            <div className="w-5 h-5 bg-gray-600 rounded"></div>
                            <div className="w-5 h-5 bg-gray-600 rounded"></div>
                            <div className="w-5 h-5 bg-gray-600 rounded"></div>
                        </div>
                    </div>

                    {/* Links Columns - 4 cols */}
                    <div className="lg:col-span-4 grid grid-cols-3 gap-4 uppercase font-bold tracking-wider text-[11px] text-gray-400">
                        {/* Nav 1 */}
                        <div className="flex flex-col space-y-4">
                            <h4 className="text-white mb-2 text-sm">Support</h4>
                            <Link href="#" className="hover:text-brand-orange">Vehicle Coverage</Link>
                            <Link href="#" className="hover:text-brand-orange">Torque Conversion</Link>
                            <Link href="#" className="hover:text-brand-orange">Contact Us</Link>
                            <Link href="#" className="hover:text-brand-orange">Warranty</Link>
                            <Link href="#" className="hover:text-brand-orange">Distributor Login</Link>
                        </div>
                        {/* Nav 2 */}
                        <div className="flex flex-col space-y-4">
                            <h4 className="text-white mb-2 text-sm">GearWrench</h4>
                            <Link href="#" className="hover:text-brand-orange">Industries</Link>
                            <Link href="#" className="hover:text-brand-orange">Inventor Connect</Link>
                            <Link href="#" className="hover:text-brand-orange">Careers</Link>
                            <Link href="#" className="hover:text-brand-orange">Privacy Policy</Link>
                        </div>
                        {/* Nav 3 */}
                        <div className="flex flex-col space-y-4">
                            <h4 className="text-white mb-2 text-sm">Resources</h4>
                            <Link href="#" className="hover:text-brand-orange">Resource Center</Link>
                            <Link href="#" className="hover:text-brand-orange">Brochures</Link>
                            <Link href="#" className="hover:text-brand-orange">Catalog</Link>
                            <Link href="#" className="hover:text-brand-orange">News Releases</Link>
                            <Link href="#" className="hover:text-brand-orange">Videos</Link>
                        </div>
                    </div>

                    {/* Email Signup Form - 4 cols */}
                    <div className="lg:col-span-4 flex flex-col space-y-6">
                        <h4 className="text-white font-bold text-2xl uppercase tracking-wide flex items-center">
                            <span className="mr-2 border border-white px-2 py-1 rounded-sm text-sm">✉</span> Email Signup
                        </h4>
                        <p className="text-gray-400 font-medium">Sign up to receive the latest info on new GEARWRENCH products, special offers and more.</p>

                        <form className="grid grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col space-y-2">
                                <label className="font-bold text-sm">First Name</label>
                                <input type="text" className="bg-gray-100 p-2 text-black focus:outline-brand-orange" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label className="font-bold text-sm">Last Name</label>
                                <input type="text" className="bg-gray-100 p-2 text-black focus:outline-brand-orange" />
                            </div>
                            <div className="col-span-2 flex flex-col space-y-2 mt-2">
                                <label className="font-bold text-sm">Email Address</label>
                                <input type="email" className="bg-gray-100 p-3 text-black focus:outline-brand-orange" />
                            </div>
                            <button className="col-span-2 bg-brand-orange text-brand-black uppercase font-bold text-lg py-4 mt-4 hover:bg-orange-600 transition-colors tracking-widest">
                                Signup
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </footer>
    );
}

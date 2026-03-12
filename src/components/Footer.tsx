'use client'

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full font-sans">
            {/* Top Support Banner (4 Gray Cards on White Background) */}
            <div className="w-full py-20 px-6 bg-white">
                <div className="max-w-[1480px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Support Card 1 */}
                    <div className="bg-[#F2F2F2] flex flex-col items-center text-center px-8 pt-12 pb-10 h-full">
                        <div className="h-12 w-12 relative flex items-center justify-center mb-2">
                            <Image src="/images/support-icon.svg" alt="Support" fill className="object-contain" />
                        </div>
                        <h3 className="font-black text-[22px] tracking-wide uppercase mt-4 mb-4 text-brand-black">Here For Support</h3>
                        <p className="text-[15px] leading-relaxed mb-10 text-brand-black font-medium flex-grow">
                            We take extensive measures to ensure all our products are made to the very highest standards and meet all relevant industry regulations.
                        </p>
                        <button className="relative w-full overflow-hidden bg-black text-white uppercase font-black tracking-widest text-[16px] py-4 mt-auto group">
                            <span className="absolute inset-y-0 -left-[200%] block w-[200%] bg-brand-orange transition-all duration-500 ease-out skew-x-[30deg] origin-bottom group-hover:left-4"></span>
                            <span className="relative z-10 w-full text-center font-black text-white transition-colors duration-300 ease-in-out group-hover:text-black uppercase tracking-widest">
                                Service & Support
                            </span>
                        </button>
                    </div>

                    {/* Support Card 2 */}
                    <div className="bg-[#F2F2F2] flex flex-col items-center text-center px-8 pt-12 pb-10 h-full">
                        <div className="h-12 w-12 relative flex items-center justify-center mb-2">
                            <Image src="/images/map_pin-icon.svg" alt="Where to Buy" fill className="object-contain" />
                        </div>
                        <h3 className="font-black text-[22px] tracking-wide uppercase mt-4 mb-4 text-brand-black">Where To Buy</h3>
                        <p className="text-[15px] leading-relaxed mb-10 text-brand-black font-medium flex-grow">
                            We take extensive measures to ensure all our products are made to the very highest standards and meet all relevant industry regulations.
                        </p>
                        <button className="relative w-full overflow-hidden bg-black text-white uppercase font-black tracking-widest text-[16px] py-4 mt-auto group">
                            <span className="absolute inset-y-0 -left-[200%] block w-[200%] bg-brand-orange transition-all duration-500 ease-out skew-x-[30deg] origin-bottom group-hover:left-4"></span>
                            <span className="relative z-10 w-full text-center font-black text-white transition-colors duration-300 ease-in-out group-hover:text-black uppercase tracking-widest">
                                Find a Retailer
                            </span>
                        </button>
                    </div>

                    {/* Support Card 3 */}
                    <div className="bg-[#F2F2F2] flex flex-col items-center text-center px-8 pt-12 pb-10 h-full">
                        <div className="h-12 w-12 relative flex items-center justify-center mb-2">
                            <Image src="/images/talk-icon.svg" alt="Reach Out" fill className="object-contain" />
                        </div>
                        <h3 className="font-black text-[22px] tracking-wide uppercase mt-4 mb-4 text-brand-black">Reach Out</h3>
                        <p className="text-[15px] leading-relaxed mb-10 text-brand-black font-medium flex-grow">
                            We take extensive measures to ensure all our products are made to the very highest standards and meet all relevant industry regulations.
                        </p>
                        <button className="relative w-full overflow-hidden bg-black text-white uppercase font-black tracking-widest text-[16px] py-4 mt-auto group">
                            <span className="absolute inset-y-0 -left-[200%] block w-[200%] bg-brand-orange transition-all duration-500 ease-out skew-x-[30deg] origin-bottom group-hover:left-4"></span>
                            <span className="relative z-10 w-full text-center font-black text-white transition-colors duration-300 ease-in-out group-hover:text-black uppercase tracking-widest">
                                Contact Us
                            </span>
                        </button>
                    </div>

                    {/* Support Card 4 */}
                    <div className="bg-[#F2F2F2] flex flex-col items-center text-center px-8 pt-12 pb-10 h-full">
                        <div className="h-12 w-12 relative flex items-center justify-center mb-2">
                            <Image src="/images/wrench-icon.svg" alt="Warranty" fill className="object-contain" />
                        </div>
                        <h3 className="font-black text-[22px] tracking-wide uppercase mt-4 mb-4 text-brand-black">EZ Warranty</h3>
                        <p className="text-[15px] leading-relaxed mb-10 text-brand-black font-medium flex-grow">
                            We take extensive measures to ensure all our products are made to the very highest standards and meet all relevant industry regulations.
                        </p>
                        <button className="relative w-full overflow-hidden bg-black text-white uppercase font-black tracking-widest text-[16px] py-4 mt-auto group">
                            <span className="absolute inset-y-0 -left-[200%] block w-[200%] bg-brand-orange transition-all duration-500 ease-out skew-x-[30deg] origin-bottom group-hover:left-4"></span>
                            <span className="relative z-10 w-full text-center font-black text-white transition-colors duration-300 ease-in-out group-hover:text-black uppercase tracking-widest">
                                Submit a Claim
                            </span>
                        </button>
                    </div>

                </div>
            </div>

            {/* Main Dark Footer */}
            <div className="bg-black w-full py-16 px-6 text-white text-sm">
                <div className="max-w-[1480px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

                    {/* Logo & Address - 3 cols */}
                    <div className="lg:col-span-3 flex flex-col pt-2">
                        <div className="flex items-center space-x-1 mb-8">
                            <img
                                src="/images/gw-logo.svg"
                                alt="GEARWRENCH"
                                className="w-[425px] h-auto object-contain"
                            />
                        </div>
                        <div className="text-gray-400 space-y-2 font-medium text-[18px] leading-relaxed">
                            <p>Apex Tool Group</p>
                            <p>910 Ridgebrook Road, Suite 200</p>
                            <p className="underline">Sparks, Maryland 21152</p>
                        </div>
                        {/* Social Icons */}
                        <div className="flex space-x-8 pt-10 text-gray-400">
                            {/* Facebook SVG */}
                            <svg className="w-7 h-7 fill-current hover:text-white transition-colors cursor-pointer" viewBox="0 0 24 24">
                                <path d="M22.675 0H1.325A1.325 1.325 0 000 1.325v21.351A1.325 1.325 0 001.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116A1.325 1.325 0 0024 22.676V1.325A1.325 1.325 0 0022.675 0z" />
                            </svg>
                            {/* Instagram SVG */}
                            <svg className="w-7 h-7 fill-current hover:text-white transition-colors cursor-pointer" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                            {/* TikTok SVG */}
                            <svg className="w-7 h-7 fill-current hover:text-white transition-colors cursor-pointer" viewBox="0 0 24 24">
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.22-1.15 4.39-2.92 5.74-1.74 1.34-4.01 1.79-6.13 1.25-2.18-.54-3.99-2.15-4.73-4.25-.79-2.22-.44-4.8.94-6.71 1.33-1.87 3.52-3.03 5.8-3.09h.18v4.06c-1.25.1-2.52.88-3.18 1.95-.69 1.1-.64 2.58.07 3.65.65.98 1.79 1.56 2.94 1.62 1.25.07 2.54-.36 3.28-1.33.56-.73.81-1.64.84-2.55.08-4.14.04-8.29.06-12.44.02-1.57-.02-3.14.01-4.72z" />
                            </svg>
                            {/* YouTube SVG */}
                            <svg className="w-7 h-7 fill-current hover:text-white transition-colors cursor-pointer" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 00-2.122 2.136C0 8.087 0 12 0 12s0 3.913.501 5.814a3.016 3.016 0 002.122 2.136c1.872.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 002.122-2.136C24 15.913 24 12 24 12s0-3.913-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </div>
                    </div>

                    {/* Links Columns - 3 cols */}
                    <div className="lg:col-span-3 grid grid-cols-3 gap-6 uppercase">
                        {/* Nav 1: Support */}
                        <div className="flex flex-col space-y-4">
                            <h4 className="text-gray-300 font-black text-[14px] mb-[2px] tracking-wider">SUPPORT</h4>
                            <div className="flex flex-col space-y-[14px] text-[10px] font-bold tracking-widest text-[#B5B5B5]">
                                <Link href="#" className="hover:text-brand-orange">VEHICLE COVERAGE</Link>
                                <Link href="#" className="hover:text-brand-orange">TORQUE CONVERSION</Link>
                                <Link href="#" className="hover:text-brand-orange">CONTACT US</Link>
                                <Link href="#" className="hover:text-brand-orange">WARRANTY</Link>
                                <Link href="#" className="hover:text-brand-orange">DISTRIBUTOR LOGIN</Link>
                                <Link href="#" className="hover:text-brand-orange leading-[1.6]">RESELLER POLICIES &<br />REGISTRATION</Link>
                            </div>
                        </div>
                        {/* Nav 2: GEARWRENCH */}
                        <div className="flex flex-col space-y-4">
                            <h4 className="text-gray-300 font-black text-[14px] mb-[2px] tracking-wider">GEARWRENCH</h4>
                            <div className="flex flex-col space-y-[14px] text-[10px] font-bold tracking-widest text-[#B5B5B5]">
                                <Link href="#" className="hover:text-brand-orange">INDUSTRIES</Link>
                                <Link href="#" className="hover:text-brand-orange">INVENTOR CONNECT</Link>
                                <Link href="#" className="hover:text-brand-orange">CAREERS</Link>
                                <Link href="#" className="hover:text-brand-orange">PRIVACY POLICY</Link>
                                <Link href="#" className="hover:text-brand-orange leading-[1.6]">PRIVACY RIGHTS CALIFORNIA<br />AND NEVADA</Link>
                                <Link href="#" className="hover:text-brand-orange">TERMS OF SERVICE</Link>
                            </div>
                        </div>
                        {/* Nav 3: Resources */}
                        <div className="flex flex-col space-y-4">
                            <h4 className="text-gray-300 font-black text-[14px] mb-[2px] tracking-wider">RESOURCES</h4>
                            <div className="flex flex-col space-y-[14px] text-[10px] font-bold tracking-widest text-[#B5B5B5]">
                                <Link href="#" className="hover:text-brand-orange">RESOURCE CENTER</Link>
                                <Link href="#" className="hover:text-brand-orange">BROCHURES</Link>
                                <Link href="#" className="hover:text-brand-orange">CATALOG</Link>
                                <Link href="#" className="hover:text-brand-orange">NEWS RELEASES</Link>
                                <Link href="#" className="hover:text-brand-orange">VIDEOS</Link>
                                <Link href="#" className="hover:text-brand-orange flex items-center">
                                    BRAND ELEMENTS
                                </Link>
                                <Link href="#" className="hover:text-brand-orange flex items-center">
                                    STICKERS
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Email Signup Form - 6 cols (Half width) */}
                    <div className="lg:col-span-6 flex flex-col lg:pl-16">
                        <h4 className="text-white font-black text-[36px] uppercase tracking-tight flex items-center mb-4">
                            <svg className="w-10 h-10 mr-4 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            EMAIL SIGNUP
                        </h4>
                        <p className="text-[#E0E0E0] font-medium text-[16px] leading-relaxed mb-8 pr-10">
                            Sign up to receive the latest info on new GEARWRENCH products, special offers and more.
                        </p>

                        <form className="flex flex-col space-y-6 w-full max-w-[90%]" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex space-x-6 w-full">
                                <div className="flex flex-col space-y-2 flex-1">
                                    <label className="font-bold text-[16px]">First Name</label>
                                    <input type="text" className="bg-[#EAEAEA] h-[52px] px-4 text-black text-[16px] focus:outline-brand-orange" />
                                </div>
                                <div className="flex flex-col space-y-2 flex-1">
                                    <label className="font-bold text-[16px]">Last Name</label>
                                    <input type="text" className="bg-[#EAEAEA] h-[52px] px-4 text-black text-[16px] focus:outline-brand-orange" />
                                </div>
                            </div>

                            <div className="flex flex-col space-y-2">
                                <label className="font-bold text-[16px]">Email Address</label>
                                <input type="email" className="bg-[#EAEAEA] h-[52px] px-4 text-black text-[16px] focus:outline-brand-orange" />
                            </div>

                            <div className="pt-2">
                                <button className="relative w-[45%] overflow-hidden bg-brand-orange text-black font-black text-[20px] py-[16px] tracking-widest group rounded-none shadow-none">
                                    <span className="absolute inset-y-0 -left-[200%] block w-[200%] bg-[#0d0d0d] transition-all duration-500 ease-out skew-x-[30deg] origin-bottom group-hover:left-4"></span>
                                    <span className="relative z-10 w-full text-center transition-colors duration-300 ease-in-out group-hover:text-white uppercase tracking-widest">
                                        SIGNUP
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </footer>
    );
}

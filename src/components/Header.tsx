'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import WhereToBuyModal from './WhereToBuyModal';

const NAV_DATA: Record<string, { name: string; image: string; isNew?: boolean; href: string }[]> = {
    "DIAGNOSTICS": [
        { name: "GWSCAN", image: "/images/nav/Diagnostics/GWScan.png", isNew: true, href: "#" },
        { name: "GWSMARTBT", image: "/images/nav/Diagnostics/GWSmart-scan.png", href: "#" },
        { name: "GWSMART07", image: "/images/nav/Diagnostics/GWSmart07.png", href: "#" },
        { name: "GWMART10", image: "/images/nav/Diagnostics/GWSmart10.png", href: "#" },
        { name: "TPMS Tools", image: "/images/nav/Diagnostics/GW_GWTPMS.png", href: "#" },
        { name: "Imaging Tools", image: "/images/nav/Diagnostics/GW_scope.webp", href: "#" }
    ],
    "MEGAMOD": [
        { name: "MEGAMOD 197", image: "/images/nav/MEGAMOD/197.png", href: "#" },
        { name: "MEGAMOD 247", image: "/images/nav/MEGAMOD/247.png", href: "#" },
        { name: "MEGAMOD MRO", image: "/images/nav/MEGAMOD/mro.png", href: "#" },
        { name: "MEGAMOD 873", image: "/images/nav/MEGAMOD/873.png", href: "#" },
        { name: "MEGAMOD PRO", image: "/images/nav/MEGAMOD/pro.png", href: "#" },
        { name: "MEGAMOD 1024", image: "/images/nav/MEGAMOD/1024.png", href: "#" },
        { name: "MEGAMOD 1268", image: "/images/nav/MEGAMOD/1268.png", href: "#" },
        { name: "MEGAMOD 1331", image: "/images/nav/MEGAMOD/1331.png", href: "#" },
        { name: "MEGAMOD 1610", image: "/images/nav/MEGAMOD/1629.png", href: "#" },
        { name: "MEGAMOD 1858", image: "/images/nav/MEGAMOD/1858.png", isNew: true, href: "#" }
    ],
    "SHOP EQUIPMENT": [
        { name: "Air Movers", image: "/images/nav/shop/Air%20Movers.png", href: "#" },
        { name: "Creeper", image: "/images/nav/shop/Creeper.png", href: "#" },
        { name: "Fans", image: "/images/nav/shop/Fans.png", href: "#" },
        { name: "Floor Jacks", image: "/images/nav/shop/Floor%20Jacks.png", isNew: true, href: "#" },
        { name: "Jack Stands", image: "/images/nav/shop/Jack%20Stands.png", href: "#" },
        { name: "Lights", image: "/images/nav/shop/Lights.png", href: "#" },
        { name: "Stool", image: "/images/nav/shop/Stool.png", href: "#" }
    ],
    "MODULAR TOOL SETS": [
        { name: "Drive Tool Sets", image: "/images/nav/MTS/Drive%20Tool%20Sets.png", href: "#" },
        { name: "General Tool Sets", image: "/images/nav/MTS/General%20Tool%20Sets.png", href: "#" },
        { name: "Impact Tool Sets", image: "/images/nav/MTS/Impact%20Tool%20Sets.png", href: "#" },
        { name: "Mixed Tool Sets", image: "/images/nav/MTS/Mixed%20Tool%20Sets.png", href: "#" },
        { name: "Socket Tool Sets", image: "/images/nav/MTS/Socket%20Tool%20Sets.png", href: "#" },
        { name: "Wrench Tool Sets", image: "/images/nav/MTS/Wrench%20Tool%20Sets.png", href: "#" }
    ],
    "120XP PRODUCTS": [
        { name: "120XP Dual Material Ratchets", image: "/images/nav/120/120XP%20Dual%20Material%20Ratchets.png", href: "#" },
        { name: "120XP Full Chrome Ratchets", image: "/images/nav/120/120XP%20Full%20Chrome%20Ratchets.png", href: "#" },
        { name: "120XP Modular Tool Sets", image: "/images/nav/120/120XP%20Modular%20Tool%20Sets.png", href: "#" },
        { name: "120XP Ratcheting Wrenches", image: "/images/nav/120/120XP%20Ratcheting%20Wrenches.png", href: "#" },
        { name: "120XP Sets", image: "/images/nav/120/120XP%20Sets.png", href: "#" },
        { name: "120XP Torque Wrenches", image: "/images/nav/120/120XP%20Torque%20Wrenches.png", href: "#" }
    ],
    "90T PRODUCTS": [
        { name: "90T Dual Material Ratcheting Wrenches", image: "/images/nav/90/90T%20Dual%20Material%20Ratcheting%20Wrenches.png", href: "#" },
        { name: "90T Full Chrome Ratcheting Wrenches", image: "/images/nav/90/90T%20Full%20Chrome%20Ratcheting%20Wrenches.png", href: "#" },
        { name: "90T Gimbal Ratchets", image: "/images/nav/90/90T%20Gimbal%20Ratchets.png", href: "#" },
        { name: "90T Ratcheting Wrenches", image: "/images/nav/90/90T%20Ratcheting%20Wrenches.png", href: "#" },
        { name: "90T Tool Sets", image: "/images/nav/90/90T%20Tool%20Sets.png", href: "#" }
    ],
    "STORAGE": [
        { name: "MTS Mobile Storage", image: "/images/nav/Storage/MTS%20Mobile%20Storage.png", href: "#" },
        { name: "Rolling Tool Storage", image: "/images/nav/Storage/Rolling%20Tool%20Storage.png", href: "#" },
        { name: "Small Tool Boxes", image: "/images/nav/Storage/Small%20Tool%20Boxes.png", href: "#" },
        { name: "Storage Toppers", image: "/images/nav/Storage/Storage%20Toppers.png", href: "#" },
        { name: "Tool Bags", image: "/images/nav/Storage/Tool%20Bags.png", href: "#" },
        { name: "Tool Cabinets", image: "/images/nav/Storage/Tool%20Cabinets.png", href: "#" }
    ]
};

const ALL_TOOLS_CATEGORIES = [
    {
        title: "Hand Tools",
        items: ["Chrome Sockets", "Wrenches", "Ratchets & Drive Tools", "Screwdrivers & Hex Keys", "Pliers", "Pry Bars", "Striking & Struck", "Cutting Tools"]
    },
    {
        title: "Tool Sets & Storage",
        items: ["Mechanics Tool Sets", "Master Tool Sets", "Modular Tool Sets", "Tool Sets", "Tool Storage & Organization", "MEGAMOD"]
    },
    {
        title: "Automotive & Specialty",
        items: ["Impact Products", "Extraction Tools", "Diagnostic & Testing", "Torque Products", "Shop Equipment & Specialty Tools"]
    }
];

export default function Header() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    const [isWhereToBuyOpen, setIsWhereToBuyOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const searchInputRef = useRef<HTMLInputElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window === 'undefined') return;
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsNavVisible(false);
                if (activeCategory) setActiveCategory(null);
            } else if (currentScrollY < lastScrollY) {
                setIsNavVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        if (isSearchExpanded || isWhereToBuyOpen) {
            setIsNavVisible(true);
            return;
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, isSearchExpanded, isWhereToBuyOpen, activeCategory]);

    const searchResults = searchQuery.trim() === ""
        ? [
            NAV_DATA["120XP PRODUCTS"][0],
            NAV_DATA["DIAGNOSTICS"][0],
            NAV_DATA["MEGAMOD"][9],
            NAV_DATA["SHOP EQUIPMENT"][3]
        ] // Show 4 default/trending when empty
        : Object.entries(NAV_DATA).flatMap(([category, products]) => {
            const matchesCategory = category.toLowerCase().includes(searchQuery.toLowerCase());
            return products.filter(p => matchesCategory || p.name.toLowerCase().includes(searchQuery.toLowerCase()));
        });

    const handleMouseEnter = (category: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveCategory(category);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveCategory(null);
        }, 150);
    };

    return (
        <header className={`w-full flex flex-col font-sans sticky top-0 z-[100] transition-transform duration-300 ease-in-out shadow-sm ${isNavVisible ? 'translate-y-0' : '-translate-y-full'
            }`}>
            {/* Top Black Bar relative z-[100] */}
            <div className="bg-brand-black w-full h-[90px] px-6 relative z-[100]">
                <div className="max-w-[1480px] mx-auto h-full flex justify-between items-center relative">
                    {/* Empty left spacer to center logo effectively if needed */}
                    <div className="hidden lg:flex flex-1"></div>

                    {/* Logo (Centered) */}
                    <Link href="/" className="flex justify-center flex-1 lg:flex-none">
                        <Image
                            src="/images/gw-logo.svg"
                            alt="GEARWRENCH"
                            width={370}
                            height={48}
                            className="object-contain"
                            priority
                        />
                    </Link>

                    {/* Utility Links (Right Aligned) */}
                    <div className="flex-1 flex justify-end items-center gap-5 lg:gap-10">
                        <button onClick={() => setIsWhereToBuyOpen(true)} className="text-white hover:text-brand-orange transition-colors flex items-center gap-2 group focus:outline-none">
                            <svg className="w-5 h-5 lg:w-[22px] lg:h-[22px] stroke-current fill-none transition-colors" viewBox="0 0 30 30">
                                <path d="M15 13.75H15.0125V13.7625H15V13.75Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
                                <path d="M15 27.5L21.875 20.625C23.2347 19.2653 24.1606 17.5329 24.5357 15.6469C24.9108 13.7609 24.7183 11.8061 23.9824 10.0296C23.2465 8.25303 22.0003 6.73461 20.4015 5.66631C18.8026 4.59801 16.9229 4.0278 15 4.0278C13.0771 4.0278 11.1974 4.59801 9.59851 5.66631C7.99967 6.73461 6.75351 8.25303 6.01762 10.0296C5.28174 11.8061 5.08917 13.7609 5.46428 15.6469C5.83939 17.5329 6.76533 19.2653 8.125 20.625L15 27.5Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
                            </svg>
                            <span className="hidden lg:block text-[15.5px] font-semibold tracking-wide uppercase">Where to Buy</span>
                        </button>
                        <Link href="/support" className="text-white hover:text-brand-orange transition-colors flex items-center gap-2 group">
                            <svg className="w-5 h-5 lg:w-[22px] lg:h-[22px] fill-current transition-colors" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.25 11.25C6.25 8.92936 7.17187 6.70376 8.81282 5.06282C10.4538 3.42187 12.6794 2.5 15 2.5C17.3206 2.5 19.5462 3.42187 21.1872 5.06282C22.8281 6.70376 23.75 8.92936 23.75 11.25V12.5437C25.87 12.8475 27.5 14.6712 27.5 16.875V17.1875C27.5 19.4062 25.5862 21.3512 23.335 21.2475C22.41 23.8975 20.0575 25.6838 17.5188 26.1363C16.9313 26.3513 16.2362 26.25 15.625 26.25C15.1277 26.25 14.6508 26.0525 14.2992 25.7008C13.9475 25.3492 13.75 24.8723 13.75 24.375C13.75 23.8777 13.9475 23.4008 14.2992 23.0492C14.6508 22.6975 15.1277 22.5 15.625 22.5C16.6162 22.5 17.7137 22.3562 18.3837 23.2612C20.0037 22.49 21.25 20.8613 21.25 18.75V11.25C21.25 9.5924 20.5915 8.00269 19.4194 6.83058C18.2473 5.65848 16.6576 5 15 5C13.3424 5 11.7527 5.65848 10.5806 6.83058C9.40848 8.00269 8.75 9.5924 8.75 11.25V19.0625C8.75 19.6427 8.51953 20.1991 8.1093 20.6093C7.69906 21.0195 7.14266 21.25 6.5625 21.25C5.48506 21.25 4.45175 20.822 3.68988 20.0601C2.92801 19.2983 2.5 18.2649 2.5 17.1875V16.875C2.49973 15.8228 2.8787 14.8057 3.56744 14.0102C4.25619 13.2147 5.20856 12.6941 6.25 12.5437V11.25Z" />
                            </svg>
                            <span className="hidden lg:block text-[15.5px] font-semibold tracking-wide uppercase">Support</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Secondary Links Bar */}
            <div
                className="bg-white w-full sticky top-0 z-[100] border-b border-gray-100"
                onMouseLeave={handleMouseLeave}
            >
                {/* Main Nav Container */}
                <div className="w-full py-4 flex justify-center bg-white relative z-[100]">
                    <div className="max-w-[1480px] w-full flex items-center justify-between px-6">
                        {/* Centered Navigation Links with Omni-Search */}
                        <div className="flex-1 flex justify-center items-center relative w-full h-full">

                            {/* Navigation Links and Trigger */}
                            <nav className={`hidden lg:flex items-center space-x-10 lg:space-x-14 w-full justify-center transition-all duration-300 ease-in-out ${isSearchExpanded ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100 scale-100'}`}>
                                {/* ALL TOOLS Menu */}
                                <div
                                    className="h-full flex items-center py-2 relative"
                                    onMouseEnter={() => handleMouseEnter('ALL TOOLS')}
                                >
                                    <Link
                                        href="/products"
                                        onClick={(e) => {
                                            if (window.innerWidth < 1024) {
                                                e.preventDefault();
                                                setActiveCategory(activeCategory === 'ALL TOOLS' ? null : 'ALL TOOLS');
                                            }
                                        }}
                                        className={`text-black text-[15.7px] font-bold uppercase tracking-widest transition-colors ${activeCategory === 'ALL TOOLS' ? 'text-brand-orange' : 'hover:text-brand-orange'}`}
                                    >
                                        ALL TOOLS
                                    </Link>
                                </div>

                                {/* Existing Featured Categories */}
                                {Object.keys(NAV_DATA).map((category) => (
                                    <div
                                        key={category}
                                        className="h-full flex items-center py-2 relative"
                                        onMouseEnter={() => handleMouseEnter(category)}
                                    >
                                        <Link
                                            href={`/products/${category.toLowerCase().replace(/ /g, '-')}`}
                                            onClick={(e) => {
                                                // On smaller screens, prevent navigation and toggle dropdown instead
                                                if (window.innerWidth < 1024) {
                                                    e.preventDefault();
                                                    setActiveCategory(activeCategory === category ? null : category);
                                                }
                                            }}
                                            className={`text-black text-[15.7px] font-bold uppercase tracking-widest transition-colors ${activeCategory === category ? 'text-brand-orange' : 'hover:text-brand-orange'}`}
                                        >
                                            {category}
                                        </Link>
                                    </div>
                                ))}

                                {/* Search Trigger Icon as last item */}
                                <button
                                    className="flex items-center py-2 text-black hover:text-brand-orange transition-colors focus:outline-none"
                                    onClick={() => {
                                        setActiveCategory(null);
                                        setIsSearchExpanded(true);
                                        setTimeout(() => searchInputRef.current?.focus(), 150);
                                    }}
                                    aria-label="Open Search"
                                >
                                    <svg className="w-[18px] h-[18px] stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </button>
                            </nav>

                            {/* Expanded Search Bar Container */}
                            <div
                                className={`absolute top-1/2 left-1/2 flex items-center transition-all duration-400 ease-out z-10 overflow-hidden bg-gray-100 px-6 rounded-full border border-brand-orange ring-2 ring-brand-orange/20 h-[50px] ${isSearchExpanded
                                    ? 'w-full max-w-3xl opacity-100 -translate-x-1/2 -translate-y-1/2'
                                    : 'w-[50px] opacity-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none'
                                    }`}
                            >
                                <div className="flex-shrink-0 flex items-center justify-center w-[20px] h-[20px] text-brand-orange mr-3">
                                    <svg className="stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </div>

                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    placeholder="What are you looking for?"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="bg-transparent outline-none w-full text-[16.5px] placeholder-gray-500 font-medium text-black h-full py-2"
                                />

                                <div className={`flex items-center justify-center transition-opacity duration-300 ml-2 ${isSearchExpanded && searchQuery ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="text-gray-400 hover:text-brand-orange transition-colors"
                                    >
                                        <svg className="w-[18px] h-[18px]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Close 'X' Button on Far Right */}
                            <div className={`absolute right-0 top-1/2 -translate-y-1/2 flex items-center transition-all duration-500 ease-out ${isSearchExpanded ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-4 pointer-events-none z-0'}`}>
                                <button
                                    className="w-10 h-10 flex items-center justify-center rounded-full text-black hover:bg-brand-orange hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                                    onClick={() => {
                                        setIsSearchExpanded(false);
                                        setSearchQuery("");
                                    }}
                                    aria-label="Close Search"
                                >
                                    <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Apple-Style Dropdown Panel for Categories */}
                <div
                    className={`absolute top-[100%] left-0 w-full bg-white grid transition-all duration-300 ease-in-out z-[90] border-t ${(activeCategory && !isSearchExpanded) ? 'grid-rows-[1fr] border-gray-100 shadow-lg' : 'grid-rows-[0fr] border-transparent shadow-none'
                        }`}
                    onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}
                >
                    <div className="overflow-hidden">
                        {/* Inner Container: Scrollable horizontally, centered when width allows */}
                        <div className="w-full mx-auto overflow-x-auto [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-transparent">
                            {activeCategory === 'ALL TOOLS' ? (
                                <div className="max-w-[1480px] mx-auto px-6 py-12 flex divide-x divide-gray-200">
                                    {ALL_TOOLS_CATEGORIES.map((section) => (
                                        <div key={section.title} className="flex-1 min-w-[220px] px-8 lg:px-12 first:pl-0">
                                            <h3 className="text-[15px] font-black uppercase text-brand-orange tracking-widest mb-6">{section.title}</h3>
                                            <ul className="space-y-4">
                                                {section.items.map((item) => (
                                                    <li key={item}>
                                                        <a href="#" className="text-[14.5px] font-bold text-brand-black hover:text-brand-orange transition-colors">{item}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                    {/* Promotional Callout block */}
                                    <div className="hidden xl:flex flex-col flex-1 max-w-[360px] pl-8 lg:pl-12">
                                        <div className="relative p-8 border border-gray-100 flex flex-col items-start justify-center text-left h-full overflow-hidden group/promo">
                                            <Image
                                                src="/images/Hero-3.JPG"
                                                alt="Master Mechanics Sets"
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover/promo:scale-105 object-center"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

                                            <div className="relative z-10 w-full flex flex-col h-full justify-end">
                                                <span className="text-xl font-black uppercase text-white mb-3 leading-tight">Master Mechanics Sets</span>
                                                <p className="text-[13.5px] font-semibold text-gray-200 mb-8 leading-snug">Equip your entire shop with comprehensive PRO tool sets starting under $500.</p>
                                                <a href="#" className="relative inline-flex items-center justify-center bg-brand-orange px-8 py-4 overflow-hidden group w-full text-center">
                                                    <span className="absolute inset-y-0 -left-[200%] block w-[200%] bg-white transition-all duration-500 ease-out skew-x-[30deg] origin-bottom group-hover:left-4"></span>
                                                    <span className="relative z-10 w-full text-center font-bold text-white transition-colors duration-300 ease-in-out group-hover:text-brand-black uppercase tracking-widest text-[13px]">
                                                        Shop Sets
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="max-w-[1480px] min-w-max mx-auto px-6 py-8 flex justify-center gap-x-6 gap-y-8 snap-x snap-mandatory pb-8">
                                    {activeCategory && !isSearchExpanded && NAV_DATA[activeCategory]?.map((product, index) => (
                                        <Link href={product.href} key={index} className="flex flex-col items-center group w-[120px] flex-shrink-0 snap-center">
                                            {/* Image Container */}
                                            <div className="w-[100px] h-[100px] relative mb-4 transition-transform duration-300 group-hover:-translate-y-2">
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>

                                            {/* Product Title */}
                                            <div className="text-black text-[12.5px] font-semibold text-center leading-snug group-hover:text-brand-orange transition-colors">
                                                {product.name}
                                            </div>

                                            {/* New Badge */}
                                            {product.isNew && (
                                                <div className="text-[#BF4D00] text-[11px] font-bold mt-1 tracking-wider uppercase">
                                                    New
                                                </div>
                                            )}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Omni Search Dropdown Panel */}
                <div
                    className={`absolute top-[100%] left-0 w-full bg-white grid transition-all duration-300 ease-in-out z-[91] border-t ${isSearchExpanded ? 'grid-rows-[1fr] border-gray-100 shadow-xl' : 'grid-rows-[0fr] border-transparent shadow-none'
                        }`}
                >
                    <div className="overflow-hidden w-full max-w-[1480px] mx-auto px-6">
                        <div className="py-8 pb-10 flex flex-col items-center">

                            {/* Guided Hero Wizard - Advance Auto Style */}
                            <div className="w-full max-w-5xl mx-auto bg-gray-50 border border-gray-200 text-brand-black rounded-md p-4 flex flex-col xl:flex-row items-center justify-between mb-8 shadow-sm gap-4 xl:gap-0">
                                {/* Left Side: Text */}
                                <div className="flex items-center gap-4 w-full xl:w-auto xl:pr-6">
                                    <div className="flex flex-col text-left">
                                        <span className="text-xl font-black uppercase tracking-wide leading-none mb-1">Find Your Perfect Fit</span>
                                        <span className="text-[13px] font-semibold text-gray-500 tracking-wide">Tell us what you're working on to see exact fit tools</span>
                                    </div>
                                </div>

                                {/* Center: Dropdowns/Inputs */}
                                <div className="flex items-center gap-2 w-full xl:w-auto flex-1">
                                    <select className="flex-1 h-[42px] px-3 font-semibold rounded text-[13px] text-gray-700 border border-transparent focus:border-black outline-none bg-white shadow-sm cursor-pointer appearance-none">
                                        <option value="">Select Industry</option>
                                        <option value="automotive">Automotive</option>
                                        <option value="aerospace">Aerospace</option>
                                        <option value="agriculture">Agriculture</option>
                                        <option value="diesel">Diesel</option>
                                        <option value="power">Power & Utility</option>
                                        <option value="transportation">Transportation</option>
                                    </select>
                                    <select className="flex-1 h-[42px] px-3 font-semibold rounded text-[13px] text-gray-700 border border-transparent focus:border-black outline-none bg-white shadow-sm cursor-pointer appearance-none">
                                        <option value="">Select Category</option>
                                        <option value="hand">Hand Tools</option>
                                        <option value="storage">Storage</option>
                                        <option value="diagnostics">Diagnostics</option>
                                    </select>
                                    <div className="flex-[1.2] relative">
                                        <input type="text" placeholder="What are you working on?" className="w-full h-[42px] px-3 rounded text-[13.5px] font-semibold text-gray-800 placeholder-gray-500 border border-transparent focus:border-black outline-none bg-white shadow-sm" />
                                    </div>
                                </div>
                            </div>

                            {/* Search Results Header */}
                            <div className="w-full max-w-4xl flex justify-between items-end mb-8 border-b border-gray-100 pb-2">
                                <h3 className="text-sm font-bold tracking-widest uppercase text-gray-500">
                                    {searchQuery ? `Results for "${searchQuery}"` : "Trending Searches"}
                                </h3>
                                {searchResults.length > 0 && (
                                    <span className="text-xs font-semibold text-brand-orange">
                                        {searchResults.length} Products Found
                                    </span>
                                )}
                            </div>

                            {/* Search Results Grid */}
                            <div className="w-full max-w-4xl flex justify-center gap-x-8 gap-y-8 flex-wrap">
                                {searchResults.length > 0 ? (
                                    searchResults.map((product, index) => (
                                        <Link href="#" key={index} className="flex flex-col items-center group w-[120px] ml-4 transition-opacity duration-300 animate-in fade-in slide-in-from-bottom-2">
                                            <div className="w-[100px] h-[100px] relative mb-4 transition-transform duration-300 group-hover:-translate-y-2">
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                            <div className="text-black text-[12.5px] font-semibold text-center leading-snug group-hover:text-brand-orange transition-colors">
                                                {product.name}
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    <div className="w-full text-center py-10 text-gray-400 font-medium">
                                        No products found for "{searchQuery}". Try a different term or SKU.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Where to Buy Modal */}
            <WhereToBuyModal isOpen={isWhereToBuyOpen} onClose={() => setIsWhereToBuyOpen(false)} />
        </header>
    );
}

'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const carouselItems = [
    {
        title: "MEGAMOD 873 Tool Storage Set",
        image: "/images/nav/MEGAMOD/873.png",
        link: "/products/megamod"
    },
    {
        title: "5\" Handheld Bi-Directional Diagnostic Tool",
        image: "/images/handheld-diagnostics.jpg",
        link: "/products/diagnostics"
    },
    {
        title: "Hi-Viz Modular Tool Set SAE Wrenches",
        image: "/images/wrench-tray.jpg",
        link: "/products/hiviz"
    },
    {
        title: "114 Pc SAE/Metric Ratcheting Tap & Die Set",
        image: "/images/feat-1.jpg",
        link: "/products/82812"
    },
    {
        title: "20 Pc Phillips/Slotted/Torx Driver Set",
        image: "/images/feat-4.jpg",
        link: "/products/80066H"
    },
    {
        title: "4 Pc 90-Tooth Flex Head Teardrop Ratchet Set",
        image: "/images/feat-5.jpg",
        link: "/products/81230T"
    }
];

export default function NewLaunchesCarousel() {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(carouselItems.length / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    };

    return (
        <section className="w-full py-10 px-6 font-sans bg-white">
            <div className="max-w-[1480px] mx-auto relative w-full pt-4">

                {/* Headers */}
                <div className="text-center mb-16">
                    <p className="text-xl md:text-2xl font-bold tracking-widest mb-3 font-sans text-brand-black uppercase">
                        New Launches
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black text-brand-black uppercase tracking-tight">
                        Fresh Gear For The Shop
                    </h2>
                </div>

                {/* Navigation Arrows positioned relative to entire section content block */}
                <button
                    onClick={prevPage}
                    disabled={currentPage === 0}
                    className={`hidden md:flex absolute left-4 xl:-left-6 top-[50%] -translate-y-[50%] w-14 h-14 rounded-full border-2 shadow-sm bg-white items-center justify-center transition-all z-20 ${currentPage === 0
                        ? 'border-gray-100 opacity-30 cursor-not-allowed'
                        : 'border-gray-200 hover:border-brand-orange hover:text-brand-orange cursor-pointer'
                        }`}
                >
                    <svg className="w-6 h-6 currentColor" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>

                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages - 1}
                    className={`hidden md:flex absolute right-4 xl:-right-6 top-[50%] -translate-y-[50%] w-14 h-14 rounded-full border-2 shadow-sm bg-white items-center justify-center transition-all z-20 ${currentPage === totalPages - 1
                        ? 'border-gray-100 opacity-30 cursor-not-allowed'
                        : 'border-gray-200 hover:border-brand-orange hover:text-brand-orange cursor-pointer'
                        }`}
                >
                    <svg className="w-6 h-6 currentColor" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>

                {/* Slider Container relative boundary */}
                <div className="relative mx-auto max-w-[1400px]">

                    {/* Carousel Mask */}
                    <div className="overflow-hidden w-full pb-12 -mx-6 px-6 pt-4">
                        {/* Shifting Row */}
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentPage * 100}%)` }}
                        >
                            {carouselItems.map((item, index) => (
                                // Each item is explicitly 1/3 of the container width on desktop, full width on mobile
                                <div key={index} className="flex-shrink-0 w-full md:w-1/3 px-6">
                                    <div className="flex flex-col group bg-white relative pt-6 hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:-translate-y-2 hover:z-20 transition-all duration-300 rounded-xl h-full">

                                        {/* Product Image */}
                                        <div className="w-full h-[320px] relative bg-white flex items-center justify-center overflow-hidden mb-8 rounded-t-xl p-6 mix-blend-multiply">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                unoptimized={true}
                                                className="object-contain scale-95 group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>

                                        {/* Product Info */}
                                        <div className="flex flex-col flex-1 items-center px-4 pb-12">
                                            <h3 className="text-brand-black font-bold text-2xl leading-tight text-center mb-10 min-h-[60px] group-hover:text-brand-orange transition-colors md:px-4">
                                                {item.title}
                                            </h3>

                                            {/* Standardized Interactive CTA Button */}
                                            <Link
                                                href={item.link}
                                                className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden text-[15px] transition-all bg-brand-orange group/btn shadow-sm w-[220px] mt-auto"
                                            >
                                                {/* Diagonal sliding background (sweeps from bottom-left to top-right, leaves orange sliver) */}
                                                <span className="absolute inset-y-0 -left-[200%] block w-[200%] bg-brand-black transition-all duration-500 ease-out skew-x-[30deg] origin-bottom group-hover/btn:left-2"></span>
                                                {/* Text overlay */}
                                                <span className="relative z-10 w-full text-center font-bold text-brand-black transition-colors duration-300 ease-in-out group-hover/btn:text-white uppercase tracking-widest">
                                                    Buy Now
                                                </span>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center items-center gap-3 w-full relative z-20 mx-auto -mt-2">
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            className={`w-3.5 h-3.5 rounded-full focus:outline-none transition-colors border-2 ${index === currentPage
                                ? 'bg-gray-300 border-gray-300'
                                : 'bg-transparent border-gray-200 hover:border-gray-400'
                                }`}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

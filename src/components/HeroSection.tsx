'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const carouselSlides = [
    {
        image: '/images/Hero-1.png',
        alt: 'GEARWRENCH Smart Diagnostics',
        tagline: 'Discover',
        headline: 'SMART DIAGNOSTICS',
        subline: 'Built for techs who want more functions without subscription fees',
        ctaText: 'LEARN MORE',
        ctaLink: '/products/smart-diagnostics'
    },
    {
        image: '/images/Hero-2.jpg',
        alt: 'GEARWRENCH Hero 2',
        tagline: 'Discover',
        headline: 'SMART DIAGNOSTICS',
        subline: 'Built for techs who want more functions without subscription fees',
        ctaText: 'LEARN MORE',
        ctaLink: '/products/smart-diagnostics'
    },
    {
        image: '/images/Hero-3.JPG',
        alt: 'GEARWRENCH Hero 3',
        tagline: 'Discover',
        headline: 'SMART DIAGNOSTICS',
        subline: 'Built for techs who want more functions without subscription fees',
        ctaText: 'LEARN MORE',
        ctaLink: '/products/smart-diagnostics'
    }
];

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-[640px] bg-brand-black overflow-hidden font-sans">
            {carouselSlides.map((slide, index) => {
                const isCurrent = index === currentIndex;
                const isPrev = index === (currentIndex - 1 + carouselSlides.length) % carouselSlides.length;
                const isNext = index === (currentIndex + 1) % carouselSlides.length;

                return (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-transform ease-in-out ${isCurrent
                            ? 'translate-x-0 z-10 duration-700'
                            : isPrev
                                ? '-translate-x-full z-0 duration-700'
                                : 'translate-x-full z-[-1] duration-0'
                            }`}
                    >
                        {/* Background Image & Gradient Overlay */}
                        <div className="absolute inset-0 z-0 bg-black">
                            <Image
                                src={slide.image}
                                alt={slide.alt}
                                fill
                                className="object-cover object-center"
                                priority={index === 0}
                            />
                            {/* 75% Horizontal Gradient Overlay (60% to 0) */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent w-3/4"></div>
                        </div>

                        {/* Foreground Content */}
                        <div className="relative z-10 h-full max-w-[1480px] mx-auto px-6 w-full flex flex-col justify-center">
                            <div className="max-w-3xl text-left text-white mt-12 relative">
                                <div className="text-brand-orange text-xl md:text-2xl font-bold tracking-[0.2em] mb-2 uppercase">
                                    {slide.tagline}
                                </div>
                                <h1 className="text-6xl md:text-[81px] font-extrabold uppercase tracking-normal leading-none mb-4 text-white">
                                    {slide.headline}
                                </h1>
                                <p className="text-xl md:text-2xl font-light mb-10 text-white">
                                    {slide.subline}
                                </p>
                                <Link
                                    href={slide.ctaLink}
                                    className="relative inline-flex items-center justify-center px-12 py-4 overflow-hidden text-xl transition-all bg-brand-orange group shadow-lg"
                                >
                                    {/* Diagonal sliding background (sweeps from bottom-left to top-right, leaves orange sliver) */}
                                    <span className="absolute inset-y-0 -left-[200%] block w-[200%] bg-brand-black transition-all duration-500 ease-out skew-x-[30deg] origin-bottom group-hover:left-4"></span>
                                    {/* Text overlay */}
                                    <span className="relative z-10 w-full text-center font-bold text-brand-black transition-colors duration-300 ease-in-out group-hover:text-white uppercase tracking-widest">
                                        {slide.ctaText}
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* Indicators */}
            <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-3">
                {carouselSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-4 h-4 rounded-full transition-colors border border-white focus:outline-none ${index === currentIndex ? 'bg-white/30' : 'bg-transparent hover:bg-white/10'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const reviews = [
    {
        name: "Garrett",
        platform: "The Home Depot",
        platformLogo: "/images/THD.png",
        stars: 5,
        text: "Awesome quality, great set all around. Highly recommend to anyone just getting into wrenching or someone who just wants a mobile set."
    },
    {
        name: "Cevin Auto Services",
        platform: "The Home Depot",
        platformLogo: "/images/THD.png",
        stars: 4,
        text: "At our shop we love GEARWRENCH products!"
    },
    {
        name: "Thomas Hood",
        platform: "Amazon",
        platformLogo: "/images/amz.png",
        stars: 5,
        text: "Have had this set of wrenches for a few years now and they're still good wrenches. I use them all the time."
    }
];

export default function CustomerReviews() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // 3 distinct groups of 3 reviews = 9 total boxes
    const carouselData = [...reviews, ...reviews, ...reviews];

    // Math for group centering
    // card: 400px | gap: 24px (gap-6)
    // Group Width: 3 cards (1200) + 2 gaps (48) = 1248px
    // Center offset of a Group: 624px
    // Stride to next Group: Group Width (1248) + Gap (24) = 1272px

    // Auto-rotate every 5 seconds, sliding from LEFT to RIGHT (increasing index 0 -> 1 -> 2 -> 0)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((current) => (current + 1) % 3);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full py-24 pb-32 flex flex-col items-center bg-[#0d0d0d] overflow-hidden font-sans">
            {/* Background Image - Mechanics hands */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/review.jpg"
                    alt="Mechanic working with GEARWRENCH"
                    fill
                    className="object-cover object-center opacity-40 mix-blend-luminosity"
                />
            </div>

            <div className="relative z-10 w-full mb-16">
                {/* Header Title locked to left rail */}
                <div className="max-w-[1480px] mx-auto px-6 w-full text-left">
                    <h2 className="text-4xl md:text-5xl lg:text-[60px] font-black text-white uppercase tracking-tight drop-shadow-xl inline-block m-0">
                        What Our Customers Are Saying
                    </h2>
                </div>
            </div>

            {/* Continuous Flex Track Carousel Stage */}
            {/* We force the container to be 100vw so 50% translation is perfectly the center of the screen, overcoming the 1480px parent limit */}
            <div className="relative w-[100vw] min-h-[500px] overflow-hidden">
                <div
                    className="flex gap-6 w-max transition-transform duration-[1200ms] ease-in-out absolute left-0"
                    style={{ transform: `translateX(calc(50vw - 624px - ${currentIndex * 1272}px))` }}
                >
                    {carouselData.map((review, i) => {
                        const groupOfThisCard = Math.floor(i / 3);
                        const isActive = groupOfThisCard === currentIndex;

                        return (
                            <div
                                key={i}
                                className={`w-[400px] h-[400px] bg-white shadow-2xl p-10 flex flex-col relative transition-all duration-[1200ms] ease-in-out flex-shrink-0
                                    ${isActive ? 'opacity-100 translate-y-0 scale-100 z-30' : 'opacity-50 translate-y-12 scale-95 z-10'}
                                `}
                            >
                                {/* Top Header Section: Name left, Logo + Stars right */}
                                <div className="flex justify-between items-start mb-10 w-full">
                                    <h3 className="font-black text-[30px] leading-[0.8] text-brand-black tracking-tight max-w-[60%]">
                                        {review.name}
                                    </h3>

                                    {/* Right Side Stack: Platform Logo -> Stars */}
                                    <div className="flex flex-col items-end flex-shrink-0 pt-1">
                                        <div className="relative w-[204px] h-[76px] mb-3">
                                            <Image
                                                src={review.platformLogo}
                                                alt={review.platform}
                                                fill
                                                className="object-contain object-right"
                                                unoptimized={true}
                                            />
                                        </div>
                                        {/* Star Rating Right Aligned */}
                                        <div className="flex space-x-1 justify-end w-full">
                                            {[...Array(5)].map((_, starIdx) => (
                                                <svg key={starIdx} className={`w-[18px] h-[18px] ${starIdx < review.stars ? 'text-brand-orange fill-current' : 'text-gray-300 stroke-current fill-transparent'} stroke-2`} viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Quote Content */}
                                <div className="relative flex-1 mt-6">
                                    {/* Giant stylized Quote marks */}
                                    <span className="text-brand-black text-[90px] font-serif font-black absolute -top-12 -left-2 tracking-tighter leading-none">&ldquo;</span>

                                    {/* Dotted border separator */}
                                    <div className="border-b-[4px] border-dotted border-gray-300 ml-12 mb-6 w-[75%]"></div>

                                    <p className="text-brand-black text-xl leading-relaxed font-sans font-medium relative z-10">
                                        {review.text}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

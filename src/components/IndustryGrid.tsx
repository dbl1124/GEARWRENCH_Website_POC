import Image from 'next/image';
import Link from 'next/link';

const industries = [
    { title: "Automotive", desc: "Something about agriculture", image: "/images/Hero-3.JPG", link: "/industry/auto", scaleClass: "scale-150 group-hover:scale-[1.55]" },
    { title: "Aerospace", desc: "Something about agriculture", image: "/images/aerospace.png", link: "/industry/aerospace" },
    { title: "Agriculture", desc: "Something about agriculture", image: "/images/agriculture.jpg", link: "/industry/agriculture", scaleClass: "scale-100 group-hover:scale-105 object-[20%_center]" },
    { title: "Diesel", desc: "Something about agriculture", image: "/images/diesel.png", link: "/industry/diesel" },
    { title: "Power & Utility", desc: "Something about agriculture", image: "/images/PU.jpg", link: "/industry/power" },
    { title: "Transportation", desc: "Something about agriculture", image: "/images/transport.jpg", link: "/industry/transport" },
];

export default function IndustryGrid() {
    return (
        <section className="w-full py-20 bg-white font-sans overflow-hidden">
            <div className="max-w-[1480px] mx-auto px-6 text-center mb-16">
                <p className="text-xl md:text-2xl font-bold tracking-widest mb-3 text-brand-black uppercase">
                    Shop By Industry
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-brand-black uppercase tracking-tight m-0">
                    The Right Tool For Every Job
                </h2>
            </div>

            <div className="relative w-full max-w-[1920px] mx-auto group/carousel">
                {/* Native Horizontal Scroll Container with Custom Scrollbar */}
                <div
                    className="flex gap-4 xl:gap-6 overflow-x-auto snap-x snap-mandatory industry-scrollbar pb-8 pt-4 px-6 xl:px-[calc((100vw-1480px)/2+1.5rem)] 2xl:px-[calc((1920px-1480px)/2+1.5rem)]"
                >
                    {/* Custom Styled WebKit Scrollbar */}
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        .industry-scrollbar::-webkit-scrollbar {
                            height: 6px;
                        }
                        .industry-scrollbar::-webkit-scrollbar-track {
                            background: #e5e7eb;
                            border-radius: 4px;
                            /* Create a virtual margin for the track to match the 1480px layout bounds */
                            margin: 0 calc(max(1.5rem, (100vw - 1480px)/2 + 1.5rem));
                        }
                        @media (min-width: 1920px) {
                            .industry-scrollbar::-webkit-scrollbar-track {
                                margin: 0 calc((1920px - 1480px)/2 + 1.5rem);
                            }
                        }
                        .industry-scrollbar::-webkit-scrollbar-thumb {
                            background: #9ca3af;
                            border-radius: 4px;
                        }
                        .industry-scrollbar::-webkit-scrollbar-thumb:hover {
                            background: #6b7280;
                        }
                        /* Hide native scroll arrows (buttons) on Windows/WebKit */
                        .industry-scrollbar::-webkit-scrollbar-button {
                            display: none;
                        }
                        /* Firefox support */
                        .industry-scrollbar {
                            scrollbar-width: thin;
                            scrollbar-color: #9ca3af #e5e7eb;
                        }
                    `}} />

                    {industries.map((item, index) => (
                        <Link
                            href={item.link}
                            key={index}
                            // 352px width ensures exactly 4 cards fit evenly into a 1480px container with 24px gaps
                            className="flex-shrink-0 snap-center xl:snap-start w-[80vw] sm:w-[calc(50vw-24px)] lg:w-[352px] group relative block h-[540px] overflow-hidden bg-brand-black"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className={`object-cover transition-transform duration-700 opacity-90 group-hover:opacity-100 ${item.scaleClass || 'scale-100 group-hover:scale-105'
                                    }`}
                            />
                            {/* Top dark gradient to make text readable against random images */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-transparent pointer-events-none h-1/2" />

                            {/* Text Container aligned top left */}
                            <div className="absolute inset-x-0 top-0 p-6 flex flex-col justify-start items-start pointer-events-none z-10">
                                <h3 className="text-brand-orange font-bold text-2xl uppercase tracking-normal leading-none mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-white text-base font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

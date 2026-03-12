import Image from 'next/image';
import Link from 'next/link';

const categories = [
    { title: "Wrenches", image: "/images/wrench-cat.png", link: "/category/wrenches", imageClass: "object-cover scale-100 group-hover:scale-105" },
    { title: "Sets", image: "/images/MHT-cat.jpg", link: "/category/sets", imageClass: "object-contain scale-[2.0] group-hover:scale-[2.1] -translate-y-[60px] group-hover:-translate-y-[65px]" },
    { title: "Sockets", image: "/images/socket-cat.jpg", link: "/category/sockets", imageClass: "object-contain scale-[2.0] group-hover:scale-[2.1] -translate-y-[60px] group-hover:-translate-y-[65px]" },
    { title: "Ratchets", image: "/images/ratch.png", link: "/category/ratchets", imageClass: "object-cover object-bottom scale-100 group-hover:scale-105" },
    { title: "Extraction", image: "/images/extract-cat.jpg", link: "/category/extraction", imageClass: "object-contain scale-[2.0] group-hover:scale-[2.1] translate-x-[10px] group-hover:translate-x-[5px] -translate-y-[60px] group-hover:-translate-y-[65px]" },
    { title: "Pliers", image: "/images/plier-cat.jpg", link: "/category/pliers", imageClass: "object-contain scale-[2.6] group-hover:scale-[2.7] translate-x-[50px] group-hover:translate-x-[45px] -translate-y-[80px] group-hover:-translate-y-[85px]" },
];

export default function FeaturedCategories() {
    return (
        <section className="w-full py-16 bg-white font-sans overflow-hidden">
            <div className="max-w-[1480px] mx-auto px-6 mb-10 w-full">
                {/* Header left-aligned to the 1480px global rail, wrapped in inline-block so underline matches its width exactly */}
                <div className="inline-block">
                    <h2 className="text-3xl md:text-4xl font-black text-brand-black uppercase tracking-tight m-0">
                        Featured Categories
                    </h2>
                    {/* Thick Orange Underline Accent filling width of text */}
                    <div className="h-1.5 bg-brand-orange mt-2 w-full" />
                </div>
            </div>

            <div className="relative w-full max-w-[1480px] mx-auto px-6 group/carousel">
                {/* Native Horizontal Scroll Container with Custom Scrollbar */}
                <div
                    className="flex gap-4 xl:gap-6 overflow-x-auto snap-x snap-mandatory featured-scrollbar pb-8 pt-4"
                >
                    {/* Custom Styled WebKit Scrollbar */}
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        .featured-scrollbar::-webkit-scrollbar {
                            height: 6px;
                        }
                        .featured-scrollbar::-webkit-scrollbar-track {
                            background: #e5e7eb;
                            border-radius: 4px;
                        }
                        .featured-scrollbar::-webkit-scrollbar-thumb {
                            background: #9ca3af;
                            border-radius: 4px;
                        }
                        .featured-scrollbar::-webkit-scrollbar-thumb:hover {
                            background: #6b7280;
                        }
                        .featured-scrollbar::-webkit-scrollbar-button {
                            display: none;
                        }
                        .featured-scrollbar {
                            scrollbar-width: thin;
                            scrollbar-color: #9ca3af #e5e7eb;
                        }
                    `}} />

                    {categories.map((item, index) => (
                        <Link
                            href={item.link}
                            key={index}
                            className="flex-shrink-0 snap-start w-[75vw] sm:w-[calc(33vw-24px)] lg:w-[240px] group relative block h-[410px] bg-[#F3F3F3] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
                        >
                            {/* Product Image wrapped in mix-blend-multiply to drop out white photo backgrounds into the #F3F3F3 container, per E-commerce workflow */}
                            <div className="absolute top-0 inset-x-0 bottom-0 mix-blend-multiply flex items-center justify-center p-4">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    unoptimized={true}
                                    className={`${item.imageClass} transition-transform duration-700`}
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>

                            {/* Text Container aligned bottom left */}
                            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end items-start pointer-events-none z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                <h3 className="text-brand-black font-black text-2xl uppercase tracking-tight leading-none mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-brand-black/90 text-sm font-bold tracking-widest uppercase">
                                    Explore
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

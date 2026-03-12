import Image from 'next/image';
import Link from 'next/link';

const products = [
    { title: "114 Pc SAE/Metric Ratcheting Tap & Die Set", sku: "82812", image: "/images/feat-1.jpg", link: "/products/82812" },
    { title: "6 Pc PITBULL Dipped Handle Mixed Plier Set", sku: "82204-06", image: "/images/feat-3.jpg", link: "/products/82204-06" },
    { title: "20 Pc Phillips/Slotted/Torx Dual Material Driver Set", sku: "80066H", image: "/images/feat-4.jpg", link: "/products/80066H" },
    { title: "4 Pc 90-Tooth Flex Head Teardrop Ratchet Set", sku: "81230T", image: "/images/feat-5.jpg", link: "/products/81230T" },
    { title: "114 Pc SAE/Metric Ratcheting Tap & Die Set", sku: "82812", image: "/images/feat-1.jpg", link: "/products/82812" },
    { title: "6 Pc PITBULL Dipped Handle Mixed Plier Set", sku: "82204-06", image: "/images/feat-3.jpg", link: "/products/82204-06" },
    { title: "20 Pc Phillips/Slotted/Torx Dual Material Driver Set", sku: "80066H", image: "/images/feat-4.jpg", link: "/products/80066H" },
    { title: "4 Pc 90-Tooth Flex Head Teardrop Ratchet Set", sku: "81230T", image: "/images/feat-5.jpg", link: "/products/81230T" }
];

export default function FeaturedProducts() {
    return (
        <section className="w-full py-16 bg-white font-sans overflow-hidden">
            <div className="max-w-[1480px] mx-auto px-6 w-full">

                {/* Header left-aligned to the 1480px global rail, wrapped in inline-block so underline matches its width exactly */}
                <div className="mb-10 w-full text-left">
                    <div className="inline-block">
                        <h2 className="text-3xl md:text-4xl font-black text-brand-black uppercase tracking-tight m-0">
                            Featured Products
                        </h2>
                        {/* Thick Orange Underline Accent filling width of text */}
                        <div className="h-1.5 bg-brand-orange mt-2 w-full" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 pb-12">
                    {products.map((product, index) => (
                        <div key={index} className="flex flex-col group cursor-pointer h-full">

                            {/* Image Container with #F3F3F3 background */}
                            <div className="w-full aspect-square bg-[#F3F3F3] relative overflow-hidden mb-6 transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)]">

                                {/* Precision Highlight: Bottom Brand Orange Border Reveal */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-orange w-0 mx-auto group-hover:w-full transition-all duration-300 ease-out z-20" />

                                {/* Image uses mix-blend-multiply to drop out white photo backgrounds */}
                                <div className="absolute inset-0 p-8 mix-blend-multiply flex items-center justify-center">
                                    <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            fill
                                            unoptimized={true}
                                            className="object-contain"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        />
                                    </div>
                                </div>
                            </div>

                            <Link href={product.link} className="flex flex-col flex-1 pl-1">
                                <h3 className="text-brand-black font-bold text-[17px] leading-snug group-hover:text-brand-orange transition-colors">
                                    {product.title}
                                </h3>
                                <span className="text-gray-500 font-light tracking-wide text-[15px] mt-2 group-hover:text-brand-black transition-colors">
                                    {product.sku}
                                </span>
                            </Link>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

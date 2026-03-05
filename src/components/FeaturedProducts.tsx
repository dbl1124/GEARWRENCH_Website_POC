import Image from 'next/image';
import Link from 'next/link';

const products = [
    {
        title: "114 Pc SAE/Metric Ratcheting Tap & Die Set",
        sku: "82812",
        image: "/images/feat-1.jpg",
        link: "/products/82812"
    },
    {
        title: "6 Pc PITBULL Dipped Handle Mixed Plier Set",
        sku: "82204-06",
        image: "/images/feat-3.jpg",
        link: "/products/82204-06"
    },
    {
        title: "20 Pc Phillips/Slotted/Torx Dual Material Driver Set",
        sku: "80066H",
        image: "/images/feat-4.jpg",
        link: "/products/80066H"
    },
    {
        title: "4 Pc 90-Tooth Flex Head Teardrop Ratchet Set",
        sku: "81230T",
        image: "/images/feat-5.jpg",
        link: "/products/81230T"
    }
];

export default function FeaturedProducts() {
    return (
        <section className="w-full py-20 px-6 font-sans bg-white">
            <div className="max-w-7xl mx-auto">

                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-brand-black uppercase tracking-tight inline-block">
                        Featured Products
                    </h2>
                    <div className="w-1/3 h-1 bg-brand-orange mt-2"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="flex flex-col group cursor-pointer">

                            <div className="w-full aspect-square bg-brand-gray relative p-6 mb-4 flex items-center justify-center overflow-hidden">
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-brand-black font-bold text-lg">&gt;&gt;</span>
                                </div>
                                {/* Notice the absolute fill for standard square but Using object-contain for tools */}
                                <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            <Link href={product.link} className="flex flex-col flex-1">
                                <h3 className="text-brand-black font-bold text-lg leading-snug group-hover:text-brand-orange transition-colors">
                                    {product.title}
                                </h3>
                                <span className="text-gray-500 text-sm mt-3">{product.sku}</span>
                            </Link>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

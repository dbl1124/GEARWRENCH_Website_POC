import Image from 'next/image';
import Link from 'next/link';

const carouselItems = [
    {
        title: "7\" Wireless Bi-Directional Diagnostic Tablet",
        sku: "GWSMART07",
        image: "/images/handheld-diagnostics.jpg",
        link: "/products/gwsmart07",
        rating: 4.6,
        reviews: 21,
        description: "DIAGNOSTICS THAT BREAK ALL THE RULES! Stop nothing short of revolutionizing the way you work."
    },
    {
        title: "MEGAMOD 1268 Pc. Master Mechanics Tool Set",
        sku: "830ZZ",
        image: "/images/megamod.png",
        link: "/products/830zz",
        rating: 5.0,
        reviews: 8,
        description: "The ultimate tool set for the master mechanic. Includes everything you need."
    },
    {
        title: "114 Pc SAE/Metric Ratcheting Tap & Die Set",
        sku: "82812",
        image: "/images/wrench-tray.jpg",
        link: "/products/82812",
        rating: 4.8,
        reviews: 145,
        description: "Comprehensive tap and die set with ratcheting T-handles and adapters."
    }
];

export default function NewLaunchesCarousel() {
    return (
        <section className="w-full py-20 px-6 font-sans bg-brand-offwhite border-t-8 border-brand-orange">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12 border-b-2 border-gray-300 pb-4">
                    <h2 className="text-4xl md:text-5xl font-black text-brand-black uppercase italic tracking-tighter">
                        Fresh Gear For The Shop
                    </h2>
                    <div className="hidden md:flex space-x-2">
                        <button className="w-10 h-10 border-2 border-brand-black flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-colors">
                            <span className="font-bold font-sans">&lt;</span>
                        </button>
                        <button className="w-10 h-10 bg-brand-black border-2 border-brand-black text-brand-orange flex items-center justify-center hover:bg-brand-orange hover:text-brand-black transition-colors">
                            <span className="font-bold font-sans">&gt;</span>
                        </button>
                    </div>
                </div>

                <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-8 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
                    {carouselItems.map((item, index) => (
                        <div key={index} className="flex-shrink-0 w-[350px] md:w-[400px] snap-center flex flex-col group bg-white shadow-lg relative min-h-[500px]">
                            {/* Product Image */}
                            <div className="w-full h-[250px] relative bg-white p-6 border-b border-gray-100 flex items-center justify-center overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-gray-500 font-bold text-sm tracking-widest">{item.sku}</span>
                                    <div className="flex items-center space-x-1">
                                        <span className="text-brand-orange font-bold text-sm mr-1">{item.rating}</span>
                                        <svg className="w-3 h-3 text-brand-orange fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    </div>
                                </div>
                                <h3 className="text-brand-black font-bold text-xl leading-tight mb-4 group-hover:text-brand-orange transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm font-medium leading-relaxed mb-8 flex-1">
                                    {item.description}
                                </p>
                                <Link href={item.link} className="inline-block border-2 border-brand-black text-brand-black uppercase font-bold tracking-widest text-xs px-6 py-3 hover:bg-brand-black hover:text-white transition-colors text-center mt-auto">
                                    View Product
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

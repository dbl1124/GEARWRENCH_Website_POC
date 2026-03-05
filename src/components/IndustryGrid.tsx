import Image from 'next/image';
import Link from 'next/link';

const industries = [
    { title: "Aerospace", image: "/images/aerospace.png", link: "/industry/aerospace" },
    { title: "Agriculture", image: "/images/agriculture.jpg", link: "/industry/agriculture" },
    { title: "Diesel", image: "/images/diesel.png", link: "/industry/diesel" },
    { title: "Transport", image: "/images/transport.jpg", link: "/industry/transport" },
];

export default function IndustryGrid() {
    return (
        <section className="w-full py-20 px-6 font-sans">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black text-brand-black uppercase italic tracking-tighter mb-12">
                    Shop By Industry
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industries.map((item, index) => (
                        <Link href={item.link} key={index} className="group relative block w-full h-[400px] overflow-hidden bg-brand-black cursor-pointer">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-6 flex justify-between items-end bg-gradient-to-t from-black/80 to-transparent">
                                <h3 className="text-white font-black text-2xl uppercase tracking-widest">{item.title}</h3>
                                <span className="text-brand-orange font-bold text-xl group-hover:translate-x-2 transition-transform">
                                    &gt;&gt;
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

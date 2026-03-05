import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative w-full h-[600px] flex items-center bg-brand-black overflow-hidden font-sans">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/Hero-1.png"
                    alt="GearWrench Smart Diagnostics Tablet"
                    fill
                    className="object-cover object-center opacity-80"
                    priority
                />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-xl text-white">
                    <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-6 text-brand-orange drop-shadow-lg">
                        SMART DIAGNOSTICS THAT BREAK ALL THE RULES!
                    </h1>
                    <p className="text-lg md:text-xl font-semibold mb-8 text-gray-100 drop-shadow-md">
                        The new GEARWRENCH® Smart Diagnostics tablet stops nothing short of revolutionizing the way you work.
                    </p>
                    <Link href="/products/smart-diagnostics" className="inline-block bg-brand-orange text-brand-black uppercase font-black tracking-widest text-lg px-8 py-4 hover:bg-orange-600 transition-colors shadow-lg">
                        LEARN MORE
                    </Link>
                </div>
            </div>
        </section>
    );
}

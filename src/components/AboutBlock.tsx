import Image from 'next/image';
import Link from 'next/link';

export default function AboutBlock() {
    return (
        <section className="w-full bg-brand-dark-gray text-white font-sans py-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

                {/* Left Text Content */}
                <div className="flex-1 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tight text-white drop-shadow-md">
                        WHAT WE&apos;RE ABOUT
                    </h2>
                    <div className="w-16 h-1 bg-brand-orange mb-4"></div>
                    <p className="text-gray-300 font-medium leading-relaxed max-w-lg text-lg">
                        GEARWRENCH is about more than just tools. It&apos;s about a relentless pursuit of perfection. From the moment our tools are forged to the day they land in your hands, we are driven by the mechanics who demand the absolute best.
                    </p>
                    <div className="pt-4">
                        <Link href="/about" className="inline-block border-2 border-brand-orange text-brand-orange uppercase font-bold tracking-widest text-sm px-8 py-3 hover:bg-brand-orange hover:text-brand-black transition-colors">
                            Explore More
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 relative w-full h-[400px] md:h-[500px]">
                    <Image
                        src="/images/about-1.png"
                        alt="What We're About"
                        fill
                        className="object-cover rounded-sm shadow-xl"
                    />
                </div>

            </div>
        </section>
    );
}

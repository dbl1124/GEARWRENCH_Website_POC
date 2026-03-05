import Image from 'next/image';
import Link from 'next/link';

export default function AboutBlock() {
    return (
        <section className="w-full bg-black text-white font-sans py-20 px-6">
            <div className="max-w-[1480px] mx-auto flex flex-col md:flex-row items-center gap-12">

                {/* Left Text Content */}
                <div className="w-full max-w-3xl space-y-8 flex-1 md:pl-16">
                    <div>
                        <div className="text-brand-orange text-xl md:text-2xl font-bold tracking-[0.2em] mb-2 uppercase">
                            Value
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white m-0 mb-8">
                            WHAT WE&apos;RE ABOUT
                        </h2>
                    </div>

                    <p className="text-white font-normal md:text-xl leading-relaxed max-w-md">
                        When you go with GEARWRENCH, you don&apos;t roll with Big Tool. That&apos;s because we know just okay doesn&apos;t cut it. From our first ratchet wrench design to our full line-up today, we make tools for professionals that push the status quo. Just like you.
                    </p>

                    <div className="pt-2">
                        <Link
                            href="/about"
                            className="inline-flex items-center text-brand-orange text-xl font-bold uppercase tracking-widest hover:text-white transition-colors"
                        >
                            Learn More &gt;&gt;
                        </Link>
                    </div>
                </div>

                {/* Right Images Container */}
                <div className="w-full md:w-7/12 flex flex-row gap-4 md:gap-6 h-[400px] md:h-[600px] md:pr-16">
                    <div className="flex-1 relative h-full">
                        <Image
                            src="/images/about-1.png"
                            alt="GearWrench Mechanic"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex-1 relative h-full">
                        <Image
                            src="/images/about-2.png"
                            alt="GearWrench Diagnostic Tool"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

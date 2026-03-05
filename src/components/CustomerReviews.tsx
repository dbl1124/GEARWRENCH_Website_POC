import Image from 'next/image';

const reviews = [
    {
        name: "Garrett",
        platform: "Home Depot",
        stars: 5,
        text: "Awesome quality, great set all around. Highly recommend to anyone just getting into wrenching or someone who just wants a mobile set."
    },
    {
        name: "Cevin Auto Services",
        platform: "Home Depot",
        stars: 5,
        text: "At our shop we love gearwrench products!"
    },
    {
        name: "Thomas Hood",
        platform: "Amazon",
        stars: 5,
        text: "Have had this set of wrenches for a few years now and they're still good wrenches. I use them all the time."
    }
];

export default function CustomerReviews() {
    return (
        <section className="relative w-full py-24 flex items-center bg-brand-black overflow-hidden font-sans">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-50">
                <Image
                    src="/images/review.jpg"
                    alt="Mechanic Reviews"
                    fill
                    className="object-cover object-center"
                />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 w-full">
                <div className="max-w-[1480px] mx-auto px-6 mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight drop-shadow-lg">
                        What Our Customers Are Saying
                    </h2>
                </div>

                {/* CSS-only snap scrolling container to act as a slider */}
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-12 w-full max-w-[1480px] mx-auto scrollbar-hide">
                    {reviews.map((review, index) => (
                        <div key={index} className="flex-shrink-0 w-[400px] bg-white p-8 snap-center shadow-2xl relative">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="font-bold text-2xl text-brand-black tracking-tight">{review.name}</h3>
                                <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">{review.platform}</span>
                            </div>

                            <div className="flex space-x-1 mb-8">
                                {[...Array(review.stars)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-brand-orange fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <div className="relative">
                                <span className="text-brand-black text-5xl font-serif font-black absolute -top-4 -left-2 tracking-tighter">&ldquo;</span>
                                <p className="text-brand-black leading-relaxed font-medium pl-6 relative z-10 border-t border-dotted border-gray-300 pt-4 mt-6">
                                    {review.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

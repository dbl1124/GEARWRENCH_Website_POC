'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface WhereToBuyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function WhereToBuyModal({ isOpen, onClose }: WhereToBuyModalProps) {
    const [activeTab, setActiveTab] = useState<'online' | 'nearby'>('online');
    const [searchZip, setSearchZip] = useState('');
    const [debouncedZip, setDebouncedZip] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedZip(searchZip);
        }, 800);
        return () => clearTimeout(handler);
    }, [searchZip]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const onlineRetailers = [
        { name: 'Amazon', image: '/images/where-to-buy/amazon.svg', url: '#' },
        { name: 'Home Depot', image: '/images/where-to-buy/the-home-depot.svg', url: '#' },
        { name: 'Acme Tools', image: '/images/where-to-buy/acme-tools-logo.svg', url: '#' },
        { name: 'Grainger', image: '/images/where-to-buy/grainger-logo.svg', url: '#' },
        { name: 'Fastenal', image: '/images/where-to-buy/fastenal-logo.svg', url: '#' },
        { name: 'NAPA', image: '/images/where-to-buy/napa-logo.svg', url: '#' },
    ];

    const localStores = [
        { name: 'Advance Auto Parts', distance: '1.2 mi', address: '123 Main St, Cityville', status: 'In Stock' },
        { name: 'AutoZone Auto Parts', distance: '3.4 mi', address: '456 Automotive Blvd, Cityville', status: 'Limited Stock' },
        { name: 'NAPA Auto Parts', distance: '5.0 mi', address: '789 Industrial Pkwy, Townsburg', status: 'In Stock' },
    ];

    return (
        <div className={`fixed inset-0 z-[999] flex items-center justify-center transition-all duration-500 ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0 delay-200'}`}>
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className={`relative w-full max-w-6xl h-[85vh] max-h-[800px] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col z-10 m-4 transition-all duration-500 ease-out origin-top-right ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-0 -translate-y-24'}`}>

                {/* Header */}
                <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100 bg-white">
                    <h2 className="text-3xl font-black uppercase text-brand-black tracking-tight">Where to Buy</h2>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-brand-orange text-gray-500 hover:text-white transition-colors"
                        aria-label="Close modal"
                    >
                        <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex w-full border-b border-gray-100 bg-gray-50/50">
                    <button
                        onClick={() => setActiveTab('online')}
                        className={`flex-1 py-4 text-[15px] font-bold uppercase tracking-wider transition-colors relative ${activeTab === 'online' ? 'text-brand-orange' : 'text-gray-500 hover:text-brand-black'}`}
                    >
                        Find Online
                        {activeTab === 'online' && (
                            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-orange" />
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab('nearby')}
                        className={`flex-1 py-4 text-[15px] font-bold uppercase tracking-wider transition-colors relative ${activeTab === 'nearby' ? 'text-brand-orange' : 'text-gray-500 hover:text-brand-black'}`}
                    >
                        Find Nearby
                        {activeTab === 'nearby' && (
                            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-orange" />
                        )}
                    </button>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-hidden flex flex-col relative bg-white">

                    {/* ONLINE TAB */}
                    {activeTab === 'online' && (
                        <div className="p-8 overflow-y-auto h-full w-full custom-scrollbar">
                            <p className="text-gray-500 font-medium mb-8 text-center max-w-2xl mx-auto">
                                GEARWRENCH tools are available through our trusted network of online retail partners. Select a retailer below to shop our catalog.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                                {onlineRetailers.map((retailer, idx) => (
                                    <a
                                        key={idx}
                                        href={retailer.url}
                                        className="group flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:border-brand-orange hover:shadow-lg transition-all bg-white h-40 relative"
                                    >
                                        <div className="relative w-full h-14 mb-4 flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                                            <Image
                                                src={retailer.image}
                                                alt={retailer.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <span className="text-[13px] font-bold uppercase tracking-widest text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 absolute bottom-4">
                                            Shop Now
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* NEARBY TAB */}
                    {activeTab === 'nearby' && (
                        <div className="flex flex-col md:flex-row h-full w-full">
                            {/* Left Panel: Search & Results */}
                            <div className="w-full md:w-[400px] flex-shrink-0 flex flex-col border-r border-gray-100 bg-white">
                                <div className="p-6 border-b border-gray-100 shadow-sm z-10 relative">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Enter ZIP or City, State"
                                            value={searchZip}
                                            onChange={(e) => setSearchZip(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    setDebouncedZip(searchZip);
                                                }
                                            }}
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-md outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all font-medium text-[15px]"
                                        />
                                        <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <button
                                        onClick={() => setDebouncedZip(searchZip || 'USA')}
                                        className="w-full mt-3 py-3 bg-brand-black text-white text-[13px] font-bold uppercase tracking-widest rounded-md hover:bg-brand-orange transition-colors flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        Search
                                    </button>
                                </div>

                                {/* Results List */}
                                <div className="flex-1 overflow-y-auto custom-scrollbar p-0">
                                    {localStores.map((store, idx) => (
                                        <div key={idx} className="p-6 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors group">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-bold text-brand-black text-[15px] group-hover:text-brand-orange transition-colors">{store.name}</h4>
                                                <span className="text-xs font-bold text-gray-500 bg-gray-200 px-2 py-1 rounded">{store.distance}</span>
                                            </div>
                                            <p className="text-sm text-gray-600 mb-3">{store.address}</p>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                <span className="text-xs font-bold text-green-600 uppercase tracking-wide">{store.status}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Panel: Map */}
                            <div className="flex-1 bg-gray-900 relative hidden md:block overflow-hidden">
                                <iframe
                                    key={debouncedZip || 'default'}
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2) sepia(0.05)', mixBlendMode: 'luminosity' }}
                                    src={`https://maps.google.com/maps?q=${encodeURIComponent(debouncedZip ? `Tool Stores near ${debouncedZip}` : 'Automotive Tool Stores, USA')}&t=&z=${debouncedZip ? '12' : '4'}&ie=UTF8&iwloc=&output=embed`}
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

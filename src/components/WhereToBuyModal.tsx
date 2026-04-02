'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Map, { Marker } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

interface WhereToBuyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function WhereToBuyModal({ isOpen, onClose }: WhereToBuyModalProps) {
    const initialStores = [
        { name: 'Advance Auto Parts', distance: '1.2 mi', address: '123 Main St, Cityville', status: 'In Stock', lat: 39.9526, lng: -75.1652 },
        { name: 'AutoZone Auto Parts', distance: '3.4 mi', address: '456 Automotive Blvd, Cityville', status: 'Limited Stock', lat: 39.9326, lng: -75.1852 },
        { name: 'NAPA Auto Parts', distance: '5.0 mi', address: '789 Industrial Pkwy, Townsburg', status: 'In Stock', lat: 39.9726, lng: -75.1452 },
    ];

    const [activeTab, setActiveTab] = useState<'online' | 'nearby'>('online');
    const [searchZip, setSearchZip] = useState('');
    const [debouncedZip, setDebouncedZip] = useState('');
    const [mounted, setMounted] = useState(false);
    const [localStores, setLocalStores] = useState(initialStores);
    const [hoveredStore, setHoveredStore] = useState<number | null>(null);
    const mapRef = useRef<any>(null);

    useEffect(() => setMounted(true), []);

    // Fetch coordinates when debouncedZip changes
    useEffect(() => {
        const handler = setTimeout(async () => {
            setDebouncedZip(searchZip);
            
            if (searchZip && process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN) {
                try {
                    const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchZip)}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}&types=postcode,place,region&limit=1`);
                    const data = await response.json();
                    
                    if (data.features && data.features.length > 0) {
                        const [lng, lat] = data.features[0].center;
                        if (mapRef.current) {
                            mapRef.current.flyTo({
                                center: [lng, lat],
                                zoom: 11,
                                duration: 2000
                            });
                        }
                        
                        // Generate mock stores around the new location
                        const placeName = data.features[0].place_name.split(',')[0];
                        setLocalStores([
                            { name: 'Advance Auto Parts', distance: '1.2 mi', address: `123 Main St, ${placeName}`, status: 'In Stock', lat: lat + 0.015, lng: lng - 0.012 },
                            { name: 'AutoZone Auto Parts', distance: '3.4 mi', address: `456 Automotive Blvd, ${placeName}`, status: 'Limited Stock', lat: lat - 0.02, lng: lng - 0.03 },
                            { name: 'NAPA Auto Parts', distance: '5.0 mi', address: `789 Industrial Pkwy, ${placeName}`, status: 'In Stock', lat: lat + 0.02, lng: lng + 0.025 },
                            { name: 'The Home Depot', distance: '7.1 mi', address: `100 Home Improvement Way, ${placeName}`, status: 'Custom Order', lat: lat - 0.035, lng: lng + 0.01 },
                            { name: "Lowe's Home Improvement", distance: '8.5 mi', address: `200 Hardware Lane, ${placeName}`, status: 'In Stock', lat: lat + 0.03, lng: lng - 0.04 },
                        ]);
                    }
                } catch (error) {
                    console.error("Geocoding error:", error);
                }
            }
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

    if (!mounted) return null;

    return createPortal(
        <div className={`fixed inset-0 z-[999] flex items-center justify-center transition-all duration-500 ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0 delay-200'}`}>
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className={`relative w-full max-w-6xl h-[85vh] max-h-[800px] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col z-10 m-4 transition-all duration-300 ease-out origin-center ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'}`}>

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
                                        <div className="relative w-full h-14 mb-4 flex items-center justify-center transition-all duration-300">
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
                                        <div 
                                            key={idx} 
                                            className={`p-6 border-b border-gray-100 cursor-pointer transition-colors group ${hoveredStore === idx ? 'bg-orange-50/50' : 'hover:bg-gray-50'}`}
                                            onMouseEnter={() => setHoveredStore(idx)}
                                            onMouseLeave={() => setHoveredStore(null)}
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className={`font-bold text-[15px] transition-colors ${hoveredStore === idx ? 'text-brand-orange' : 'text-brand-black group-hover:text-brand-orange'}`}>{store.name}</h4>
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
                                {process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ? (
                                    <Map
                                        ref={mapRef}
                                        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
                                        initialViewState={{
                                            longitude: -75.1652,
                                            latitude: 39.9526,
                                            zoom: 11
                                        }}
                                        style={{ width: '100%', height: '100%' }}
                                        mapStyle="mapbox://styles/mapbox/dark-v11"
                                    >
                                        {localStores.map((store, index) => (
                                            <Marker
                                                key={index}
                                                longitude={store.lng}
                                                latitude={store.lat}
                                                anchor="bottom"
                                            >
                                                <div 
                                                    className="relative cursor-pointer"
                                                    onMouseEnter={() => setHoveredStore(index)}
                                                    onMouseLeave={() => setHoveredStore(null)}
                                                >
                                                    {hoveredStore === index && (
                                                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-brand-black px-3 py-1 rounded text-xs font-bold shadow-lg whitespace-nowrap z-10 border border-gray-100">
                                                            {store.name}
                                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-r border-b border-gray-100"></div>
                                                        </div>
                                                    )}
                                                    <svg 
                                                        className={`w-8 h-8 drop-shadow-lg transition-transform ${hoveredStore === index ? 'text-brand-orange scale-125' : 'text-brand-orange/80'}`} 
                                                        fill="currentColor" 
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                                    </svg>
                                                </div>
                                            </Marker>
                                        ))}
                                    </Map>
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-500 font-medium">
                                        Mapbox Token Missing
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
}

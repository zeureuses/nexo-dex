'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Map tab types to icon component and color
const tabMeta = {
    'Bullish': {
        Icon: () => <img src="/images/optionsImages/bullish.svg" alt="Bullish" className="w-5 h-5" />,
        color: '#23E798',
    },
    'Bearish': {
        Icon: () => <img src="/images/optionsImages/bearish.svg" alt="Bearish" className="w-5 h-5" />,
        color: '#F47B7B',
    },
    'High Volatility': {
        Icon: () => <img src="/images/optionsImages/high-vol.svg" alt="High Volatility" className="w-5 h-5" />,
        color: '#EFCC43',
    },
    'Low Volatility': {
        Icon: () => <img src="/images/optionsImages/low-vol.svg" alt="Low Volatility" className="w-5 h-5" />,
        color: '#9D7FF1',
    },
};


// Product data grouped by option type
const products = {
    Bullish: [
        {
            title: 'Call',
            text: 'The price rises sharply',
            icon: '/images/optionsImages/call.svg',
            cost: 2,
            profit: 3,
        },
        {
            title: 'Bull Call Spread',
            text: 'The price rises to a certain level',
            icon: '/images/optionsImages/cali-spread.svg',
            cost: 1,
            profit: 2,
        },
        {
            title: 'Bull Put Spread',
            text: 'The price stays at a certain level',
            icon: '/images/optionsImages/put-spread.svg',
            cost: 1,
            profit: 2,
        },
        {
            title: 'Strap',
            text: 'The price rises sharply or falls',
            icon: '/images/optionsImages/strap.svg',
            cost: 2,
            profit: 3,
        },
    ],
    Bearish: [
        {
            title: 'Put',
            text: 'The price falls sharply',
            icon: '/images/optionsImages/put.svg',
            cost: 2,
            profit: 3,
        },
        {
            title: 'Bear Put Spread',
            text: 'The price falls to a certain level',
            icon: '/images/optionsImages/put-spread2.svg',
            cost: 1,
            profit: 2,
        },
        {
            title: 'Bear Call Spread',
            text: 'The price stays at a certain level',
            icon: '/images/optionsImages/cali-spread2.svg',
            cost: 1,
            profit: 2,
        },
        {
            title: 'Strip',
            text: 'The price falls sharply or rises',
            icon: '/images/optionsImages/strip.svg',
            cost: 2,
            profit: 3,
        },
    ],
    'High Volatility': [
        {
            title: 'Straddle',
            text: 'The price rises or falls sharply',
            icon: '/images/optionsImages/straddle.svg',
            cost: 2,
            profit: 4,
        },
        {
            title: 'Strangle',
            text: 'The price rises or falls significantly',
            icon: '/images/optionsImages/strangle.svg',
            cost: 2,
            profit: 3,
        },
    ],
    'Low Volatility': [
        {
            title: 'Long Condor',
            text: 'The price changes slightly',
            icon: '/images/optionsImages/long-condor.svg',
            cost: 1,
            profit: 2,
        },
        {
            title: 'Long Butterfly',
            text: 'The price stays around the strike price',
            icon: '/images/optionsImages/butterfly.svg',
            cost: 1,
            profit: 3,
        },
    ],
};

export default function OptionsProducts() {
    const [activeTab, setActiveTab] = useState('Bullish');
    const hasMultiple = (products[activeTab] ?? []).length > 1;
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    // Reset slider position when tab changes
    useEffect(() => {
        setCurrentIndex(0);
        if (containerRef.current) {
            containerRef.current.scrollTo({ left: 0, behavior: 'auto' });
        }
    }, [activeTab]);

    // Sync index with scroll position on mobile
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let ticking = false;
        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                const width = container.clientWidth || 1;
                const index = Math.round(container.scrollLeft / width);
                setCurrentIndex(index);
                ticking = false;
            });
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [activeTab]);

    const scrollToIndex = (index) => {
        const container = containerRef.current;
        if (!container) return;
        const width = container.clientWidth;
        container.scrollTo({ left: index * width, behavior: 'smooth' });
        setCurrentIndex(index);
    };

    // helper for cost/profit markers
    const renderMarkers = (filled) => {
        return Array.from({ length: 4 }).map((_, i) => (
            <div
                key={i}
                className={`w-4 h-4 rounded ${i < filled ? 'bg-green-500' : 'bg-zinc-700'
                    }`}
            ></div>
        ));
    };

    return (
        <section id="options" className=" text-white py-20 w-full h-full">
            <div className="flex flex-col gap-6">
                {/* Section Title */}
                <h2 className="text-3xl md:text-5xl font-bold py-[2rem]">
                    Options Products
                </h2>

                {/* Tabs */}
                <div className="grid grid-cols-4 w-full">
                    {Object.keys(products).map((type) => {
                        const meta = tabMeta[type];
                        const Icon = meta?.Icon;
                        const color = meta?.color;
                        const isActive = activeTab === type;
                        return (
                            <button
                                key={type}
                                onClick={() => setActiveTab(type)}
                                className={`relative pb-3 px-2 md:px-3 text-xs md:text-sm flex items-center justify-center gap-2 font-semibold transition-colors w-full ${isActive
                                    ? 'text-white'
                                    : 'text-zinc-400 hover:text-white'
                                    }`}
                            >
                                {Icon && <Icon />}
                                <span>{type}</span>
                                {isActive && (
                                    <span
                                        className="absolute left-0 -bottom-[1px] h-0.5 w-full"
                                        style={{ backgroundColor: color }}
                                    />
                                )}
                            </button>
                        );
                    })}

                </div>

                {/* Products Scrollable Container */}
                <div ref={containerRef} className={`pb-2 sm:pb-4 ${hasMultiple ? 'overflow-x-auto snap-x snap-mandatory' : ''} scrollbar-green flex gap-6 min-w-full`}>
                    {products[activeTab].map((product, index) => (
                        <div
                            key={index}
                            className={`flex flex-col gap-4 p-6 bg-[#1a1a1a] rounded-2xl shadow-lg flex-none basis-full min-w-full sm:basis-[32%] sm:min-w-[32%] ${hasMultiple ? 'snap-center md:snap-none' : ''}`}
                        >
                            {/* Product Icon */}
                            <div className="relative w-full h-40 sm:h-[180px] bg-[#1a1a1a] rounded-lg overflow-hidden">
                                <Image
                                    src={product.icon}
                                    alt={product.title}
                                    fill
                                    className="object-contain md:object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-semibold">{product.title}</h3>

                            <div className='flex flex-col gap-2'>
                                {/* Subtitle */}
                                <h1 className="text-sm text-gray-400">Profitable if</h1>
                                <p className="text-sm">{product.text}</p>
                            </div>

                            {/* Cost & Profit markers */}
                            <div className="flex justify-between w-full mt-2 sm:mt-4">
                                <div className="flex flex-col items-center gap-2">
                                    <span className="text-xs text-gray-400">Cost</span>
                                    <div className="flex gap-1">{renderMarkers(product.cost)}</div>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <span className="text-xs text-gray-400">Profit</span>
                                    <div className="flex gap-1">{renderMarkers(product.profit)}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Slider dots (mobile only) */}
                {hasMultiple && (
                    <div className="flex items-center justify-center gap-1 mt-1 sm:hidden">
                        {products[activeTab].map((_, idx) => (
                            <button
                                key={idx}
                                aria-label={`Go to slide ${idx + 1}`}
                                onClick={() => scrollToIndex(idx)}
                                className={`${currentIndex === idx ? 'bg-white w-3' : 'bg-zinc-500 w-2'} h-2 rounded-full transition-all`}
                            />
                        ))}
                    </div>
                )}

                {/* CTA */}

                <Link
                    href="https://nexooptions.gitbook.io/nexooptions-docs/"
                    className="flex items-center justify-center w-full h-14 px-6 mt-7 rounded-lg shadow-lg transition-all duration-300 cursor-pointer border-0 whitespace-nowrap relative z-10 overflow-hidden outline-none no-underline font-normal text-base leading-6 text-white group bg-gradient-to-r from-[#16ca83] to-[#0e8053] hover:from-[#0e8053] hover:to-[#16ca83]"
                    target="_self"
                >
                    <span
                        className="w-full text-center block tracking-widest font-bold"
                        style={{
                            position: 'relative',
                            zIndex: 2
                        }}
                    >
                        Explore All Options
                    </span>
                </Link>

            </div>
        </section>
    );
}

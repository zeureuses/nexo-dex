'use client';

import Image from 'next/image';

export default function IntroductionSection() {
    return (
        <section className="relative text-white py-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left Text Content */}
                <div className="flex flex-col gap-6">
                    <div className="absolute top-0 left-1/3 h-full w-full -translate-x-1/2 text-[#f5f5f5] z-0">
						<div className="lp-illustrations lp-illustrations--info-box-1 z-0">
							<div className="lp-illustrations--info-box-1__left"></div>
							<div className="flex justify-center pointer-events-none select-none">
								<Image
									src="/images/decoration.png"
									alt="Decorative coins"
									width={648}
									height={278}
									className="opacity-80"
									priority
								/>
							</div>
						</div>
                    </div>
                    <h2 className="z-10 text-3xl md:text-5xl font-bold tracking-wider leading-snug">What is Nexo?</h2>
                    <p className="z-10 text-lg text-gray-300 tracking-wider leading-8">
                        Nexo is a peer-to-pool options trading protocol on Base, designed to{' '}
                        <span className="font-semibold text-white tracking-wider leading-snug">simplifying complex financial instruments</span> and empower everyday users{' '}
                        <span className="font-semibold text-white tracking-wider leading-snug">to maximize opportunities while keeping costs low.</span>.
                    </p>
                </div>

                {/* Right Image */}
                <div className="flex justify-center md:justify-end">
                    <Image
                        src="/images/monitor.png"
                        alt="Trading Chart"
                        width={400}
                        height={400}
                        className="w-auto"
                    />
                </div>
            </div>

            {/* Bullet Points */}
            <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
                {/* Bullet 1 */}
                <div className="flex flex-col gap-5">
                    <Image
                        src="/images/calendar.png"
                        alt="Years Icon"
                        width={45}
                        height={45}
                    />
                    <h3 className="text-4xl font-semibold">2.5+ years</h3>
                    <p className="text-gray-400 text-lg w-[60%]">
                        Developing DEX Options since 2023
                    </p>
                </div>

                {/* Bullet 2 */}
                <div className="flex flex-col gap-5">
                    <Image
                        src="/images/charts.png"
                        alt="Volume Icon"
                        width={45}
                        height={45}
                    />
                    <h3 className="text-4xl font-semibold">$1B+</h3>
                    <p className="text-gray-400 text-lg w-[60%]">
                        Future-ready for $1B+ cumulative options trading
                    </p>
                </div>

                {/* Bullet 3 */}
                <div className="flex flex-col gap-5">
                    <Image
                        src="/images/notes.png"
                        alt="Contracts Icon"
                        width={45}
                        height={45}
                    />
                    <h3 className="text-4xl font-semibold">Powered by Base</h3>
                    <p className="text-gray-400 text-lg w-[60%]">
                        Options trading coming soon on Nexo
                    </p>
                </div>
            </div>
        </section>
    );
}

'use client';

import Image from 'next/image';

export default function FeaturesSection() {
    return (
        <section id="why" className=" text-white py-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-wider leading-snug">Why Nexo</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                    {/* Feature 1 */}
                    <div className="flex flex-col gap-6">
                        <Image
                            src="/images/featuresImages/4.png"
                            alt="Feature Icon"
                            width={150}
                            height={150}
                        />
                        <h3 className="text-2xl font-semibold tracking-wider leading-snug">Created by Anons, for Anons.</h3>
                        <p className="text-gray-400 text-lg tracking-wider leading-snug">
                            Nexo is developed by an anonymous builder.<br />
                            The story is written on-chain, visible to everyone who joins the journey.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col gap-6">
                        <Image
                            src="/images/featuresImages/3.png"
                            alt="Feature Icon"
                            width={150}
                            height={150}
                        />
                        <h3 className="text-2xl font-semibold tracking-wider leading-snug">One-click Options Trading</h3>
                        <p className="text-gray-400 text-lg tracking-wider leading-snug">
                            From simple calls to advanced strategies, Nexo lets you trade them all effortlessly with a single click.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col gap-6">
                        <Image
                            src="/images/featuresImages/2.png"
                            alt="Feature Icon"
                            width={150}
                            height={150}
                        />
                        <h3 className="text-2xl font-semibold tracking-wider leading-snug">Guaranteed P&amp;L Payouts</h3>
                        <p className="text-gray-400 text-lg tracking-wider leading-snug ">
                            All in-the-money options and strategies are fully settled, with profits always paid out in full upon exercise.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex flex-col gap-6">
                        <Image
                            src="/images/featuresImages/1.png"
                            alt="Feature Icon"
                            width={150}
                            height={150}
                        />
                        <h3 className="text-2xl font-semibold tracking-wider leading-snug">Zero Fees, Only Premiums</h3>
                        <p className="text-gray-400 text-lg tracking-wider leading-snug">
                            The price of every option is simply its premium—no taker fees, no hidden charges, and no extra trading costs on Nexo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

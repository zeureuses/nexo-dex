'use client';

import Image from 'next/image';

// const reviews = [
//   {
//     name: 'ThePartisan',
//     handle: '@deanrey3',
//     link: 'https://twitter.com/deanrey3',
//     text: `Really slick experience. The information in the UI is very clear and I like the way it took me directly to my positions after buying the Option. Can't believe how fast and cheap the transactions are.`,
//   },
//   {
//     name: 'Simon 💵🦍💵',
//     handle: '@51mson',
//     link: 'https://twitter.com/51mson',
//     text: `Strategy that has been working out great for me lately: 1) a few hours before major announcements (FOMC, CPI, etc.) place a straddle (put + call option) with one day duration on Hegic 2) lean back and count dollars while the CT TL either panics or FOMOs`,
//   },
//   {
//     name: 'greypixel 🦇🔊',
//     handle: '@greypixel_',
//     link: 'https://twitter.com/greypixel_',
//     text: `Just checked out @HegicOptions for the first time. Big fan of the way the UI makes it really clear of the payoff profiles for the various strategies overlaid on recent price action - very intuitive.`,
//   },
//   {
//     name: 'DΞFi Cook (🫡, 🫡)',
//     handle: '@deficook',
//     link: 'https://twitter.com/deficook',
//     text: `Say whatever you like but I love the Hegic 2.0 UI. Simple, clear, user friendly.`,
//   },
//   {
//     name: "Native_0x |3'3|",
//     handle: '@Native_0x',
//     link: 'https://twitter.com/Native_0x',
//     text: `I bought a bunch of puts this morning thinking the stonk market would rug us. Upsides are: 1/ Only lost the premium which was minuscule (benefit of options) 2/ used the new @HegicOptions upgrade which was 10x better than before and included nice UX features like ‘auto execute’`,
//   },
//   {
//     name: 'GMX Intern 🫐',
//     handle: '@gmx_intern',
//     link: 'https://twitter.com/gmx_intern',
//     text: `dammm loving that new @HegicOptions UI, looks super clean! Combined with Arbitrum UX, gud product`,
//   },
//   {
//     name: 'tridetch',
//     handle: '@3detch',
//     link: 'https://twitter.com/3detch',
//     text: `Strategies is killer feature, even don’t need to understand how to trade options. I’m ready for any market movements`,
//   },
//   {
//     name: 'Lucky Luke',
//     handle: '@lucky_luke_777',
//     link: 'https://twitter.com/lucky_luke_777',
//     text: `UI is friendly for the smolest of fish :) Liquidity deep enough for whales to get a good swim. Dip your toes in options trading today!`,
//   },
// ];

export default function CommunitySection() {
  return (
    <section className="text-white py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Join the Growing Community of Nexo
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/images/orb.png"
                  alt={review.name}
                  width={40}
                  height={40}
                />
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <a
                    href={review.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 text-sm"
                  >
                    {review.handle}
                  </a>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://discord.gg/qetXwcRqur"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white font-semibold text-lg w-full text-center py-4 rounded-lg hover:bg-purple-900 transition"
          >
            Join Nexo Discord
          </a>
        </div>
      </div>
    </section>
  );
}

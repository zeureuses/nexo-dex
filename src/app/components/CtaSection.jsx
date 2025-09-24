import Image from 'next/image';
import Link from 'next/link';

export default function CtaSection() {
    return (
        <section className="w-full pt-20">
            <div className="max-w-7xl mx-auto px-4 flex flex-row-reverse md:flex-row flex-wrap items-start justify-between gap-6 w-full">
                {/* Left Content */}
                <div className="flex flex-col items-start text-left flex-1">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-wider leading-snug mb-6">
                        Nexo is here. <br /> Distribute it evenly.
                    </h1>

                    <Link
                        href="https://twitter.com/NexoOptions​"
                        className="group relative hidden md:inline-flex items-center gap-2 text-white pl-6 pr-0 font-semibold rounded-lg text-lg bg-[linear-gradient(263.82deg,#16ca83,#0e8053)]"
                    >
                        <span className='pr-1 tracking-wider leading-relaxed'>Join us on Twitter</span>

                        {/* Animated SVG Icon */}
                        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-r-lg items-center flex justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-[#16ca83] translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />

                            <svg width="24" height="28" viewBox="0 0 24 28" stroke="currentColor"
                                className="relative z-10 w-6 h-6 text-gray-200" xmlns="http://www.w3.org/2000/svg">
                                <rect x="12.6367" y="9.90906" width="2.05704" height="16.4563" transform="rotate(45 12.6367 9.90906)" fill="#F5F5F5"></rect>
                                <rect x="15.5449" y="7" width="2.05704" height="4.11408" transform="rotate(45 15.5449 7)" fill="#E0E1E0"></rect>
                                <path d="M7.5 6.5C8 6 8 5 8 5C8 5 8 6 8.5 6.5C9 7 10 7 10 7C10 7 9 7 8.5 7.5C8 8 8 9 8 9C8 9 8 8 7.5 7.5C7 7 6 7 6 7C6 7 7 7 7.5 6.5Z" fill="#D9D9D9"></path>
                                <path d="M17.5 17.5C18 17 18 16 18 16C18 16 18 17 18.5 17.5C19 18 20 18 20 18C20 18 19 18 18.5 18.5C18 19 18 20 18 20C18 20 18 19 17.5 18.5C17 18 16 18 16 18C16 18 17 18 17.5 17.5Z" fill="#D9D9D9"></path>
                                <path d="M22.75 7.75C23 7.5 23 7 23 7C23 7 23 7.5 23.25 7.75C23.5 8 24 8 24 8C24 8 23.5 8 23.25 8.25C23 8.5 23 9 23 9C23 9 23 8.5 22.75 8.25C22.5 8 22 8 22 8C22 8 22.5 8 22.75 7.75Z" fill="#D9D9D9"></path>
                                <path d="M15.75 13.75C16 13.5 16 13 16 13C16 13 16 13.5 16.25 13.75C16.5 14 17 14 17 14C17 14 16.5 14 16.25 14.25C16 14.5 16 15 16 15C16 15 16 14.5 15.75 14.25C15.5 14 15 14 15 14C15 14 15.5 14 15.75 13.75Z" fill="#D9D9D9"></path>
                                <path d="M11.75 7.75C12 7.5 12 7 12 7C12 7 12 7.5 12.25 7.75C12.5 8 13 8 13 8C13 8 12.5 8 12.25 8.25C12 8.5 12 9 12 9C12 9 12 8.5 11.75 8.25C11.5 8 11 8 11 8C11 8 11.5 8 11.75 7.75Z" fill="#D9D9D9"></path>
                                <path d="M7.75 1.75C8 1.5 8 1 8 1C8 1 8 1.5 8.25 1.75C8.5 2 9 2 9 2C9 2 8.5 2 8.25 2.25C8 2.5 8 3 8 3C8 3 8 2.5 7.75 2.25C7.5 2 7 2 7 2C7 2 7.5 2 7.75 1.75Z" fill="#D9D9D9"></path>
                                <path d="M22.75 16.75C23 16.5 23 16 23 16C23 16 23 16.5 23.25 16.75C23.5 17 24 17 24 17C24 17 23.5 17 23.25 17.25C23 17.5 23 18 23 18C23 18 23 17.5 22.75 17.25C22.5 17 22 17 22 17C22 17 22.5 17 22.75 16.75Z" fill="#D9D9D9"></path>
                                <path d="M19 3C20 2 20 0 20 0C20 0 20 2 21 3C22 4 24 4 24 4C24 4 22 4 21 5C20 6 20 8 20 8C20 8 20 6 19 5C18 4 16 4 16 4C16 4 18 4 19 3Z" fill="#D9D9D9"></path>
                                <path d="M12.25 2.25C13 1.5 13 0 13 0C13 0 13 1.5 13.75 2.25C14.5 3 16 3 16 3C16 3 14.5 3 13.75 3.75C13 4.5 13 6 13 6C13 6 13 4.5 12.25 3.75C11.5 3 10 3 10 3C10 3 11.5 3 12.25 2.25Z" fill="#D9D9D9"></path>
                                <path d="M20.25 11.25C21 10.5 21 9 21 9C21 9 21 10.5 21.75 11.25C22.5 12 24 12 24 12C24 12 22.5 12 21.75 12.75C21 13.5 21 15 21 15C21 15 21 13.5 20.25 12.75C19.5 12 18 12 18 12C18 12 19.5 12 20.25 11.25Z" fill="#D9D9D9"></path>
                            </svg>
                        </div>
                    </Link>
                </div>

                <Image
                    src="/images/CTA.png"
                    alt="Trading Chart"
                    width={500}
                    height={300}
                    sizes="(max-width: 768px) 260px, 500px"
                    className="max-w-[500px] w-[260px] md:w-[500px] h-auto"
                    priority
                />

                {/* Mobile full-width button */}
                <div className="basis-full md:hidden">
                    <Link
                        href="/app"
                        className="group relative inline-flex w-full items-center justify-between gap-2 text-white pl-6 pr-0 font-semibold rounded-lg text-lg bg-[linear-gradient(263.82deg,#16ca83,#0e8053)]"
                    >
                        <span className='pr-1 tracking-wider font-bold '>Start One-click Options Trading</span>

                        <div className="relative w-12 h-12 rounded-r-lg items-center flex justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-[#16ca83] translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />

                            <svg width="24" height="28" viewBox="0 0 24 28" stroke="currentColor"
                                className="relative z-10 w-6 h-6 text-gray-200" xmlns="http://www.w3.org/2000/svg">
                                <rect x="12.6367" y="9.90906" width="2.05704" height="16.4563" transform="rotate(45 12.6367 9.90906)" fill="#F5F5F5"></rect>
                                <rect x="15.5449" y="7" width="2.05704" height="4.11408" transform="rotate(45 15.5449 7)" fill="#E0E1E0"></rect>
                                <path d="M7.5 6.5C8 6 8 5 8 5C8 5 8 6 8.5 6.5C9 7 10 7 10 7C10 7 9 7 8.5 7.5C8 8 8 9 8 9C8 9 8 8 7.5 7.5C7 7 6 7 6 7C6 7 7 7 7.5 6.5Z" fill="#D9D9D9"></path>
                                <path d="M17.5 17.5C18 17 18 16 18 16C18 16 18 17 18.5 17.5C19 18 20 18 20 18C20 18 19 18 18.5 18.5C18 19 18 20 18 20C18 20 18 19 17.5 18.5C17 18 16 18 16 18C16 18 17 18 17.5 17.5Z" fill="#D9D9D9"></path>
                                <path d="M22.75 7.75C23 7.5 23 7 23 7C23 7 23 7.5 23.25 7.75C23.5 8 24 8 24 8C24 8 23.5 8 23.25 8.25C23 8.5 23 9 23 9C23 9 23 8.5 22.75 8.25C22.5 8 22 8 22 8C22 8 22.5 8 22.75 7.75Z" fill="#D9D9D9"></path>
                                <path d="M15.75 13.75C16 13.5 16 13 16 13C16 13 16 13.5 16.25 13.75C16.5 14 17 14 17 14C17 14 16.5 14 16.25 14.25C16 14.5 16 15 16 15C16 15 16 14.5 15.75 14.25C15.5 14 15 14 15 14C15 14 15.5 14 15.75 13.75Z" fill="#D9D9D9"></path>
                                <path d="M11.75 7.75C12 7.5 12 7 12 7C12 7 12 7.5 12.25 7.75C12.5 8 13 8 13 8C13 8 12.5 8 12.25 8.25C12 8.5 12 9 12 9C12 9 12 8.5 11.75 8.25C11.5 8 11 8 11 8C11 8 11.5 8 11.75 7.75Z" fill="#D9D9D9"></path>
                                <path d="M7.75 1.75C8 1.5 8 1 8 1C8 1 8 1.5 8.25 1.75C8.5 2 9 2 9 2C9 2 8.5 2 8.25 2.25C8 2.5 8 3 8 3C8 3 8 2.5 7.75 2.25C7.5 2 7 2 7 2C7 2 7.5 2 7.75 1.75Z" fill="#D9D9D9"></path>
                                <path d="M22.75 16.75C23 16.5 23 16 23 16C23 16 23 16.5 23.25 16.75C23.5 17 24 17 24 17C24 17 23.5 17 23.25 17.25C23 17.5 23 18 23 18C23 18 23 17.5 22.75 17.25C22.5 17 22 17 22 17C22 17 22.5 17 22.75 16.75Z" fill="#D9D9D9"></path>
                                <path d="M19 3C20 2 20 0 20 0C20 0 20 2 21 3C22 4 24 4 24 4C24 4 22 4 21 5C20 6 20 8 20 8C20 8 20 6 19 5C18 4 16 4 16 4C16 4 18 4 19 3Z" fill="#D9D9D9"></path>
                                <path d="M12.25 2.25C13 1.5 13 0 13 0C13 0 13 1.5 13.75 2.25C14.5 3 16 3 16 3C16 3 14.5 3 13.75 3.75C13 4.5 13 6 13 6C13 6 13 4.5 12.25 3.75C11.5 3 10 3 10 3C10 3 11.5 3 12.25 2.25Z" fill="#D9D9D9"></path>
                                <path d="M20.25 11.25C21 10.5 21 9 21 9C21 9 21 10.5 21.75 11.25C22.5 12 24 12 24 12C24 12 22.5 12 21.75 12.75C21 13.5 21 15 21 15C21 15 21 13.5 20.25 12.75C19.5 12 18 12 18 12C18 12 19.5 12 20.25 11.25Z" fill="#D9D9D9"></path>
                            </svg>
                        </div>
                    </Link>
                </div>

            </div>
        </section>
    );
}



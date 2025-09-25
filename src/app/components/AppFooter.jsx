import Image from 'next/image';
import Link from 'next/link';

export default function AppFooter() {
    return (
        <footer className=" text-white py-12 border-t border-zinc-800">
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between">

                <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:gap-5">
                    {/* Logo */}
                    <div className="footer-logo hidden md:block">
                        <Image
                            src="/images/orb.png"
                            alt="Hegic Logo"
                            width={50}
                            height={50}
                            className="w-12 h-12"
                        />
                    </div>

                    {/* Title */}
                    <div className="text-sm text-gray-400 text-center md:text-left">
                        2025 © Nexo Options: On-chain peer-to-pool{' '}
                        <br className="hidden md:inline" />
                        options trading protocol on Base
                    </div>
                </div>


                {/* Social Links */}
                <div className="flex gap-6 justify-center mt-6 md:mt-0">
                    <Link
                        href="https://twitter.com/HegicOptions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                                                     width="32"
                            height="32"
                            viewBox="0 0 256 256"
                        >
                            <g
                                fill="#ffffff"
                                fillRule="nonzero"
                                stroke="none"
                                strokeWidth="1"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="10"
                                strokeDasharray=""
                                strokeDashoffset="0"
                                fontFamily="none"
                                fontWeight="none"
                                fontSize="none"
                                textAnchor="none"
                                style={{ mixBlendMode: 'normal' }}
                            >
                                <g transform="scale(5.12,5.12)">
                                    <path d="M6.91992,6l14.2168,20.72656l-14.9082,17.27344h3.17773l13.13867,-15.22266l10.44141,15.22266h10.01367l-14.87695,-21.6875l14.08008,-16.3125h-3.17578l-12.31055,14.26172l-9.7832,-14.26172z" />
                                </g>
                            </g>
                        </svg>

                    </Link>

                    <Link
                        href="https://discord.gg/qetXwcRqur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                                                    width="32"
                            height="32"
                            viewBox="0 0 50 50"
                            style={{ fill: '#FFFFFF' }}
                        >
                            <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z" />
                        </svg>
                    </Link>


                    <Link
                        href="https://github.com/hegic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                                              width="32"
                            height="32"
                            viewBox="0 0 256 256"
                        >
                            <g
                                fill="#ffffff"
                                fillRule="nonzero"
                                stroke="none"
                                strokeWidth="1"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="10"
                                strokeDasharray=""
                                strokeDashoffset="0"
                                fontFamily="none"
                                fontWeight="none"
                                fontSize="none"
                                textAnchor="none"
                                style={{ mixBlendMode: 'normal' }}
                            >
                                <g transform="scale(5.12,5.12)">
                                    <path d="M17.791,46.836c0.711,-0.306 1.209,-1.013 1.209,-1.836v-5.4c0,-0.197 0.016,-0.402 0.041,-0.61c-0.014,0.004 -0.027,0.007 -0.041,0.01c0,0 -3,0 -3.6,0c-1.5,0 -2.8,-0.6 -3.4,-1.8c-0.7,-1.3 -1,-3.5 -2.8,-4.7c-0.3,-0.2 -0.1,-0.5 0.5,-0.5c0.6,0.1 1.9,0.9 2.7,2c0.9,1.1 1.8,2 3.4,2c2.487,0 3.82,-0.125 4.622,-0.555c0.934,-1.389 2.227,-2.445 3.578,-2.445v-0.025c-5.668,-0.182 -9.289,-2.066 -10.975,-4.975c-3.665,0.042 -6.856,0.405 -8.677,0.707c-0.058,-0.327 -0.108,-0.656 -0.151,-0.987c1.797,-0.296 4.843,-0.647 8.345,-0.714c-0.112,-0.276 -0.209,-0.559 -0.291,-0.849c-3.511,-0.178 -6.541,-0.039 -8.187,0.097c-0.02,-0.332 -0.047,-0.663 -0.051,-0.999c1.649,-0.135 4.597,-0.27 8.018,-0.111c-0.079,-0.5 -0.13,-1.011 -0.13,-1.543c0,-1.7 0.6,-3.5 1.7,-5c-0.5,-1.7 -1.2,-5.3 0.2,-6.6c2.7,0 4.6,1.3 5.5,2.1c1.699,-0.701 3.599,-1.101 5.699,-1.101c2.1,0 4,0.4 5.6,1.1c0.9,-0.8 2.8,-2.1 5.5,-2.1c1.5,1.4 0.7,5 0.2,6.6c1.1,1.5 1.7,3.2 1.6,5c0,0.484 -0.045,0.951 -0.11,1.409c3.499,-0.172 6.527,-0.034 8.204,0.102c-0.002,0.337 -0.033,0.666 -0.051,0.999c-1.671,-0.138 -4.775,-0.28 -8.359,-0.089c-0.089,0.336 -0.197,0.663 -0.325,0.98c3.546,0.046 6.665,0.389 8.548,0.689c-0.043,0.332 -0.093,0.661 -0.151,0.987c-1.912,-0.306 -5.171,-0.664 -8.879,-0.682c-1.665,2.878 -5.22,4.755 -10.777,4.974v0.031c2.6,0 5,3.9 5,6.6v5.4c0,0.823 0.498,1.53 1.209,1.836c9.161,-3.032 15.791,-11.672 15.791,-21.836c0,-12.682 -10.317,-23 -23,-23c-12.683,0 -23,10.318 -23,23c0,10.164 6.63,18.804 15.791,21.836z" />
                                </g>
                            </g>
                        </svg>

                    </Link>

                    <Link
                        href="https://medium.com/hegic/hegic-hardcore-beta-release-2573a2d4cb3d"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 201 147"
                            fill="none"
                        >
                            <path
                                d="M91.1757 119.702C94.1659 119.702 96.8572 122.104 96.8572 125.405C96.8572 128.406 94.465 131.107 91.1757 131.107C88.1854 131.107 85.4942 128.706 85.4942 125.405C85.4942 122.104 88.1854 119.702 91.1757 119.702ZM179.089 84.888C176.099 84.888 173.407 82.487 173.407 79.1855C173.407 76.1846 175.8 73.4831 179.089 73.4831C182.079 73.4831 184.77 75.8846 184.77 79.1855C184.77 82.187 182.079 84.888 179.089 84.888ZM179.089 61.7787C169.52 61.7787 161.745 69.5816 161.745 79.1855C161.745 80.9865 162.044 82.7875 162.643 84.588L105.529 115.201C102.24 110.399 96.8572 107.698 91.1757 107.698C84.5972 107.698 78.6167 111.599 75.6264 117.302L24.1945 90.2904C18.812 87.289 14.6257 78.5855 15.2237 70.1821C15.5228 65.9802 17.0179 62.6787 19.1111 61.4787C20.6062 60.5782 22.1013 60.8782 24.1945 61.7787C37.9497 68.9816 82.803 92.6914 84.5972 93.5919C87.5874 94.7919 89.0825 95.3924 94.1659 92.9914L186.265 44.9716C187.761 44.3713 189.256 43.1711 189.256 41.0702C189.256 38.369 186.564 37.1684 186.564 37.1684C181.182 34.7675 173.108 30.8658 165.334 27.2644C148.588 19.4612 129.451 10.4574 121.078 5.95564C113.902 2.05401 107.921 5.35539 107.024 5.95564C69.0479 25.1635 16.7189 50.9743 13.7286 52.7748C8.6452 55.7758 5.35594 62.0787 5.05693 69.8816C4.45887 82.187 10.7384 95.0924 19.7091 99.5943L74.1313 127.806C75.3274 136.209 82.803 142.812 91.1757 142.812C100.744 142.812 108.22 135.309 108.519 125.705L168.324 93.2914C171.314 95.6929 175.202 96.8929 179.089 96.8929C188.658 96.8929 196.432 89.0899 196.432 79.486C196.432 69.5816 188.658 61.7787 179.089 61.7787Z"
                                fill="#FFFFFF"
                            />
                        </svg>

                    </Link>
                </div>
            </div>
        </footer>
    );
}



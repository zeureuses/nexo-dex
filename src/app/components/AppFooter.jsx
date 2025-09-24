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
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                        >
                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.25 4.25 0 001.88-2.35 8.49 8.49 0 01-2.7 1.03 4.24 4.24 0 00-7.22 3.87A12.03 12.03 0 013 4.8a4.24 4.24 0 001.31 5.65 4.22 4.22 0 01-1.92-.53v.05a4.25 4.25 0 003.4 4.16 4.28 4.28 0 01-1.91.07 4.24 4.24 0 003.96 2.95A8.5 8.5 0 012 19.54a12 12 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.34 8.34 0 0022.46 6z" />
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
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path d="M20.317 4.369A19.791 19.791 0 0016.556 3c-.2.355-.43.83-.59 1.205a18.27 18.27 0 00-7.933 0A12.3 12.3 0 007.444 3c-1.357.25-2.68.676-3.761 1.369C1.48 9.098.7 13.64 1.087 18.123A19.9 19.9 0 006.223 20a13.9 13.9 0 001.146-1.846 12.27 12.27 0 01-1.805-.855c.152-.11.301-.223.445-.34 3.476 1.59 7.237 1.59 10.671 0 .145.118.293.231.445.34a12.4 12.4 0 01-1.805.855A13.9 13.9 0 0017.777 20a19.9 19.9 0 005.136-1.877c.436-4.772-.747-9.249-2.596-13.754zM8.725 15.726c-1.057 0-1.921-.965-1.921-2.154 0-1.189.847-2.154 1.921-2.154 1.087 0 1.935.965 1.921 2.154 0 1.189-.847 2.154-1.921 2.154zm6.55 0c-1.057 0-1.921-.965-1.921-2.154 0-1.189.847-2.154 1.921-2.154 1.087 0 1.935.965 1.921 2.154 0 1.189-.834 2.154-1.921 2.154z" />
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
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6a3.1 3.1 0 00-1.3-1.7c-1-.7.1-.7.1-.7a2.5 2.5 0 011.8 1.2 2.6 2.6 0 003.6 1 2.6 2.6 0 01.8-1.6c-2.6-.3-5.3-1.3-5.3-5.9a4.6 4.6 0 011.2-3.2 4.2 4.2 0 01.1-3.2s1-.3 3.3 1.2a11.5 11.5 0 016 0c2.2-1.5 3.3-1.2 3.3-1.2a4.2 4.2 0 01.1 3.2 4.6 4.6 0 011.2 3.2c0 4.6-2.7 5.6-5.3 5.9a2.9 2.9 0 01.8 2.3v3.4c0 .3.2.7.8.6A12 12 0 0012 .5z"
                            />
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
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                        >
                            <path d="M4.134 3.5c-.527 0-.95.423-.95.95v15.1c0 .527.423.95.95.95h15.732c.527 0 .95-.423.95-.95V4.45c0-.527-.423-.95-.95-.95H4.134zm2.678 4.01a.57.57 0 01.218.484v7.997a.57.57 0 01-.218.484l-1.777 1.32v.264h5.054v-.264l-1.777-1.32a.592.592 0 01-.228-.484V9.542l4.414 9.301h.513l3.783-9.301v7.402c0 .133 0 .159-.085.244l-1.377 1.348v.264h6.666v-.264l-1.33-1.29a.257.257 0 01-.103-.244V8.668a.257.257 0 01.103-.244l1.377-1.29V6.87h-4.78l-3.376 8.26-3.992-8.26H4.94v.264l1.872 1.376z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </footer>
    );
}



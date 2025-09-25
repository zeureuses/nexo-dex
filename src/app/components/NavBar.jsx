import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="w-full pb-[2rem]">
            <div className="nav-wrapper flex flex-row items-center text-white justify-between">
                <Image
                    src="/images/logo/suzodziu.png"
                    alt="Nexo Logo"
                    width={120}
                    height={48}
                    className="w-auto h-auto"
                />
                <div className="flex flex-row gap-10 items-center justify-center">
                    <Link href='/#options' className="hidden md:inline tracking-widest leading-snug">Options products</Link>
                    <Link href='/#why' className="hidden md:inline tracking-widest leading-snug">Why Nexo</Link>
                    <Link
                        href="/"
                        className="inline-flex tracking-widest leading-snug items-center justify-center h-12 px-5 rounded-lg text-white font-bold text-base shadow-lg transition-all duration-200 bg-[linear-gradient(263.82deg,#16ca83,#0e8053)] hover:bg-[linear-gradient(96.18deg,#16ca83,#0e8053)]"
                        target="_self"
                    >
                        Start Trading
                    </Link>
                </div>
            </div>
        </nav>
    );
}



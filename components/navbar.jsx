import Link from "next/link";


const Navbar = () => {

    return (

        <nav className="rounded-md bg-black mb-8 sticky top-0 p-4 text-center">

            <Link href="/">
                <img className="cursor-pointer mx-auto w-8 mb-4" src="/logo.svg" alt="" />
            </Link>

            <div className="space-x-8">

                <Link href="/">
                    <a className="text-white text-sm font-normal">Home</a>
                </Link>

                <Link href="/nft">
                    <a className="text-white text-sm font-normal">NFT</a>
                </Link>

                <Link href="/about">
                    <a className="text-white text-sm font-normal">About</a>
                </Link>

                <Link href="/contact">
                    <a className="text-white text-sm font-normal">Contact</a>
                </Link>

            </div>

        </nav>

    );

}


export default Navbar;
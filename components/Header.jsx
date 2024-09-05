import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        itCrabs<span className="text-blue-600">.</span>
                    </h1>
                </Link>


                {/* desktop nav & hire me button */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Contact us</Button>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">mobile nav</div>
            </div>
        </header>
    );
};

export default Header;
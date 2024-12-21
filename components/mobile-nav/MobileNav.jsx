import { ShoppingCart, Home, Package, User, Search } from 'lucide-react';
import Link from 'next/link';

const MobileNav = () => {
    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-4 z-40">
            <div className="flex justify-around">
                <Link href="/" className="flex flex-col items-center text-green-800">
                    <Home size={24} />
                    <span className="text-xs mt-1">Utama</span>
                </Link>
                <button className="flex flex-col items-center text-gray-500">
                    <Search size={24} />
                    <span className="text-xs mt-1">Cari</span>
                </button>
                <button className="flex flex-col items-center text-gray-500">
                    <Package size={24} />
                    <span className="text-xs mt-1">Pesanan</span>
                </button>
                <button className="flex flex-col items-center text-gray-500">
                    <User size={24} />
                    <span className="text-xs mt-1">Profil</span>
                </button>
            </div>
        </div>
    );
};

export default MobileNav;
"use client";

import { ShoppingCart, Home, Package, User, Search, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { popularSearchTerms } from '@/data';

const MobileNav = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <>
            {/* Mobile Search Overlay */}
            <div
                className={`fixed inset-0 bg-white z-30 transform transition-transform duration-300 ease-out lg:hidden ${
                    isSearchOpen ? 'translate-y-0' : 'translate-y-full'
                }`}
            >
                <div className="p-4 border-b">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setIsSearchOpen(false)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X size={24} className="text-gray-500" />
                        </button>
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Cari produk..."
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                autoFocus
                            />
                        </div>
                    </div>
                </div>
                <div className="flex-1 p-4">
                    <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-500 mb-2">CARIAN POPULAR</h3>
                        <div className="flex flex-wrap gap-2">
                            {popularSearchTerms.map(term => (
                                <button
                                    key={term}
                                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors"
                                >
                                    {term}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Profile Overlay */}
            <div
                className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-out lg:hidden ${
                    isProfileOpen ? 'translate-y-0' : 'translate-y-full'
                }`}
            >
                <div className="p-4 border-b">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-green-800">Profil Saya</h2>
                        <button
                            onClick={() => setIsProfileOpen(false)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X size={24} className="text-gray-500" />
                        </button>
                    </div>
                </div>
                <div className="flex-1 p-4">
                    <div className="space-y-4">
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-50 rounded-md transition-colors">
                            Profil Saya
                        </a>
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-50 rounded-md transition-colors">
                            Pesanan Saya
                        </a>
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-50 rounded-md transition-colors">
                            Tetapan
                        </a>
                        <div className="border-t border-gray-100 my-4"></div>
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-50 rounded-md transition-colors">
                            Log Keluar
                        </a>
                    </div>
                </div>
            </div>

            {/* Add overlay backdrop when search or profile is open */}
            <div
                className={`fixed inset-0 bg-black/50 lg:hidden ${
                    isSearchOpen || isProfileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => {
                    setIsSearchOpen(false);
                    setIsProfileOpen(false);
                }}
            />

            {/* Bottom Navigation Bar */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-4 z-30">
                <div className="flex justify-around">
                    <Link href="/" className="flex flex-col items-center text-green-800">
                        <Home size={24} />
                        <span className="text-xs mt-1">Utama</span>
                    </Link>
                    <button
                        onClick={() => setIsSearchOpen(true)}
                        className="flex flex-col items-center text-gray-500"
                    >
                        <Search size={24} />
                        <span className="text-xs mt-1">Cari</span>
                    </button>
                    <Link href="/orders" className="flex flex-col items-center text-gray-500">
                        <Package size={24} />
                        <span className="text-xs mt-1">Pesanan</span>
                    </Link>
                    <button
                        onClick={() => setIsProfileOpen(true)}
                        className="flex flex-col items-center text-gray-500"
                    >
                        <User size={24} />
                        <span className="text-xs mt-1">Profil</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default MobileNav;
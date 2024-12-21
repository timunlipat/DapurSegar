"use client";

import { Search, ShoppingCart, Menu, User, Heart, X, ChevronRight, Bell, Package, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { categories, popularSearchTerms } from '@/data';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('Semua');
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    return (
        <>
            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
                    <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-white shadow-lg">
                        <div className="h-full flex flex-col">
                            <div className="p-4 border-b">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl font-bold text-green-800">Menu</h2>
                                    <button onClick={() => setIsMobileMenuOpen(false)}>
                                        <X size={24} className="text-gray-500" />
                                    </button>
                                </div>
                                <div className="mt-4 flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <User size={24} className="text-green-800" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Selamat datang!</p>
                                        <button className="text-green-800 text-sm">Log Masuk / Daftar</button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto">
                                <nav className="p-4">
                                    <div className="space-y-4">
                                        {categories.map(category => (
                                            <a key={category} href="#"
                                               className="flex items-center justify-between p-2 rounded-lg hover:bg-green-50">
                                                <span className="text-gray-700">{category}</span>
                                                <ChevronRight size={20} className="text-gray-400" />
                                            </a>
                                        ))}
                                    </div>
                                </nav>
                            </div>

                            <div className="border-t p-4 space-y-3">
                                <a href="#" className="flex items-center space-x-3 text-gray-600">
                                    <Package size={20} />
                                    <span>Pesanan Saya</span>
                                </a>
                                <a href="#" className="flex items-center space-x-3 text-gray-600">
                                    <Heart size={20} />
                                    <span>Senarai Wishlist</span>
                                </a>
                                <a href="#" className="flex items-center space-x-3 text-gray-600">
                                    <Bell size={20} />
                                    <span>Notifikasi</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile Search Overlay */}
            {isSearchOpen && (
                <div className="fixed inset-0 bg-white z-50 flex flex-col lg:hidden">
                    <div className="p-4 border-b">
                        <div className="flex items-center space-x-4">
                            <button onClick={() => setIsSearchOpen(false)}>
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
                                    <button key={term}
                                            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200">
                                        {term}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Enhanced Header */}
            <header className="bg-green-800 text-white sticky top-0 z-40">
                {/* Top Promo Banner */}
                <div className="py-2 text-center bg-green-900">
                    <p className="text-xs px-2">Penghantaran percuma untuk pesanan melebihi RM50!</p>
                </div>

                {/* Main Navigation Bar */}
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        {/* Left Section - Logo and Categories */}
                        <div className="flex items-center space-x-8">
                            <div className="flex items-center space-x-4">
                                <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
                                    <Menu size={24} />
                                </button>
                                <Link href="/" className="text-xl font-bold">PasarMan</Link>
                            </div>

                            {/* Desktop Categories Dropdown */}
                            <nav className="hidden lg:flex space-x-6">
                                {categories.slice(0, 5).map((category) => (
                                    <div key={category} className="relative group">
                                        <button className="flex items-center space-x-1 py-2 text-green-100 hover:text-white">
                                            <span>{category}</span>
                                            <ChevronDown size={16} />
                                        </button>
                                        <div className="absolute hidden group-hover:block w-48 bg-white rounded-lg shadow-lg p-2 mt-1">
                                            <div className="py-1">
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 rounded-md">
                                                    Subcategory 1
                                                </a>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 rounded-md">
                                                    Subcategory 2
                                                </a>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 rounded-md">
                                                    Subcategory 3
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </nav>
                        </div>

                        {/* Center Section - Search Bar (Desktop) */}
                        <div className="hidden lg:block flex-1 max-w-2xl mx-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Cari produk..."
                                    className="w-full px-4 py-2 pl-10 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <Search size={20} className="absolute left-3 top-2.5 text-gray-400" />
                            </div>
                        </div>

                        {/* Right Section - User Actions */}
                        <div className="flex items-center space-x-6">
                            <button className="lg:hidden" onClick={() => setIsSearchOpen(true)}>
                                <Search size={24} />
                            </button>

                            {/* Desktop Navigation Items */}
                            <div className="hidden lg:flex items-center space-x-6">
                                <button className="flex items-center space-x-1 text-green-100 hover:text-white">
                                    <Heart size={24} />
                                    <span className="text-sm">Wishlist</span>
                                </button>

                                {/* User Menu Dropdown */}
                                <div className="relative">
                                    <button
                                        className="flex items-center space-x-1 text-green-100 hover:text-white"
                                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                    >
                                        <User size={24} />
                                        <span className="text-sm">Akaun</span>
                                        <ChevronDown size={16} />
                                    </button>

                                    {isUserMenuOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">
                                                Profil Saya
                                            </a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">
                                                Pesanan Saya
                                            </a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">
                                                Tetapan
                                            </a>
                                            <div className="border-t border-gray-100 my-1"></div>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">
                                                Log Keluar
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Shopping Cart */}
                            <button className="relative" onClick={() => setIsCartOpen(!isCartOpen)}>
                                <ShoppingCart size={24} />
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    3
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Category Scroll */}
                <div className="lg:hidden overflow-x-auto whitespace-nowrap px-4 py-2 border-t border-green-700">
                    <div className="inline-flex space-x-4">
                        {["Semua", ...categories].map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-3 py-1 rounded-full text-sm ${
                                    activeCategory === category
                                        ? 'bg-white text-green-800'
                                        : 'text-green-100'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
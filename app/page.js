"use client";

import { Search, ShoppingCart, Menu, User, Heart, X, ChevronRight, Home, Package, Bell } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { useState } from 'react';

const Page = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('Semua');

    const categories = [
        "Sayur-sayuran", "Tenusu & Telur", "Daging & Makanan Laut",
        "Bakeri", "Barangan Runcit", "Makanan Sejuk Beku", "Minuman", "Snek"
    ];

    const featuredProducts = [
        { name: "Durian Musang King", price: "RM39.90", unit: "per kg", discount: "20% OFF", rating: 4.5, reviews: 128 },
        { name: "Beras Super Special", price: "RM28.90", unit: "5kg", rating: 4.8, reviews: 256 },
        { name: "Roti Gardenia", price: "RM3.90", unit: "per bungkus", discount: "Beli 1 Percuma 1", rating: 4.2, reviews: 89 },
        { name: "Telur Gred A", price: "RM13.90", unit: "30 biji", rating: 4.6, reviews: 167 }
    ];

    const deals = [
        { title: "Promosi Hujung Minggu", description: "50% off untuk Sayur-sayuran Segar", color: "bg-orange-50" },
        { title: "Jimat Lebih", description: "Jimat RM20 untuk pesanan melebihi RM100", color: "bg-blue-50" },
        { title: "Pelanggan Baru", description: "Dapat 25% off untuk pesanan pertama", color: "bg-green-50" }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Enhanced Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                    <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-white shadow-lg">
                        <div className="h-full flex flex-col">
                            <div className="p-4 border-b">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl font-bold text-green-800">Menu</h2>
                                    <button onClick={() => setIsMobileMenuOpen(false)}>
                                        <X size={24} className="text-gray-500" />
                                    </button>
                                </div>
                                {/* User Profile Summary */}
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

                            {/* Bottom Navigation Links */}
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

            {/* Enhanced Mobile Search Overlay */}
            {isSearchOpen && (
                <div className="fixed inset-0 bg-white z-50 flex flex-col">
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
                                {["Sayur Segar", "Buah-buahan", "Ayam", "Roti", "Beras"].map(term => (
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

            {/* Header */}
            <header className="bg-green-800 text-white sticky top-0 z-40">
                <div className="py-2 text-center bg-green-900">
                    <p className="text-xs px-2">Penghantaran percuma untuk pesanan melebihi RM50!</p>
                </div>

                <div className="px-4 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
                                <Menu size={24} />
                            </button>
                            <h1 className="text-xl font-bold">PasarMan</h1>
                        </div>

                        <div className="flex items-center space-x-3">
                            <button className="lg:hidden" onClick={() => setIsSearchOpen(true)}>
                                <Search size={24} />
                            </button>
                            <button className="relative">
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

            {/* Main Content */}
            <main className="px-4 py-6">
                {/* Hero Section - Mobile Optimized */}
                <div className="relative rounded-xl overflow-hidden mb-6 h-48 sm:h-96 bg-green-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-transparent" />
                    <div className="relative z-10 h-full flex flex-col justify-center px-6">
                        <h2 className="text-xl sm:text-4xl font-bold text-white mb-2">Segar & Organik</h2>
                        <p className="text-sm sm:text-xl text-white mb-4">Dapatkan barangan runcit segar dihantar ke pintu rumah anda</p>
                        <button className="bg-white text-green-800 px-4 py-2 rounded-lg font-semibold text-sm w-fit hover:bg-green-50">
                            Beli Sekarang
                        </button>
                    </div>
                </div>

                {/* Deals Section - Enhanced Mobile Layout */}
                <section className="mb-6">
                    <h2 className="text-lg font-semibold mb-3">Tawaran Istimewa</h2>
                    <div className="grid grid-cols-1 gap-3">
                        {deals.map((deal, index) => (
                            <Card key={index} className={`${deal.color} border-none`}>
                                <CardContent className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{deal.title}</h3>
                                    <p className="text-sm text-gray-600">{deal.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Featured Products - Enhanced Mobile Grid */}
                <section>
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="text-lg font-semibold">Produk Pilihan</h2>
                        <button className="text-green-800 text-sm font-medium">Lihat Semua</button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        {featuredProducts.map((product, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-3">
                                    <div className="aspect-square bg-gray-100 rounded-lg mb-2">
                                        {product.discount && (
                                            <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded-br-lg">
                                                {product.discount}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="font-medium text-sm text-gray-800 line-clamp-2 mb-1">{product.name}</h3>
                                    <div className="flex items-center space-x-1 mb-1">
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-sm text-gray-600">{product.rating}</span>
                                        <span className="text-xs text-gray-400">({product.reviews})</span>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-green-800 font-bold text-sm">{product.price}</p>
                                            <p className="text-xs text-gray-500">{product.unit}</p>
                                        </div>
                                        <button className="bg-green-800 text-white p-2 rounded-full hover:bg-green-700">
                                            <ShoppingCart size={18} />
                                        </button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </main>

            {/* Mobile Bottom Navigation */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-4 z-40">
                <div className="flex justify-around">
                    <button className="flex flex-col items-center text-green-800">
                        <Home size={24} />
                        <span className="text-xs mt-1">Utama</span>
                    </button>
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

            {/* Footer - Simplified for Mobile */}
            <footer className="bg-green-900 text-white pb-20 lg:pb-8">
                <div className="px-4 py-8">
                    <div className="grid grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 className="text-sm font-semibold mb-3">Khidmat Pelanggan</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-green-100 text-sm">Soalan Lazim</a></li>
                                <li><a href="#" className="text-green-100 text-sm">Polisi Penghantaran</a></li>
                                <li><a href="#" className="text-green-100 text-sm">Pemulangan</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold mb-3">Pautan Pantas</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-green-100 text-sm">Akaun Saya</a></li>
                                <li><a href="#" className="text-green-100 text-sm">Jejak Pesanan</a></li>
                                <li><a href="#" className="text-green-100 text-sm">Senarai Wishlist</a></li>
                                <li><a href="#" className="text-green-100 text-sm">Kad Hadiah</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="border-t border-green-800 pt-8">
                        <h3 className="text-sm font-semibold mb-3">Surat Berita</h3>
                        <p className="text-green-100 text-sm mb-4">Langgan untuk menerima kemas kini dan tawaran eksklusif.</p>
                        <div className="flex flex-col space-y-2">
                            <input
                                type="email"
                                placeholder="Masukkan emel anda"
                                className="w-full px-4 py-2 rounded-lg text-gray-800 text-sm"
                            />
                            <button className="w-full bg-green-700 px-4 py-2 rounded-lg text-sm hover:bg-green-600">
                                Langgan
                            </button>
                        </div>
                    </div>

                    <div className="border-t border-green-800 mt-8 pt-8 text-center">
                        <p className="text-green-100 text-xs">&copy; 2024 PasarMan. Hak cipta terpelihara.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Page;
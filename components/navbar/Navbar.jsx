'use client';
import {
    Search,
    ShoppingCart,
    Menu,
    User,
    Heart,
    X,
    ChevronRight,
    ChevronDown,
    Settings,
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { categories } from '@/data';
import Container from '@/components/Container';
import CartModal from '@/components/cart/CartModal';
import { useCart } from '@/app/context/CartContext';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('Semua');
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        updateQuantity,
        removeItem,
        getCartTotal,
    } = useCart();
    const { itemCount, subtotal, shipping, total } = getCartTotal();

    return (
        <>
            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-black transition-opacity duration-300 lg:hidden z-50 ${
                    isMobileMenuOpen
                        ? 'opacity-50'
                        : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />
            <div
                className={`fixed inset-y-0 left-0 w-full max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-out lg:hidden z-50 ${
                    isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className='h-full flex flex-col'>
                    <div className='p-4 border-b'>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-xl font-bold text-green-800'>
                                Menu
                            </h2>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className='p-2 hover:bg-gray-100 rounded-full transition-colors'
                            >
                                <X size={24} className='text-gray-500' />
                            </button>
                        </div>
                    </div>

                    <div className='flex-1 overflow-y-auto'>
                        <nav className='p-4'>
                            <div className='space-y-4'>
                                {categories.map(category => (
                                    <a
                                        key={category}
                                        href='#'
                                        className='flex items-center justify-between p-2 rounded-lg hover:bg-green-50 transition-colors'
                                    >
                                        <span className='text-gray-700'>
                                            {category}
                                        </span>
                                        <ChevronRight
                                            size={20}
                                            className='text-gray-400'
                                        />
                                    </a>
                                ))}
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Cart */}
            <CartModal
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cartItems={cartItems}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
                subtotal={subtotal}
                shipping={shipping}
                total={total}
            />

            {/* Header */}
            <header className='bg-green-800 text-white sticky top-0 z-20'>
                {/* Top Promo Banner */}
                <div className='bg-green-900'>
                    <Container>
                        <p className='py-2 text-center text-xs'>
                            Penghantaran percuma untuk pesanan melebihi RM50!
                        </p>
                    </Container>
                </div>

                {/* Main Navigation Bar */}
                <Container>
                    <div className='py-3'>
                        <div className='flex items-center justify-between'>
                            {/* Left Section - Logo and Categories */}
                            <div className='flex items-center space-x-8'>
                                <div className='flex items-center space-x-4 lg:space-x-0'>
                                    <button
                                        className='lg:hidden'
                                        onClick={() =>
                                            setIsMobileMenuOpen(true)
                                        }
                                    >
                                        <Menu size={24} />
                                    </button>
                                    <Link
                                        href='/'
                                        className='text-xl font-bold'
                                    >
                                        DapurSegar
                                    </Link>
                                </div>

                                {/* Desktop Categories */}
                                <nav className='hidden lg:flex space-x-6'>
                                    {categories.slice(0, 3).map(category => (
                                        <div
                                            key={category}
                                            className='relative group'
                                        >
                                            <button className='flex items-center space-x-1 py-2 text-green-100 hover:text-white'>
                                                <span>{category}</span>
                                                <ChevronDown size={16} />
                                            </button>
                                            <div className='absolute hidden group-hover:block w-48 bg-white rounded-lg shadow-lg p-2 mt-1 z-[70]'>
                                                <div className='py-1'>
                                                    <a
                                                        href='#'
                                                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 rounded-md'
                                                    >
                                                        Subcategory 1
                                                    </a>
                                                    <a
                                                        href='#'
                                                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 rounded-md'
                                                    >
                                                        Subcategory 2
                                                    </a>
                                                    <a
                                                        href='#'
                                                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 rounded-md'
                                                    >
                                                        Subcategory 3
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </nav>
                            </div>

                            {/* Center Section - Search Bar (Desktop) */}
                            <div className='hidden lg:block flex-1 max-w-2xl mx-8'>
                                <div className='relative'>
                                    <input
                                        type='text'
                                        placeholder='Cari produk...'
                                        className='w-full px-4 py-2 pl-10 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500'
                                    />
                                    <Search
                                        size={20}
                                        className='absolute left-3 top-2.5 text-gray-400'
                                    />
                                </div>
                            </div>

                            {/* Right Section - User Actions */}
                            <div className='flex items-center space-x-6'>
                                {/* Desktop Navigation Items */}
                                <div className='hidden lg:flex items-center space-x-6'>
                                    <button className='flex items-center space-x-1 text-green-100 hover:text-white'>
                                        <Heart size={24} />
                                        <span className='text-sm'>
                                            Wishlist
                                        </span>
                                    </button>

                                    {/* User Menu Dropdown */}
                                    <div className='relative'>
                                        <button
                                            className='flex items-center space-x-1 text-green-100 hover:text-white'
                                            onClick={() =>
                                                setIsUserMenuOpen(
                                                    !isUserMenuOpen
                                                )
                                            }
                                        >
                                            <User size={24} />
                                            <span className='text-sm'>
                                                Akaun
                                            </span>
                                            <ChevronDown size={16} />
                                        </button>

                                        {isUserMenuOpen && (
                                            <div className='absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-[70]'>
                                                <a
                                                    href='#'
                                                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-green-50'
                                                >
                                                    Profil Saya
                                                </a>
                                                <a
                                                    href='#'
                                                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-green-50'
                                                >
                                                    Pesanan Saya
                                                </a>
                                                <a
                                                    href='#'
                                                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-green-50'
                                                >
                                                    Tetapan
                                                </a>
                                                <div className='border-t border-gray-100 my-1'></div>
                                                <a
                                                    href='#'
                                                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-green-50'
                                                >
                                                    Log Keluar
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Settings Icon */}
                                <Link
                                    href='/settings'
                                    className='text-green-100 hover:text-white'
                                    aria-label='Settings'
                                >
                                    <Settings size={24} />
                                </Link>

                                {/* Shopping Cart */}
                                <button
                                    className='relative'
                                    onClick={() => setIsCartOpen(true)}
                                    aria-label={`Shopping cart with ${itemCount} items`}
                                >
                                    <ShoppingCart size={24} />
                                    {itemCount > 0 && (
                                        <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                                            {itemCount}
                                        </span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>

                {/* Mobile Category Scroll */}
                <div className='lg:hidden border-t border-green-700 z-30'>
                    <Container className='overflow-x-auto whitespace-nowrap py-2'>
                        <div className='inline-flex space-x-4'>
                            {['Semua', ...categories].map(category => (
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
                    </Container>
                </div>
            </header>
        </>
    );
};

export default Navbar;

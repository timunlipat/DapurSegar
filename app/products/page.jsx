"use client";

import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import ProductCard from '@/components/product-card/ProductCard';
import { categories, featuredProducts } from '@/data';

const ProductListingPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-asc', 'price-desc'

    // Memoize filtered products to prevent unnecessary recalculations
    const filteredProducts = useMemo(() => {
        let filtered = featuredProducts.filter(product => {
            const matchesCategory = selectedCategory === 'all' || categories[selectedCategory] === product.category;
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        // Apply sorting
        switch (sortBy) {
            case 'price-asc':
                return filtered.sort((a, b) => a.price - b.price);
            case 'price-desc':
                return filtered.sort((a, b) => b.price - a.price);
            default:
                return filtered; // 'featured' uses default order
        }
    }, [selectedCategory, searchQuery, sortBy]);

    const resetFilters = () => {
        setSelectedCategory('all');
        setSearchQuery('');
        setSortBy('featured');
    };

    return (
        <MainLayout>
            <main className="px-4 lg:px-8 py-6">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        Semua Produk
                    </h1>
                    <p className="text-gray-600">
                        Terokai pelbagai produk berkualiti tinggi untuk keperluan harian anda
                    </p>
                </div>

                {/* Search and Filter Section */}
                <div className="mb-6 space-y-4">
                    <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
                        {/* Search Bar */}
                        <div className="relative flex-grow">
                            <Search
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                size={20}
                            />
                            <input
                                type="text"
                                placeholder="Cari produk..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Filter and Sort Controls */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 md:w-auto"
                            >
                                <SlidersHorizontal size={20} />
                                <span>Filter</span>
                            </button>

                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="featured">Featured</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                    {/* Category Filter */}
                    {showFilters && (
                        <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                            <h3 className="font-semibold mb-3">Kategori</h3>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    onClick={() => setSelectedCategory('all')}
                                    className={`px-3 py-1.5 rounded-full text-sm ${
                                        selectedCategory === 'all'
                                            ? 'bg-green-800 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    Semua
                                </button>
                                {categories.map((category, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedCategory(index)}
                                        className={`px-3 py-1.5 rounded-full text-sm ${
                                            selectedCategory === index
                                                ? 'bg-green-800 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Results Summary */}
                <div className="mb-4 text-gray-600">
                    {filteredProducts.length} products found
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {filteredProducts.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            unit={product.unit}
                            rating={product.rating}
                            reviews={product.reviews}
                            discount={product.discount}
                            image={product.image}
                        />
                    ))}
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">Tiada produk dijumpai</p>
                        <button
                            onClick={resetFilters}
                            className="mt-4 text-green-800 hover:text-green-700"
                        >
                            Reset filter
                        </button>
                    </div>
                )}

                {/* Load More Button (optional) */}
                {filteredProducts.length > 0 && (
                    <div className="text-center mt-8">
                        <button
                            className="px-6 py-2 border border-green-800 text-green-800 rounded-lg hover:bg-green-50"
                            onClick={() => {
                                // Implement load more functionality
                            }}
                        >
                            Load More
                        </button>
                    </div>
                )}
            </main>
        </MainLayout>
    );
};

export default ProductListingPage;
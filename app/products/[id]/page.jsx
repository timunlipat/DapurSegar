"use client";
import { useState, useEffect } from 'react';
import Container from '@/components/Container';
import MainLayout from '@/components/layout/MainLayout';
import { useParams } from 'next/navigation';
import { ShoppingCart, Minus, Plus, Star, ChevronLeft } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from '@/app/context/CartContext';
import Link from 'next/link';
import { featuredProducts } from '@/data';
import CartModal from '@/components/cart/CartModal';
import { getPlaceholderImage } from '@/utils/images';

const ProductDetailsPage = () => {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const {
        addToCart,
        cartItems,
        updateQuantity,
        removeItem,
        getCartTotal,
        isCartOpen,
        setIsCartOpen
    } = useCart();
    const { subtotal, shipping, total } = getCartTotal();
    const params = useParams();

    // Initialize product and check if it's already in cart
    useEffect(() => {
        const productId = params.id;
        const foundProduct = featuredProducts.find(p => p.id.toString() === productId);

        if (foundProduct) {
            setProduct(foundProduct);
            setQuantity(1); // Always start with quantity 1 when product changes
        } else {
            setProduct(null);
        }
    }, [params.id]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">Product not found</p>
            </div>
        );
    }

    const handleQuantityChange = (delta) => {
        setQuantity(prev => Math.max(1, prev + delta));
    };

    const handleAddToCart = () => {
        if (product) {
            addToCart({
                ...product,
                quantity
            });
            setQuantity(1);
        }
    };

    return (
        <main role="main">
            <Button
                variant="ghost"
                asChild
                className="text-green-800 hover:text-green-700 hover:bg-green-50 mb-6 mt-[-8]"
            >
                <Link href="/products" className="inline-flex items-center">
                    <ChevronLeft className="w-5 h-5 mr-1"/>
                    Back to Products
                </Link>
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:min-h-[600px] mb-8">
                {/* Product Image Section */}
                <div className="flex items-stretch">
                    <div className="w-full relative bg-gray-100 rounded-xl overflow-hidden min-h-[300px] md:min-h-[400px]">
                        <img
                            src={getPlaceholderImage(product.name)}
                            alt={product.name}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {product.discount && (
                            <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1.5 rounded-lg font-medium">
                                {product.discount}
                            </span>
                        )}
                    </div>
                </div>

                {/* Product Info Section */}
                <div className="flex flex-col h-full">
                    <div className="flex-grow space-y-6">
                        <div>
                            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                                {product.name}
                            </h1>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, index) => (
                                        <div key={index} className="relative w-5 h-5">
                                            {/* Background star (gray) */}
                                            <Star className="absolute w-5 h-5 text-gray-300"/>

                                            {/* Foreground star (yellow) with width based on rating */}
                                            <div
                                                className="absolute overflow-hidden"
                                                style={{
                                                    width: `${Math.max(0, Math.min(100, (product.rating - index) * 100))}%`
                                                }}
                                            >
                                                <Star className="w-5 h-5 text-yellow-400 fill-current"/>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <span className="text-gray-600">
                                    {product.reviews} reviews
                                </span>
                            </div>
                        </div>

                        <div className="border-t border-b py-6">
                            <div className="flex items-baseline space-x-2">
                                <span className="text-3xl font-bold text-green-800">
                                    RM{product.price.toFixed(2)}
                                </span>
                                <span className="text-gray-600">/ {product.unit}</span>
                            </div>
                            {product.discount && (
                                <div className="mt-2">
                                    <span className="text-red-500 font-medium">
                                        Save {product.discount}
                                    </span>
                                </div>
                            )}
                        </div>

                        {product.description && (
                            <div>
                                <h2 className="text-lg font-semibold mb-2">Description</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Quantity and Add to Cart section */}
                    <div className="mt-auto space-y-4">
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-700 font-medium">Quantity:</span>
                            <div className="flex items-center rounded-lg border">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleQuantityChange(-1)}
                                    className="h-10 rounded-l-lg border-r"
                                >
                                    <Minus className="w-4 h-4"/>
                                </Button>
                                <span className="w-12 text-center font-medium">
                                    {quantity}
                                </span>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleQuantityChange(1)}
                                    className="h-10 rounded-r-lg border-l"
                                >
                                    <Plus className="w-4 h-4"/>
                                </Button>
                            </div>
                        </div>

                        <Button
                            onClick={handleAddToCart}
                            size="lg"
                            className="w-full"
                        >
                            <ShoppingCart className="w-5 h-5 mr-2"/>
                            Add to Cart
                        </Button>

                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <Card>
                                <CardContent className="p-4">
                                    <h3 className="font-semibold text-gray-900 mb-1">
                                        Free Delivery
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        For orders over RM50
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4">
                                    <h3 className="font-semibold text-gray-900 mb-1">
                                        Quality Guarantee
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Fresh and organic products
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

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
        </main>
    );
};

export default ProductDetailsPage;
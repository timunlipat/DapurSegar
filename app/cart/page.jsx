"use client";

import Container from '@/components/Container';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import { useCart } from '@/app/context/CartContext';
import { ShoppingBag } from 'lucide-react';

const CartPage = () => {
    const {
        cartItems = [],
        updateQuantity,
        removeItem,
        getCartTotal
    } = useCart();

    const { subtotal, shipping, total } = getCartTotal();

    // Handle empty cart state
    if (cartItems.length === 0) {
        return (
            <main className="py-6 min-h-screen bg-gray-50">
                <Container>
                    <div className="text-center py-16">
                        <div className="flex justify-center mb-6">
                            <ShoppingBag size={64} className="text-gray-300" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">Troli Belanja Anda Kosong</h1>
                        <p className="text-gray-500 mb-8">
                            Mari mulakan membeli-belah untuk mengisi troli anda!
                        </p>
                        <a
                            href="/"
                            className="inline-block bg-green-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                        >
                            Teruskan Membeli-belah
                        </a>
                    </div>
                </Container>
            </main>
        );
    }

    return (
        <main className="py-6 min-h-screen bg-gray-50">
            <Container>
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Troli Belanja</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} dalam troli anda
                    </p>
                </div>

                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    {/* Cart Items Section */}
                    <div className="lg:col-span-8">
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <CartItem
                                    key={ item.id || [] }
                                    item={item}
                                    updateQuantity={updateQuantity}
                                    removeItem={removeItem}
                                />
                            ))}
                        </div>

                        {/* Continue Shopping Link */}
                        <div className="mt-8 text-center lg:text-left">
                            <a
                                href="/"
                                className="text-green-800 font-medium hover:underline"
                            >
                                ← Teruskan Membeli-belah
                            </a>
                        </div>
                    </div>

                    {/* Cart Summary Section */}
                    <div className="lg:col-span-4 mt-8 lg:mt-0">
                        <div className="sticky top-24">
                            <CartSummary
                                subtotal={subtotal}
                                shipping={shipping}
                                total={total}
                            />

                            {shipping > 0 && (
                                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                                    <p className="text-sm text-yellow-800">
                                        Tambah RM{(50 - subtotal).toFixed(2)} lagi untuk layak mendapat penghantaran percuma!
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
};

export default CartPage;
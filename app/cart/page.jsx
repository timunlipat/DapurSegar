"use client";

import { useState } from 'react';
import Container from '@/components/Container';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Epal Fuji",
            price: 8.90,
            quantity: 2,
            unit: "kg",
            image: "/api/placeholder/100/100"
        },
        {
            id: 2,
            name: "Brokoli Segar",
            price: 4.50,
            quantity: 1,
            unit: "unit",
            image: "/api/placeholder/100/100"
        },
        {
            id: 3,
            name: "Susu Segar",
            price: 7.90,
            quantity: 3,
            unit: "botol",
            image: "/api/placeholder/100/100"
        }
    ]);

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 50 ? 0 : 5.90;
    const total = subtotal + shipping;

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
                    <div className="lg:col-span-8">
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    updateQuantity={updateQuantity}
                                    removeItem={removeItem}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-4 mt-6 lg:mt-0">
                        <CartSummary
                            subtotal={subtotal}
                            shipping={shipping}
                            total={total}
                        />
                    </div>
                </div>
            </Container>
        </main>
    );
};

export default CartPage;
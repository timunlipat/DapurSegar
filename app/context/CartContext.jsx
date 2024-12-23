"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        try {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                const parsedCart = JSON.parse(savedCart);
                // Validate that parsedCart is an array
                if (Array.isArray(parsedCart)) {
                    setCartItems(parsedCart);
                } else {
                    setCartItems([]);
                }
            }
        } catch (error) {
            console.error('Error loading cart:', error);
            setCartItems([]);
        }
    }, []);

    // Save cart to localStorage when it changes
    useEffect(() => {
        try {
            localStorage.setItem('cart', JSON.stringify(cartItems));
        } catch (error) {
            console.error('Error saving cart:', error);
        }
    }, [cartItems]);

    const addToCart = (product) => {
        if (!product || !product.id) {
            console.error('Invalid product:', product);
            return;
        }

        setCartItems(prev => {
            // Log the current state for debugging
            console.log('Current cart state:', prev);
            console.log('Adding product:', product);

            // Find if the product already exists in the cart
            const existingItemIndex = prev.findIndex(item => item.id === product.id);
            console.log('Existing item index:', existingItemIndex);

            if (existingItemIndex !== -1) {
                // Create a new array with the updated item
                const newCart = [...prev];
                newCart[existingItemIndex] = {
                    ...newCart[existingItemIndex],
                    quantity: (newCart[existingItemIndex].quantity || 0) + 1
                };
                console.log('Updated cart:', newCart);
                return newCart;
            }

            // Add new item to cart
            const newCart = [...prev, { ...product, quantity: 1 }];
            console.log('New cart with added item:', newCart);
            return newCart;
        });

        // Open the cart when adding an item
        setIsCartOpen(true);
    };

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) {
            removeItem(id);
            return;
        }

        setCartItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const getCartTotal = () => {
        const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal >= 50 ? 0 : 5.90;
        return {
            subtotal,
            shipping,
            total: subtotal + shipping,
            itemCount: cartItems.reduce((sum, item) => sum + item.quantity, 0)
        };
    };

    const value = {
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        removeItem,
        getCartTotal
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
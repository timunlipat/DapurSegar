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
                if (Array.isArray(parsedCart)) {
                    setCartItems(parsedCart);
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

    const addToCart = (product, openCart = true) => {
        if (!product || !product.id) {
            console.error('Invalid product:', product);
            return;
        }

        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
            const quantity = product.quantity || 1;

            if (existingItemIndex !== -1) {
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity: updatedItems[existingItemIndex].quantity + quantity
                };
                return updatedItems;
            } else {
                return [...prevItems, { ...product, quantity }];
            }
        });

        // Only open cart if openCart is true
        if (openCart) {
            setTimeout(() => {
                setIsCartOpen(true);
            }, 100);
        }
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
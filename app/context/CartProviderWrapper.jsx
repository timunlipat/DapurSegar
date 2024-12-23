'use client';

import { CartProvider } from '@/app/context/CartContext';

export default function CartProviderWrapper({ children }) {
    return <CartProvider>{children}</CartProvider>;
}
"use client";
import { X } from 'lucide-react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

const CartModal = ({
                       isOpen,
                       onClose,
                       cartItems = [],
                       updateQuantity,
                       removeItem,
                       subtotal,
                       shipping,
                       total
                   }) => {
    const totalQuantity = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black transition-opacity duration-300 z-50 ${
                    isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
                }`}
                onClick={onClose}
            />

            {/* Sliding Panel */}
            <div
                className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-out z-50 ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="p-4 border-b">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold text-green-800">
                                Troli Belanja ({cartItems?.length || 0})
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X size={24} className="text-gray-500" />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto">
                        <div className="p-4">
                            {!cartItems || cartItems.length === 0 ? (
                                <div className="text-center py-8 text-gray-500">
                                    Troli anda kosong
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {shipping > 0 && (
                                        <div className="mb-2 p-4 bg-yellow-50 rounded-lg">
                                            <p className="text-sm text-yellow-800">
                                                Tambah RM{(50 - subtotal).toFixed(2)} lagi untuk layak mendapat penghantaran percuma!
                                            </p>
                                        </div>
                                    )}
                                    {cartItems.map((item) => (
                                        <CartItem
                                            key={`cart-item-${item.id}`}
                                            item={item}
                                            updateQuantity={updateQuantity}
                                            removeItem={removeItem}
                                            isCompact={true}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Footer with Cart Summary */}
                    {cartItems && cartItems.length > 0 && (
                        <div className="border-t bg-white p-4">
                            <CartSummary
                                subtotal={subtotal}
                                shipping={shipping}
                                total={total}
                                isCompact={true}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CartModal;
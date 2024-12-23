"use client";

import { Minus, Plus, Trash2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

const CartItem = ({ item, updateQuantity, removeItem, isCompact = false }) => {
    return (
        <Card className={`p-4 ${isCompact ? 'mb-2' : 'mb-4'}`}>
            <div className="flex items-center space-x-4">
                <img
                    src={item.image}
                    alt={item.name}
                    className={`object-cover rounded-lg ${isCompact ? 'w-16 h-16' : 'w-20 h-20'}`}
                />
                <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">RM{item.price.toFixed(2)} / {item.unit}</p>

                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 rounded-md hover:bg-gray-100"
                            >
                                <Minus size={16} className="text-gray-500" />
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 rounded-md hover:bg-gray-100"
                            >
                                <Plus size={16} className="text-gray-500" />
                            </button>
                        </div>

                        <div className="flex items-center space-x-4">
                            <span className="font-medium">
                                RM{(item.price * item.quantity).toFixed(2)}
                            </span>
                            <button
                                onClick={() => removeItem(item.id)}
                                className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                            >
                                <Trash2 size={isCompact ? 16 : 18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default CartItem;
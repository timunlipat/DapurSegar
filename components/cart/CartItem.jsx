"use client";

import { Minus, Plus, Trash2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const CartItem = ({ item, updateQuantity, removeItem, isCompact = false }) => {
    const placeholderImage = `/api/placeholder/400/400`;
    const isLowStock = item.stock && item.stock <= 5;
    const isOutOfStock = item.stock === 0;

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity > 0 && (!item.stock || newQuantity <= item.stock)) {
            updateQuantity(item.id, newQuantity);
        }
    };

    return (
        <Card className={`group transition-all duration-200 hover:shadow-md ${isCompact ? 'p-3 mb-2' : 'p-4 mb-4'}`}>
            <div className="flex items-start space-x-4">
                <div className={`relative overflow-hidden rounded-xl bg-gray-50 ${isCompact ? 'w-24 h-24' : 'w-24 h-24'}`}>
                    <img
                        src={item.image || placeholderImage}
                        alt={item.name}
                        className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                    />
                    {item.discount > 0 && (
                        <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                            -{item.discount}%
                        </Badge>
                    )}
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-medium text-gray-900 truncate pr-4 hover:text-blue-600 cursor-pointer">
                                {item.name}
                            </h3>
                            <div className="mt-1 space-y-1">
                                {item.variant && (
                                    <p className="text-sm text-gray-500">
                                        Variant: {item.variant}
                                    </p>
                                )}
                                <div className="flex items-center space-x-2">
                                    <p className="text-sm font-medium text-gray-900">
                                        RM{item.price.toFixed(2)}
                                    </p>
                                    {item.originalPrice && (
                                        <p className="text-sm text-gray-400 line-through">
                                            RM{item.originalPrice.toFixed(2)}
                                        </p>
                                    )}
                                    <span className="text-sm text-gray-500">/ {item.unit}</span>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-lg hover:bg-gray-100"
                            aria-label="Remove item"
                        >
                            <Trash2 size={isCompact ? 16 : 18} />
                        </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-1 bg-gray-50 rounded-lg p-1">
                            <Button
                                variant="ghost"
                                size="icon"
                                className={`h-8 w-8 ${item.quantity <= 1 ? 'text-gray-300' : 'text-gray-600'}`}
                                onClick={() => handleQuantityChange(item.quantity - 1)}
                                disabled={item.quantity <= 1 || isOutOfStock}
                            >
                                <Minus size={14} />
                            </Button>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 0)}
                                className="w-12 text-center bg-white border rounded-md py-1 text-sm"
                                min="1"
                                max={item.stock || 999}
                            />
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-gray-600"
                                onClick={() => handleQuantityChange(item.quantity + 1)}
                                disabled={isOutOfStock || (item.stock && item.quantity >= item.stock)}
                            >
                                <Plus size={14} />
                            </Button>
                        </div>

                        <div className="flex flex-col items-end">
                            <span className="font-medium text-lg text-gray-900">
                                RM{(item.price * item.quantity).toFixed(2)}
                            </span>
                            {isLowStock && (
                                <span className="text-xs text-red-500 mt-1">
                                    Only {item.stock} left
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default CartItem;
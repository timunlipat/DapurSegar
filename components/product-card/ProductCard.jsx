import { ShoppingCart } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const ProductCard = ({
                         name,
                         price,
                         unit,
                         rating,
                         reviews,
                         discount,
                         onAddToCart
                     }) => {
    return (
        <Card className="h-full hover:shadow-lg transition-all hover:scale-105">
            <CardContent className="p-3">
                {/* Image container with fixed ratio */}
                <div className="relative w-full pt-[100%] bg-gray-100 rounded-lg mb-3">
                    {discount && (
                        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-lg">
                            {discount}
                        </span>
                    )}
                </div>

                {/* Product details */}
                <div className="space-y-2">
                    <h3 className="font-medium text-sm text-gray-800 line-clamp-2 min-h-[2.5rem]">
                        {name}
                    </h3>

                    <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600">{rating}</span>
                        <span className="text-xs text-gray-400">({reviews})</span>
                    </div>

                    <div className="flex justify-between items-end pt-1">
                        <div>
                            <p className="text-green-800 font-bold text-sm">{price}</p>
                            <p className="text-xs text-gray-500">{unit}</p>
                        </div>
                        <button
                            className="bg-green-800 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
                            onClick={onAddToCart}
                            aria-label="Add to cart"
                        >
                            <ShoppingCart size={16} />
                        </button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
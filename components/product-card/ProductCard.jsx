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
            <CardContent className="p-4 md:p-5">
                {/* Image container with fixed ratio - made larger */}
                <div className="relative w-full pt-[100%] bg-gray-100 rounded-lg mb-4 md:mb-5">
                    {discount && (
                        <span className="absolute top-3 right-3 bg-red-500 text-white text-sm font-medium px-3 py-1.5 rounded-lg">
                            {discount}
                        </span>
                    )}
                </div>

                {/* Product details - improved spacing and sizes */}
                <div className="space-y-3 md:space-y-4">
                    <h3 className="font-semibold text-base md:text-lg text-gray-900 line-clamp-2 min-h-[2.75rem] leading-snug">
                        {name}
                    </h3>

                    <div className="flex items-center space-x-2">
                        <span className="text-yellow-400 text-lg md:text-xl">★</span>
                        <span className="text-sm md:text-base font-medium text-gray-700">{rating}</span>
                        <span className="text-sm md:text-base text-gray-500">({reviews})</span>
                    </div>

                    <div className="flex justify-between items-end pt-2">
                        <div className="space-y-1">
                            <p className="text-green-800 font-bold text-lg md:text-xl">{price}</p>
                            <p className="text-sm md:text-base text-gray-600">{unit}</p>
                        </div>
                        <button
                            className="bg-green-800 text-white p-3 rounded-full hover:bg-green-700 transition-colors"
                            onClick={onAddToCart}
                            aria-label="Add to cart"
                        >
                            <ShoppingCart size={20} />
                        </button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
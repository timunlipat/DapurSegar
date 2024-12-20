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
        <Card className="hover:shadow-lg transition-all hover:scale-105">
            <CardContent className="p-4">
                <div className="aspect-square bg-gray-100 rounded-lg mb-3 relative">
                    {discount && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-bl-lg">
              {discount}
            </span>
                    )}
                </div>
                <h3 className="font-medium text-sm text-gray-800 line-clamp-2 mb-2 h-10">
                    {name}
                </h3>
                <div className="flex items-center space-x-1 mb-2">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm text-gray-600">{rating}</span>
                    <span className="text-xs text-gray-400">({reviews})</span>
                </div>
                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-green-800 font-bold text-sm">{price}</p>
                        <p className="text-xs text-gray-500">{unit}</p>
                    </div>
                    <button
                        className="bg-green-800 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
                        onClick={onAddToCart}
                    >
                        <ShoppingCart size={18} />
                    </button>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
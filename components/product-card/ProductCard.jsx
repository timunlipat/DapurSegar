"use client";
import { ShoppingCart } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from '@/app/context/CartContext';
import { useRouter } from 'next/navigation';
import { getPlaceholderImage } from '@/utils/images';

const ProductCard = ({
                         id,
                         name,
                         price,
                         unit,
                         rating,
                         reviews,
                         discount,
                         image = placeholderImage
                     }) => {
    const { addToCart } = useCart();
    const router = useRouter();
    const imageUrl = image || getPlaceholderImage(name);

    const handleAddToCart = (e) => {
        e.stopPropagation(); // Prevent card click when adding to cart
        addToCart({
            id,
            name,
            price,
            unit,
            image: imageUrl,
        });
    };

    const handleCardClick = () => {
        router.push(`/products/${id}`);
    };

    return (
        <Card className="h-full hover:shadow-lg transition-all hover:scale-105 cursor-pointer" onClick={handleCardClick}>
            <CardContent className="p-4 md:p-5">
                {/* Image container with fixed ratio */}
                <div className="relative w-full pt-[100%] bg-gray-100 rounded-lg mb-4 md:mb-5">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                    {discount && (
                        <span className="absolute top-3 right-3 bg-red-500 text-white text-sm font-medium px-3 py-1.5 rounded-lg">
                            {discount}
                        </span>
                    )}
                </div>

                {/* Product details */}
                <div className="space-y-3 md:space-y-0">
                    <h3 className="font-semibold text-base md:text-lg text-gray-900 line-clamp-2 min-h-[2.2rem] leading-snug">
                        {name}
                    </h3>

                    <div className="flex items-center space-x-2">
                        <span className="text-yellow-400 text-lg md:text-xl">★</span>
                        <span className="text-sm md:text-base font-medium text-gray-700">{rating}</span>
                        <span className="text-sm md:text-base text-gray-500">({reviews})</span>
                    </div>

                    <div className="flex justify-between items-end pt-2">
                        <div className="space-y-1">
                            <p className="text-green-800 font-bold text-lg md:text-xl">
                                RM{price.toFixed(2)}
                            </p>
                            <p className="text-sm md:text-base text-gray-600">{unit}</p>
                        </div>
                        <button
                            className="bg-green-800 text-white p-3 rounded-full hover:bg-green-700 transition-colors"
                            onClick={handleAddToCart}
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
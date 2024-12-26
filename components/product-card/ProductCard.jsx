"use client";
import { ShoppingCart } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useCart } from '@/app/context/CartContext';
import { useRouter } from 'next/navigation';
import { getPlaceholderImage } from '@/utils/images';
import { useState } from 'react';

const ProductCard = ({
                         id,
                         name,
                         price,
                         unit,
                         rating,
                         reviews,
                         discount,
                         image,
                         pricePerUnit
                     }) => {
    const { addToCart } = useCart();
    const router = useRouter();
    const [isHovered, setIsHovered] = useState(false);
    const [isAdding, setIsAdding] = useState(false);

    const imageUrl = image || getPlaceholderImage(name);

    const handleAddToCart = (e) => {
        e.stopPropagation();
        setIsAdding(true);
        addToCart({
            id,
            name,
            price,
            unit,
            image: imageUrl,
            quantity: 1
        });
        // Reset animation after 500ms
        setTimeout(() => setIsAdding(false), 500);
    };

    const handleCardClick = () => {
        router.push(`/products/${id}`);
    };

    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<span key={i} className="text-yellow-400 text-sm">★</span>);
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<span key={i} className="text-yellow-400 text-sm">★</span>);
            } else {
                stars.push(<span key={i} className="text-gray-300 text-sm">★</span>);
            }
        }
        return stars;
    };

    return (
        <TooltipProvider>
            <Card
                className={`
                    group relative h-full bg-white rounded-lg 
                    shadow-sm hover:shadow-md 
                    transition-all duration-200 cursor-pointer
                `}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleCardClick}
            >
                {/* Promotion Tag */}
                {discount && (
                    <div className="absolute -top-2 -right-2 z-10">
                        <div className={`
                            bg-red-500 text-white 
                            text-xs font-medium 
                            px-2 py-1 rounded-lg 
                            shadow-sm transform -rotate-6
                        `}>
                            {discount}
                        </div>
                    </div>
                )}

                <CardContent className="p-3">
                    {/* Image Container */}
                    <div className="relative w-full pt-[100%] bg-gray-50 rounded-lg mb-3 overflow-hidden">
                        <img
                            src={imageUrl}
                            alt={name}
                            className={`
                                absolute inset-0 
                                w-full h-full object-cover 
                                transition-transform duration-300
                                ${isHovered ? 'scale-105' : 'scale-100'}
                            `}
                            onError={(e) => {
                                e.target.src = getPlaceholderImage(name);
                            }}
                        />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col h-[120px]">
                        {/* Title with Tooltip */}
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <h3 className="font-medium text-gray-900 line-clamp-2 mb-1 min-h-[40px]">
                                    {name}
                                </h3>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{name}</p>
                            </TooltipContent>
                        </Tooltip>

                        {/* Ratings */}
                        <div className="flex items-center gap-1 mb-1">
                            <div className="flex">
                                {renderStars()}
                            </div>
                            <span className="text-xs text-gray-600">
                                {rating} ({reviews} reviews)
                            </span>
                        </div>

                        {/* Price Section */}
                        <div className="mt-auto">
                            <div className="flex items-end justify-between">
                                {/* Price and Unit Information */}
                                <div>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-sm text-gray-500">RM</span>
                                        <span className="text-lg font-bold text-gray-900">
                                            {price.toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="text-xs text-gray-500 space-y-0.5">
                                        <p>{unit}</p>
                                        {pricePerUnit && (
                                            <p className="text-gray-400">
                                                {pricePerUnit}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Add to Cart Button with Tooltip */}
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <button
                                            onClick={handleAddToCart}
                                            className={`
                                                flex items-center justify-center
                                                w-10 h-10 rounded-full
                                                transition-all duration-200
                                                ${isAdding
                                                ? 'bg-green-600 text-white scale-95'
                                                : 'bg-green-700 text-white hover:bg-green-600'
                                            }
                                            `}
                                            aria-label="Add to cart"
                                        >
                                            <ShoppingCart size={18} />
                                        </button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Add to cart</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </TooltipProvider>
    );
};

export default ProductCard;
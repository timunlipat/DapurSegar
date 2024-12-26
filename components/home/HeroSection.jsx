"use client";
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const HeroSection = ({
                         carouselData = [],
                         autoPlayInterval = 5000,
                         secondaryBanners = []
                     }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying || carouselData.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselData.length);
        }, autoPlayInterval);

        return () => clearInterval(timer);
    }, [carouselData.length, isAutoPlaying, autoPlayInterval]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselData.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
        setIsAutoPlaying(false);
    };

    return (
        <div className="lg:grid lg:grid-cols-12 lg:gap-6 mb-6">
            {/* Main Hero Carousel */}
            <div className="relative rounded-xl overflow-hidden mb-6 h-48 sm:h-96 lg:col-span-8 lg:mb-0">
                <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
                     style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {carouselData.map((slide, index) => (
                        <div
                            key={index}
                            className="w-full h-full flex-shrink-0"
                            style={{ backgroundColor: slide.backgroundColor }}
                        >
                            {slide.image && (
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                            <div className="relative z-10 h-full flex flex-col justify-center px-6">
                                <h2 className="text-xl sm:text-4xl font-bold text-white mb-2">
                                    {slide.title}
                                </h2>
                                <p className="text-sm sm:text-xl text-white mb-4">
                                    {slide.description}
                                </p>
                                {slide.buttonText && (
                                    <Button
                                        asChild
                                        className="bg-white text-green-800 hover:bg-green-50 w-fit"
                                        size="lg"
                                        onClick={() => setIsAutoPlaying(false)}
                                    >
                                        <Link href={slide.buttonLink || '#'}>
                                            {slide.buttonText}
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {carouselData.length > 1 && (
                    <>
                        {/* Carousel Controls */}
                        <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                            <Button
                                variant="secondary"
                                size="icon"
                                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40"
                                onClick={prevSlide}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="secondary"
                                size="icon"
                                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40"
                                onClick={nextSlide}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>

                        {/* Carousel Indicators */}
                        <div className="absolute bottom-4 left-4 flex gap-2 z-20">
                            {carouselData.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                        index === currentSlide
                                            ? 'bg-white w-4'
                                            : 'bg-white/50'
                                    }`}
                                    onClick={() => {
                                        setCurrentSlide(index);
                                        setIsAutoPlaying(false);
                                    }}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Secondary Promotional Banners - Desktop Only */}
            <div className="hidden lg:flex lg:col-span-4 lg:flex-col lg:gap-4 lg:h-full">
                {secondaryBanners.map((banner, index) => (
                    <div
                        key={index}
                        className="relative rounded-xl overflow-hidden flex-1"
                        style={{ backgroundColor: banner.backgroundColor }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"/>
                        <div className="relative z-10 h-full flex flex-col justify-center p-6">
                            <h3 className="text-xl font-bold text-white mb-1">{banner.title}</h3>
                            <p className="text-sm text-white mb-2">{banner.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroSection;
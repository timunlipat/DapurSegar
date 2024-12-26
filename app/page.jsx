import { Button } from "@/components/ui/button";
import { deals, featuredProducts } from '@/data';
import Link from 'next/link';
import ProductCard from '@/components/product-card/ProductCard';
import Container from '@/components/Container';
import { ChevronRight } from 'lucide-react';
import DealCard from '@/components/DealCard';
import HeroSection from '@/components/home/HeroSection';
import { carouselData, secondaryBannersData} from '@/data'

const HomePage = () => {
    return (
        <main className="py-6">
            <Container>
                {/*Hero section*/}
                <HeroSection carouselData={carouselData} secondaryBanners={secondaryBannersData} autoPlayInterval={3000}/>

                {/* Enhanced Deals Section */}
                <section className="mb-12">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-2xl lg:text-3xl font-bold mb-1">Tawaran Istimewa</h2>
                            <p className="text-gray-600">Tawaran terhad untuk hari ini</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {deals.map((deal, index) => (
                            <DealCard key={index} deal={deal} index={index} />
                        ))}
                    </div>
                </section>

                {/* Featured Products Section */}
                <section>
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-2xl lg:text-3xl font-bold mb-1">Produk Pilihan</h2>
                            <p className="text-gray-600">Produk popular minggu ini</p>
                        </div>
                        <Button
                            variant="ghost"
                            asChild
                            className="text-green-800 hover:text-green-600 hover:bg-green-50"
                        >
                            <Link href="/products" className="inline-flex items-center">
                                Lihat Semua
                                <ChevronRight className="w-4 h-4 ml-1" />
                            </Link>
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {featuredProducts.slice(0, 8).map((product, index) => (
                            <div key={index} className={index >= 4 ? 'hidden md:block' : ''}>
                                <ProductCard
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    unit={product.unit}
                                    rating={product.rating}
                                    reviews={product.reviews}
                                    discount={product.discount}
                                    image={product.image}
                                    description={product.description}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </Container>
        </main>
    );
}

export default HomePage;
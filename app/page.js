import { Button } from "@/components/ui/button";
import { deals, featuredProducts } from '@/data';
import Link from 'next/link';
import ProductCard from '@/components/product-card/ProductCard';
import Container from '@/components/Container';
import { ChevronRight } from 'lucide-react';
import DealCard from '@/components/DealCard';

const HomePage = () => {
    return (
        <main className="py-6">
            <Container>
                {/* Desktop Layout - Two Column Hero Section */}
                <div className="lg:grid lg:grid-cols-12 lg:gap-6 mb-6">
                    {/* Main Hero Banner */}
                    <div className="relative rounded-xl overflow-hidden mb-6 h-48 sm:h-96 bg-green-700 lg:col-span-8 lg:mb-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-transparent" />
                        <div className="relative z-10 h-full flex flex-col justify-center px-6">
                            <h2 className="text-xl sm:text-4xl font-bold text-white mb-2">Segar & Organik</h2>
                            <p className="text-sm sm:text-xl text-white mb-4">Dapatkan barangan runcit segar dihantar ke pintu rumah anda</p>
                            <Button
                                className="bg-white text-green-800 hover:bg-green-50 w-fit"
                                size="lg"
                            >
                                Beli Sekarang
                            </Button>
                        </div>
                    </div>

                    {/* Secondary Promotional Banners - Desktop Only */}
                    <div className="hidden lg:flex lg:col-span-4 lg:flex-col lg:gap-4 lg:h-full">
                        <div className="relative rounded-xl overflow-hidden flex-1 bg-blue-600">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-transparent"/>
                            <div className="relative z-10 h-full flex flex-col justify-center p-6">
                                <h3 className="text-xl font-bold text-white mb-1">Penghantaran Percuma</h3>
                                <p className="text-sm text-white mb-2">Untuk pesanan melebihi RM50</p>
                            </div>
                        </div>
                        <div className="relative rounded-xl overflow-hidden flex-1 bg-purple-600">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-transparent"/>
                            <div className="relative z-10 h-full flex flex-col justify-center p-6">
                                <h3 className="text-xl font-bold text-white mb-1">Ahli Baru</h3>
                                <p className="text-sm text-white mb-2">Nikmati diskaun 15% untuk pembelian pertama</p>
                            </div>
                        </div>
                    </div>
                </div>

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
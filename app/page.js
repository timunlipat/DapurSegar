import { ShoppingCart, Home, Package, User, Search } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { deals, featuredProducts } from '@/data';
import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import MobileNav from '@/components/mobile-nav/MobileNav';
import ProductCard from '@/components/product-card/ProductCard';
import Container from '@/components/Container';

const Page = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/*Navbar*/}
            <Navbar />

            {/* Main Content */}

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
                            <button className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold text-sm w-fit hover:bg-green-50 transition-all">
                                Beli Sekarang
                            </button>
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

                {/* Deals Section*/}
                <section className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl lg:text-2xl font-semibold">Tawaran Istimewa</h2>
                        <button className="text-green-800 text-sm font-medium hover:text-green-600">Lihat Semua</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {deals.map((deal, index) => (
                            <Card key={index} className={`${deal.color} border-none transform transition-all hover:scale-105`}>
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{deal.title}</h3>
                                    <p className="text-sm text-gray-600">{deal.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Featured Products Section */}
                <section>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl lg:text-2xl font-semibold">Produk Pilihan</h2>
                        <Link
                            href="/products"
                            className="text-green-800 text-sm font-medium hover:text-green-600"
                        >
                            Lihat Semua
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {featuredProducts.slice(0, 8).map((product, index) => (
                            <div key={index} className={index >= 4 ? 'hidden md:block' : ''}>
                                <ProductCard
                                    name={product.name}
                                    price={product.price}
                                    unit={product.unit}
                                    rating={product.rating}
                                    reviews={product.reviews}
                                    discount={product.discount}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </Container>
            </main>

            {/*MobileNav*/}
            <MobileNav/>

            {/*Footer*/}
            <Footer/>
        </div>
    );
};

export default Page;
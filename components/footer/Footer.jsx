const Footer = () => {
    return (
            <footer className="bg-green-900 text-white pb-20 lg:pb-8">
                <div className="px-4 lg:px-8 py-8">
                    <div className="lg:grid lg:grid-cols-4 lg:gap-8">
                        {/* Company Info */}
                        <div className="hidden lg:block">
                            <h2 className="text-2xl font-bold mb-4">PasarMan</h2>
                            <p className="text-green-100 text-sm mb-4">Destinasi untuk barangan runcit segar dan organik yang berkualiti tinggi.</p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 lg:col-span-2">
                            <div className="flex flex-col items-center sm:items-start">
                                <h3 className="text-sm font-semibold mb-4">Khidmat Pelanggan</h3>
                                <ul className="space-y-3 text-center sm:text-left">
                                    <li><a href="#" className="text-green-100 text-sm hover:text-white transition-colors">Soalan Lazim</a></li>
                                    <li><a href="#" className="text-green-100 text-sm hover:text-white transition-colors">Polisi Penghantaran</a></li>
                                    <li><a href="#" className="text-green-100 text-sm hover:text-white transition-colors">Pemulangan</a></li>
                                </ul>
                            </div>
                            <div className="flex flex-col items-center sm:items-start">
                                <h3 className="text-sm font-semibold mb-4">Pautan Pantas</h3>
                                <ul className="space-y-3 text-center sm:text-left">
                                    <li><a href="#" className="text-green-100 text-sm hover:text-white transition-colors">Akaun Saya</a></li>
                                    <li><a href="#" className="text-green-100 text-sm hover:text-white transition-colors">Jejak Pesanan</a></li>
                                    <li><a href="#" className="text-green-100 text-sm hover:text-white transition-colors">Senarai Wishlist</a></li>
                                    <li><a href="#" className="text-green-100 text-sm hover:text-white transition-colors">Kad Hadiah</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Newsletter Section */}
                        <div className="mt-8 lg:mt-0">
                            <h3 className="text-sm font-semibold mb-4">Surat Berita</h3>
                            <p className="text-green-100 text-sm mb-4">Langgan untuk menerima kemas kini dan tawaran eksklusif.</p>
                            <div className="flex flex-col space-y-3">
                                <input
                                    type="email"
                                    placeholder="Masukkan emel anda"
                                    className="w-full px-4 py-2 rounded-lg text-gray-800 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                                />
                                <button className="w-full bg-green-700 px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors">
                                    Langgan
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-green-800 mt-8 pt-8 text-center lg:flex lg:justify-between lg:items-center">
                        <p className="text-green-100 text-sm">&copy; 2024 PasarMan.</p>
                        <div className="hidden lg:flex space-x-6">
                        <a href="#" className="text-green-100 hover:text-white text-sm">Privacy</a>
                            <a href="#" className="text-green-100 hover:text-white text-sm">Terms</a>
                            <a href="#" className="text-green-100 hover:text-white text-sm">Contact Us</a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
export default Footer;
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import MobileNav from '@/components/mobile-nav/MobileNav';

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <MobileNav />
            <Footer />
        </div>
    );
};

export default MainLayout;
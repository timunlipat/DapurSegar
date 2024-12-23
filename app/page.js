import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import MobileNav from '@/components/mobile-nav/MobileNav';
import HomeContent from '@/components/home/HomeContent';

const Page = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <MobileNav />
            <HomeContent />
            <Footer />
        </div>
    );
};

export default Page;
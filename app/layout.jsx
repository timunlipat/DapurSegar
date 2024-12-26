import { Geist, Geist_Mono } from "next/font/google";
import CartProviderWrapper from "@/app/context/CartProviderWrapper";
import MainLayout from '@/components/layout/MainLayout';
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "PasarMan",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <CartProviderWrapper>
                    <MainLayout>
                        {children}
                    </MainLayout>
                    <Toaster />
                </CartProviderWrapper>
            </body>
        </html>
    );
}
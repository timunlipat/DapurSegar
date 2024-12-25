"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Container from '@/components/Container';
import { Truck, Apple, User, Bell, CreditCard } from "lucide-react";
import DeliverySettings from '@/components/settings/DeliverySettings';
import PreferencesSettings from '@/components/settings/PreferencesSettings';
import AccountSettings from '@/components/settings/AccountSettings';
import NotificationSettings from '@/components/settings/NotificationSettings';
import PaymentSettings from '@/components/settings/PaymentSettings';

const SettingsPage = () => {
    return (
        <main className="py-6">
            <Container className="max-w-[1000px]">
                {/* Header */}
                <div className="space-y-2 mb-8">
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Tetapan</h1>
                    <p className="text-gray-600">Sesuaikan pengalaman membeli-belah runcit anda</p>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="delivery" className="space-y-6">
                    <div className="overflow-x-auto lg:overflow-x-visible">
                        <TabsList className="flex flex-nowrap lg:flex-wrap gap-2 w-full mb-6 bg-transparent min-w-max lg:min-w-0 pr-4 lg:pr-0">
                            <TabsTrigger
                                value="delivery"
                                className="flex-none lg:flex-1 min-w-[120px] data-[state=active]:bg-green-800 data-[state=active]:text-white"
                            >
                                <Truck className="w-4 h-4 mr-2" />
                                Penghantaran
                            </TabsTrigger>
                            <TabsTrigger
                                value="preferences"
                                className="flex-none lg:flex-1 min-w-[120px] data-[state=active]:bg-green-800 data-[state=active]:text-white"
                            >
                                <Apple className="w-4 h-4 mr-2" />
                                Pilihan
                            </TabsTrigger>
                            <TabsTrigger
                                value="account"
                                className="flex-none lg:flex-1 min-w-[120px] data-[state=active]:bg-green-800 data-[state=active]:text-white"
                            >
                                <User className="w-4 h-4 mr-2" />
                                Akaun
                            </TabsTrigger>
                            <TabsTrigger
                                value="notifications"
                                className="flex-none lg:flex-1 min-w-[120px] data-[state=active]:bg-green-800 data-[state=active]:text-white"
                            >
                                <Bell className="w-4 h-4 mr-2" />
                                Pemberitahuan
                            </TabsTrigger>
                            <TabsTrigger
                                value="payment"
                                className="flex-none lg:flex-1 min-w-[120px] data-[state=active]:bg-green-800 data-[state=active]:text-white"
                            >
                                <CreditCard className="w-4 h-4 mr-2" />
                                Pembayaran
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="delivery" className="space-y-6">
                        <DeliverySettings />
                    </TabsContent>

                    <TabsContent value="preferences" className="space-y-6">
                        <PreferencesSettings />
                    </TabsContent>

                    <TabsContent value="account" className="space-y-6">
                        <AccountSettings />
                    </TabsContent>

                    <TabsContent value="notifications" className="space-y-6">
                        <NotificationSettings />
                    </TabsContent>

                    <TabsContent value="payment" className="space-y-6">
                        <PaymentSettings />
                    </TabsContent>
                </Tabs>
            </Container>
        </main>
    );
};

export default SettingsPage;
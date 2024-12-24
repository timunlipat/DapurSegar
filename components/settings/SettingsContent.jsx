"use client";
import { useState } from 'react';
import Container from '@/components/Container';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    User,
    CreditCard,
    Shield,
    Bell,
    Home,
    Apple,
    Clock,
    Truck
} from "lucide-react";

const SettingsContent = () => {
    const [notifications, setNotifications] = useState({
        orderUpdates: true,
        deliveryAlerts: true,
        specialOffers: false,
        stockAlerts: true,
    });

    return (
        <main className="py-6">
            <Container>
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

                    {/* Delivery Settings */}
                    <TabsContent value="delivery" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <div className="flex items-center space-x-2">
                                    <Truck className="h-5 w-5 text-green-800"/>
                                    <CardTitle>Alamat Penghantaran</CardTitle>
                                </div>
                                <CardDescription>Urus lokasi penghantaran anda</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="rounded-lg border p-4 space-y-4">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="rounded-full bg-green-50 p-2">
                                                <Home className="h-4 w-4 text-green-800"/>
                                            </div>
                                            <div>
                                                <p className="font-medium">Rumah</p>
                                                <p className="text-sm text-gray-500">123 Jalan Sultan Ismail, Kuala Lumpur</p>
                                            </div>
                                        </div>
                                        <Button variant="outline" className="text-green-800 hover:bg-green-50">Sunting</Button>
                                    </div>
                                </div>
                                <Button className="w-full bg-green-800 hover:bg-green-700 text-white">Tambah Alamat Baru</Button>

                                <div className="space-y-4 pt-4">
                                    <Label>Masa Penghantaran Pilihan</Label>
                                    <Select defaultValue="morning">
                                        <SelectTrigger className="border-gray-200">
                                            <SelectValue placeholder="Pilih masa penghantaran"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="morning">Pagi (9 PAGI - 12 TENGAH HARI)</SelectItem>
                                            <SelectItem value="afternoon">Tengah Hari (2 PETANG - 5 PETANG)</SelectItem>
                                            <SelectItem value="evening">Petang (7 MALAM - 10 MALAM)</SelectItem>
                                            <SelectItem value="express">Penghantaran Segera (Dalam masa 2 jam)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Shopping Preferences */}
                    <TabsContent value="preferences" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <div className="flex items-center space-x-2">
                                    <Apple className="h-5 w-5 text-green-800"/>
                                    <CardTitle>Pilihan Membeli-Belah</CardTitle>
                                </div>
                                <CardDescription>Sesuaikan pengalaman membeli-belah runcit anda</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-6">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="space-y-0.5">
                                            <Label>Pilihan Organik</Label>
                                            <p className="text-sm text-gray-500">Utamakan produk organik apabila tersedia</p>
                                        </div>
                                        <Switch defaultChecked className="data-[state=checked]:bg-green-800"/>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="space-y-0.5">
                                            <Label>Sekatan Pemakanan</Label>
                                            <p className="text-sm text-gray-500">Tunjukkan amaran pemakanan yang berkaitan</p>
                                        </div>
                                        <Switch defaultChecked className="data-[state=checked]:bg-green-800"/>
                                    </div>

                                    {/* Dietary Preferences */}
                                    <div className="space-y-2">
                                        <Label>Pilihan Pemakanan</Label>
                                        <Select defaultValue="none">
                                            <SelectTrigger className="border-gray-200">
                                                <SelectValue placeholder="Pilih keutamaan pemakanan"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="none">Tiada Sekatan</SelectItem>
                                                <SelectItem value="halal">Sijil Halal Sahaja</SelectItem>
                                                <SelectItem value="vegetarian">Vegetarian</SelectItem>
                                                <SelectItem value="vegan">Vegan</SelectItem>
                                                <SelectItem value="glutenFree">Bebas Gluten</SelectItem>
                                                <SelectItem value="kosher">Kosher</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Product Substitution */}
                                    <div className="space-y-2">
                                        <Label>Pilihan Penggantian Produk</Label>
                                        <Select defaultValue="similar">
                                            <SelectTrigger className="border-gray-200">
                                                <SelectValue placeholder="Pilih keutamaan penggantian"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="similar">Benarkan Item Serupa (Status Halal Sama)</SelectItem>
                                                <SelectItem value="contact">WhatsApp Saya Dahulu</SelectItem>
                                                <SelectItem value="never">Jangan Ganti</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Language Preference */}
                                    <div className="space-y-2">
                                        <Label>Bahasa Pilihan</Label>
                                        <Select defaultValue="ms">
                                            <SelectTrigger className="border-gray-200">
                                                <SelectValue placeholder="Pilih bahasa pilihan"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="en">English</SelectItem>
                                                <SelectItem value="ms">Bahasa Melayu</SelectItem>
                                                <SelectItem value="zh">中文</SelectItem>
                                                <SelectItem value="ta">தமிழ்</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Account Settings */}
                    <TabsContent value="account" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <div className="flex items-center space-x-2">
                                    <User className="h-5 w-5 text-green-800"/>
                                    <CardTitle>Maklumat Peribadi</CardTitle>
                                </div>
                                <CardDescription>Kemaskini butiran akaun anda</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">Nama pertama</Label>
                                        <Input id="firstName" placeholder="Masukkan nama pertama anda" className="border-gray-200"/>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Nama akhir</Label>
                                        <Input id="lastName" placeholder="Masukkan nama akhir anda" className="border-gray-200"/>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Emel</Label>
                                        <Input id="email" type="email" placeholder="Masukkan emel anda" className="border-gray-200"/>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Nombor telefon</Label>
                                        <Input id="phone" type="tel" placeholder="Masukkan nombor telefon anda" className="border-gray-200"/>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <Button className="bg-green-800 hover:bg-green-700 text-white">Simpan Perubahan</Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <div className="flex items-center space-x-2">
                                    <Shield className="h-5 w-5 text-green-800"/>
                                    <CardTitle>Keselamatan</CardTitle>
                                </div>
                                <CardDescription>Urus kata laluan dan tetapan keselamatan anda</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="currentPassword">Kata Laluan Semasa</Label>
                                        <Input id="currentPassword" type="password" className="border-gray-200"/>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="newPassword">Kata Laluan Baru</Label>
                                        <Input id="newPassword" type="password" className="border-gray-200"/>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <Button className="bg-green-800 hover:bg-green-700 text-white">Kemaskini Kata Laluan</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Notifications */}
                    <TabsContent value="notifications" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <div className="flex items-center space-x-2">
                                    <Bell className="h-5 w-5 text-green-800"/>
                                    <CardTitle>Tetapan Pemberitahuan</CardTitle>
                                </div>
                                <CardDescription>Pilih cara anda ingin diberitahu</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-6">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="space-y-0.5">
                                            <Label>Kemaskini Pesanan</Label>
                                            <p className="text-sm text-gray-500">Dapatkan pemberitahuan tentang status pesanan anda</p>
                                        </div>
                                        <Switch
                                            checked={notifications.orderUpdates}
                                            onCheckedChange={(checked) => setNotifications(prev => ({...prev, orderUpdates: checked}))}
                                            className="data-[state=checked]:bg-green-800"
                                        />
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="space-y-0.5">
                                            <Label>Makluman Penghantaran</Label>
                                            <p className="text-sm text-gray-500">Terima kemaskini tentang penghantaran anda</p>
                                        </div>
                                        <Switch
                                            checked={notifications.deliveryAlerts}
                                            onCheckedChange={(checked) => setNotifications(prev => ({...prev, deliveryAlerts: checked}))}
                                            className="data-[state=checked]:bg-green-800"
                                        />
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="space-y-0.5">
                                            <Label>Tawaran Istimewa</Label>
                                            <p className="text-sm text-gray-500">Dapatkan pemberitahuan tentang tawaran dan promosi</p>
                                        </div>
                                        <Switch
                                            checked={notifications.specialOffers}
                                            onCheckedChange={(checked) => setNotifications(prev => ({...prev, specialOffers: checked}))}
                                            className="data-[state=checked]:bg-green-800"
                                        />
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="space-y-0.5">
                                            <Label>Makluman Stok</Label>
                                            <p className="text-sm text-gray-500">Pemberitahuan apabila item kegemaran kembali ada dalam stok</p>
                                        </div>
                                        <Switch
                                            checked={notifications.stockAlerts}
                                            onCheckedChange={(checked) => setNotifications(prev => ({...prev, stockAlerts: checked}))}
                                            className="data-[state=checked]:bg-green-800"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Payment Settings */}
                    <TabsContent value="payment" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <div className="flex items-center space-x-2">
                                    <CreditCard className="h-5 w-5 text-green-800"/>
                                    <CardTitle>Kaedah Pembayaran</CardTitle>
                                </div>
                                <CardDescription>Urus pilihan pembayaran anda</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="rounded-lg border p-4">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="rounded-full bg-green-50 p-2">
                                                <CreditCard className="h-4 w-4 text-green-800"/>
                                            </div>
                                            <div>
                                                <p className="font-medium">•••• •••• •••• 4242</p>
                                                <p className="text-sm text-gray-500">Tamat 12/24</p>
                                            </div>
                                        </div>
                                        <Button variant="outline" className="text-green-800 hover:bg-green-50">Sunting</Button>
                                    </div>
                                </div>
                                <Button className="w-full bg-green-800 hover:bg-green-700 text-white">Tambah Kaedah Pembayaran Baru</Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <div className="flex items-center space-x-2">
                                    <Clock className="h-5 w-5 text-green-800"/>
                                    <CardTitle>Sejarah Pesanan</CardTitle>
                                </div>
                                <CardDescription>Lihat pesanan dan transaksi terkini anda</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 last:border-0 gap-2">
                                            <div>
                                                <p className="font-medium">Pesanan #1234{i}</p>
                                                <p className="text-sm text-gray-500">Dis {i}, 2024</p>
                                            </div>
                                            <div className="text-right flex flex-col sm:items-end gap-1">
                                                <p className="font-medium">RM 250.00</p>
                                                <Button
                                                    variant="link"
                                                    className="h-auto p-0 text-green-800 hover:text-green-700"
                                                >
                                                    Lihat Butiran
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </Container>
        </main>
    );
};

export default SettingsContent;
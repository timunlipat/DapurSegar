"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Clock } from "lucide-react";

const PaymentSettings = () => {
    return (
        <>
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
                            <Button variant="outline">Edit</Button>
                        </div>
                    </div>
                    <Button className="w-full">Tambah Kaedah Pembayaran Baru</Button>
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
        </>
    );
};

export default PaymentSettings;
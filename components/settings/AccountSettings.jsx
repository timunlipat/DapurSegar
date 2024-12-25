"use client";

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
import { User, Shield } from "lucide-react";

const AccountSettings = () => {
    return (
        <>
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
                        <Button>Simpan Perubahan</Button>
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
                        <Button>Kemaskini Kata Laluan</Button>
                    </div>
                </CardContent>
            </Card>
        </>
    );
};

export default AccountSettings;
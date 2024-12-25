"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Apple } from "lucide-react";

const PreferencesSettings = () => {
    return (
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
    );
};

export default PreferencesSettings;
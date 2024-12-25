"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Truck, Home } from "lucide-react";

const DeliverySettings = () => {
    return (
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
                        <Button variant="outline">Ubah Alamat</Button>
                    </div>
                </div>
                <Button className="w-full">Tambah Alamat Baru</Button>

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
    );
};

export default DeliverySettings;
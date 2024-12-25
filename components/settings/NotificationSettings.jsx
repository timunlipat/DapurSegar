"use client";

import { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Bell } from "lucide-react";

const NotificationSettings = () => {
    const [notifications, setNotifications] = useState({
        orderUpdates: true,
        deliveryAlerts: true,
        specialOffers: false,
        stockAlerts: true,
    });

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center space-x-2">
                    <Bell className="h-5 w-5 text-green-800"/>
                    <CardTitle>Tetapan Pemberitahuan</CardTitle>
                </div>
                <CardDescription>Pilih cara anda ingin dinotifikasi</CardDescription>
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
    );
};

export default NotificationSettings;
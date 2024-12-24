"use client";

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag, ArrowLeft } from 'lucide-react';

const CartSummary = ({ subtotal, shipping, total, isCompact = false }) => {
    return (
        <Card className={`${isCompact ? 'p-4' : 'p-6'}`}>
            <h2 className={`${isCompact ? 'text-base' : 'text-lg'} font-semibold mb-4`}>
                Ringkasan Pesanan
            </h2>

            <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                    <span className="text-gray-600">Jumlah Kecil</span>
                    <span>RM{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Penghantaran</span>
                    <span>{shipping === 0 ? 'Percuma' : `RM${shipping.toFixed(2)}`}</span>
                </div>
                {shipping > 0 && (
                    <p className="text-xs text-gray-500">
                        Tambah RM{(50 - subtotal).toFixed(2)} lagi untuk penghantaran percuma
                    </p>
                )}
                <div className="border-t pt-3">
                    <div className="flex justify-between font-semibold">
                        <span>Jumlah</span>
                        <span>RM{total.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <div className="mt-6 space-y-3">
                <Button
                    className="w-full"
                    size="lg"
                >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Teruskan ke Pembayaran
                </Button>

                {!isCompact && (
                    <Button
                        variant="ghost"
                        className="w-full"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Teruskan Membeli-belah
                    </Button>
                )}
            </div>
        </Card>
    );
};

export default CartSummary;
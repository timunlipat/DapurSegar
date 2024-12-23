"use client";

import { Card } from '@/components/ui/card';

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

            <button className="w-full bg-green-800 text-white py-3 rounded-lg mt-6 font-medium hover:bg-green-700 transition-colors">
                Teruskan ke Pembayaran
            </button>

            {!isCompact && (
                <div className="mt-4">
                    <button className="w-full text-green-800 text-sm font-medium hover:underline">
                        Teruskan Membeli-belah
                    </button>
                </div>
            )}
        </Card>
    );
};

export default CartSummary;
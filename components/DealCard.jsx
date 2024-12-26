"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Tag, Percent, Gift, Copy } from 'lucide-react';
import { useState } from 'react';

const DealCard = ({ deal }) => {
    const [copied, setCopied] = useState(false);

    const getIcon = (type) => {
        switch (type) {
            case 'flash':
                return <Clock className="w-5 h-5 text-gray-600" />;
            case 'discount':
                return <Percent className="w-5 h-5 text-gray-600" />;
            case 'promo':
                return <Tag className="w-5 h-5 text-gray-600" />;
            default:
                return <Gift className="w-5 h-5 text-gray-600" />;
        }
    };

    const handleCopyCode = () => {
        if (deal.code) {
            navigator.clipboard.writeText(deal.code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6">
                {/* Header with Icon and Timer */}
                <div className="flex justify-between items-start mb-4">
                    <div className="rounded-full p-2 bg-gray-100">
                        {getIcon(deal.type)}
                    </div>
                    {deal.validUntil && (
                        <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1">
                            <Clock className="w-3 h-3 mr-1 text-gray-500" />
                            <span className="text-xs text-gray-600">{deal.validUntil}</span>
                        </div>
                    )}
                </div>

                {/* Main Content */}
                <div className="space-y-2">
                    {/* Discount Display */}
                    <h3 className="text-2xl font-bold text-gray-800">
                        {deal.discount}
                    </h3>

                    {/* Title */}
                    <h4 className="font-semibold text-gray-800">
                        {deal.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-gray-600">
                        {deal.description}
                    </p>

                    {/* Promo Code */}
                    {deal.code && (
                        <div className="pt-2">
                            <div className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2 cursor-pointer" onClick={handleCopyCode}>
                                <code className="text-sm font-mono text-gray-700">
                                    {deal.code}
                                </code>
                                <Copy className={`w-4 h-4 ${copied ? 'text-green-500' : 'text-gray-400'}`} />
                            </div>
                        </div>
                    )}

                    {/* CTA Button */}
                    <div className="pt-2">
                        <Button
                            variant="ghost"
                            className="w-full justify-between text-gray-600 p-0 h-auto hover:bg-transparent hover:no-underline"
                        >
                            {deal.cta || 'Tuntut Sekarang'}
                            <span className="text-xl">→</span>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default DealCard;
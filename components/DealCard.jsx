import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Tag, Percent, Gift } from 'lucide-react';

const DealCard = ({ deal, index }) => {
    const getIcon = (type) => {
        switch (type) {
            case 'flash':
                return <Clock className="w-5 h-5" />;
            case 'discount':
                return <Percent className="w-5 h-5" />;
            case 'promo':
                return <Tag className="w-5 h-5" />;
            default:
                return <Gift className="w-5 h-5" />;
        }
    };

    return (
        <Card className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0">
                <div className={`${deal.color} p-6 relative h-full`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 background-pattern" />

                    {/* Content */}
                    <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                            <div className={`rounded-full p-2 ${deal.iconBg || 'bg-white/20'}`}>
                                {getIcon(deal.type)}
                            </div>
                            {deal.validUntil && (
                                <div className="flex items-center text-xs font-medium bg-black/10 rounded-full px-3 py-1">
                                    <Clock className="w-3 h-3 mr-1" />
                                    {deal.validUntil}
                                </div>
                            )}
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-2 group-hover:text-gray-700">
                                {deal.title}
                            </h3>
                            <p className="text-sm opacity-90 mb-4">
                                {deal.description}
                            </p>
                            {deal.discount && (
                                <div className="text-2xl font-bold mb-2">
                                    {deal.discount}
                                </div>
                            )}
                            {deal.code && (
                                <div className="bg-white/90 rounded-lg px-3 py-2 text-sm font-mono text-gray-800 inline-block">
                                    {deal.code}
                                </div>
                            )}
                        </div>

                        <Button
                            variant="primary"
                            className="mt-4 w-full bg-white/90 hover:bg-white text-gray-800 shadow-sm"
                        >
                            {deal.cta || 'Tuntut Sekarang'}
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default DealCard;
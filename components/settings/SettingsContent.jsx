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
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Settings</h1>
                    <p className="text-gray-600">Customize your grocery shopping experience</p>
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
                                Delivery
                            </TabsTrigger>
                            <TabsTrigger
                                value="preferences"
                                className="flex-none lg:flex-1 min-w-[120px] data-[state=active]:bg-green-800 data-[state=active]:text-white"
                            >
                                <Apple className="w-4 h-4 mr-2" />
                                Preferences
                            </TabsTrigger>
                            <TabsTrigger
                                value="account"
                                className="flex-none lg:flex-1 min-w-[120px] data-[state=active]:bg-green-800 data-[state=active]:text-white"
                            >
                                <User className="w-4 h-4 mr-2" />
                                Account
                            </TabsTrigger>
                            <TabsTrigger
                                value="notifications"
                                className="flex-none lg:flex-1 min-w-[120px] data-[state=active]:bg-green-800 data-[state=active]:text-white"
                            >
                                <Bell className="w-4 h-4 mr-2" />
                                Notifications
                            </TabsTrigger>
                            <TabsTrigger
                                value="payment"
                                className="flex-none lg:flex-1 min-w-[120px] data-[state=active]:bg-green-800 data-[state=active]:text-white"
                            >
                                <CreditCard className="w-4 h-4 mr-2" />
                                Payment
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    {/* Delivery Settings */}
                    <TabsContent value="delivery" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <div className="flex items-center space-x-2">
                                    <Truck className="h-5 w-5 text-green-800"/>
                                    <CardTitle>Delivery Addresses</CardTitle>
                                </div>
                                <CardDescription>Manage your delivery locations</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="rounded-lg border p-4 space-y-4">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="rounded-full bg-green-50 p-2">
                                                <Home className="h-4 w-4 text-green-800"/>
                                            </div>
                                            <div>
                                                <p className="font-medium">Home</p>
                                                <p className="text-sm text-gray-500">123 Jalan Sultan Ismail, Kuala Lumpur</p>
                                            </div>
                                        </div>
                                        <Button variant="outline" className="text-green-800 hover:bg-green-50">Edit</Button>
                                    </div>
                                </div>
                                <Button className="w-full bg-green-800 hover:bg-green-700 text-white">Add New Address</Button>

                                <div className="space-y-4 pt-4">
                                    <Label>Preferred Delivery Time</Label>
                                    <Select defaultValue="morning">
                                        <SelectTrigger className="border-gray-200">
                                            <SelectValue placeholder="Select delivery time"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                                            <SelectItem value="afternoon">Afternoon (2PM - 5PM)</SelectItem>
                                            <SelectItem value="evening">Evening (7PM - 10PM)</SelectItem>
                                            <SelectItem value="express">Express Delivery (Within 2 hours)</SelectItem>
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
                                    <CardTitle>Shopping Preferences</CardTitle>
                                </div>
                                <CardDescription>Customize your grocery shopping experience</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-6">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="space-y-0.5">
                                            <Label>Organic Preference</Label>
                                            <p className="text-sm text-gray-500">Prioritize organic products when available</p>
                                        </div>
                                        <Switch defaultChecked className="data-[state=checked]:bg-green-800"/>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="space-y-0.5">
                                            <Label>Dietary Restrictions</Label>
                                            <p className="text-sm text-gray-500">Show relevant dietary warnings</p>
                                        </div>
                                        <Switch defaultChecked className="data-[state=checked]:bg-green-800"/>
                                    </div>

                                    {/* Dietary Preferences */}
                                    <div className="space-y-2">
                                        <Label>Dietary Preferences</Label>
                                        <Select defaultValue="none">
                                            <SelectTrigger className="border-gray-200">
                                                <SelectValue placeholder="Select dietary preference"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="none">No Restrictions</SelectItem>
                                                <SelectItem value="halal">Halal Certified Only</SelectItem>
                                                <SelectItem value="vegetarian">Vegetarian</SelectItem>
                                                <SelectItem value="vegan">Vegan</SelectItem>
                                                <SelectItem value="glutenFree">Gluten Free</SelectItem>
                                                <SelectItem value="kosher">Kosher</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Product Substitution */}
                                    <div className="space-y-2">
                                        <Label>Product Substitution Preferences</Label>
                                        <Select defaultValue="similar">
                                            <SelectTrigger className="border-gray-200">
                                                <SelectValue placeholder="Select substitution preference"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="similar">Allow Similar Items (Same Halal Status)</SelectItem>
                                                <SelectItem value="contact">WhatsApp Me First</SelectItem>
                                                <SelectItem value="never">Never Substitute</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Language Preference */}
                                    <div className="space-y-2">
                                        <Label>Preferred Language</Label>
                                        <Select defaultValue="en">
                                            <SelectTrigger className="border-gray-200">
                                                <SelectValue placeholder="Select preferred language"/>
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
                                    <CardTitle>Personal Information</CardTitle>
                                </div>
                                <CardDescription>Update your account details</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First name</Label>
                                        <Input id="firstName" placeholder="Enter your first name" className="border-gray-200"/>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last name</Label>
                                        <Input id="lastName" placeholder="Enter your last name" className="border-gray-200"/>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="Enter your email" className="border-gray-200"/>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone number</Label>
                                        <Input id="phone" type="tel" placeholder="Enter your phone number" className="border-gray-200"/>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <Button className="bg-green-800 hover:bg-green-700 text-white">Save Changes</Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <div className="flex items-center space-x-2">
                                    <Shield className="h-5 w-5 text-green-800"/>
                                    <CardTitle>Security</CardTitle>
                                </div>
                                <CardDescription>Manage your password and security settings</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="currentPassword">Current Password</Label>
                                        <Input id="currentPassword" type="password" className="border-gray-200"/>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="newPassword">New Password</Label>
                                        <Input id="newPassword" type="password" className="border-gray-200"/>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <Button className="bg-green-800 hover:bg-green-700 text-white">Update Password</Button>
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
                                    <CardTitle>Notification Settings</CardTitle>
                                </div>
                                <CardDescription>Choose how you want to be notified</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-6">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="space-y-0.5">
                                            <Label>Order Updates</Label>
                                            <p className="text-sm text-gray-500">Get notifications about your order status</p>
                                        </div>
                                        <Switch
                                            checked={notifications.orderUpdates}
                                            onCheckedChange={(checked) => setNotifications(prev => ({...prev, orderUpdates: checked}))}
                                            className="data-[state=checked]:bg-green-800"
                                        />
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="space-y-0.5">
                                            <Label>Delivery Alerts</Label>
                                            <p className="text-sm text-gray-500">Receive updates about your delivery</p>
                                        </div>
                                        <Switch
                                            checked={notifications.deliveryAlerts}
                                            onCheckedChange={(checked) => setNotifications(prev => ({...prev, deliveryAlerts: checked}))}
                                            className="data-[state=checked]:bg-green-800"
                                        />
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="space-y-0.5">
                                            <Label>Special Offers</Label>
                                            <p className="text-sm text-gray-500">Get notified about deals and promotions</p>
                                        </div>
                                        <Switch
                                            checked={notifications.specialOffers}
                                            onCheckedChange={(checked) => setNotifications(prev => ({...prev, specialOffers: checked}))}
                                            className="data-[state=checked]:bg-green-800"
                                        />
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="space-y-0.5">
                                            <Label>Stock Alerts</Label>
                                            <p className="text-sm text-gray-500">Notifications when favorite items are back in stock</p>
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
                                    <CardTitle>Payment Methods</CardTitle>
                                </div>
                                <CardDescription>Manage your payment options</CardDescription>
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
                                                <p className="text-sm text-gray-500">Expires 12/24</p>
                                            </div>
                                        </div>
                                        <Button variant="outline" className="text-green-800 hover:bg-green-50">Edit</Button>
                                    </div>
                                </div>
                                <Button className="w-full bg-green-800 hover:bg-green-700 text-white">Add New Payment Method</Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <div className="flex items-center space-x-2">
                                    <Clock className="h-5 w-5 text-green-800"/>
                                    <CardTitle>Order History</CardTitle>
                                </div>
                                <CardDescription>View your recent orders and transactions</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 last:border-0 gap-2">
                                            <div>
                                                <p className="font-medium">Order #1234{i}</p>
                                                <p className="text-sm text-gray-500">Dec {i}, 2024</p>
                                            </div>
                                            <div className="text-right flex flex-col sm:items-end gap-1">
                                                <p className="font-medium">RM 250.00</p>
                                                <Button
                                                    variant="link"
                                                    className="h-auto p-0 text-green-800 hover:text-green-700"
                                                >
                                                    View Details
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
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Card, CardBody, CardHeader, Button, Divider, Chip } from '@heroui/react';
import { Check, Star, Users, Calendar, Megaphone } from 'lucide-react';

export const SubscriptionPacks = () => {
    const packs = [
        {
            id: 'organisateurs',
            title: 'Abonnement Organisateurs',
            price: '500',
            currency: 'FCFA',
            period: 'unique',
            description: 'Pack de base pour les organisateurs d\'événements',
            features: [
                'Accès à la plateforme',
                'Gestion des événements',
                'Support client de base'
            ],
            color: 'primary',
            icon: Users,
            popular: false
        },
        {
            id: 'billetterie',
            title: 'Commission Billetterie',
            price: '5000',
            currency: 'FCFA',
            period: '(5%)',
            description: 'Commission sur les ventes de billets',
            features: [
                'Traitement des paiements',
                'Gestion automatique des commissions',
                'Rapports de ventes détaillés'
            ],
            color: 'secondary',
            icon: Check,
            popular: false
        },
        {
            id: 'prestataires',
            title: 'Prestataires Abonnés',
            price: '5 000',
            currency: 'FCFA',
            period: '/mois',
            description: 'Abonnement mensuel pour les prestataires',
            features: [
                'Profil prestataire vérifié',
                'Visibilité accrue',
                'Accès aux opportunités',
                'Support prioritaire'
            ],
            color: 'secondary-blue',
            icon: Star,
            popular: true
        },
        {
            id: 'sponsoring-prestataires',
            title: 'Sponsoring Prestataires',
            price: '20 000',
            currency: 'FCFA',
            period: '/mois',
            description: 'Publicité premium pour prestataires',
            features: [
                'Mise en avant premium',
                'Placement prioritaire',
                'Statistiques avancées',
                'Support dédié'
            ],
            color: 'primary',
            icon: Megaphone,
            popular: false
        },
        {
            id: 'sponsoring-evenements',
            title: 'Sponsoring Événements',
            price: '5000',
            currency: 'FCFA',
            period: 'pour 2 semaines',
            description: 'Promotion d\'événements sur la plateforme',
            features: [
                'Visibilité maximale',
                'Placement en page d\'accueil',
                'Push notifications',
                'Rapport de performance'
            ],
            color: 'secondary',
            icon: Calendar,
            popular: false
        }
    ];

    const getColorClasses = (color: string) => {
        const colors = {
            'primary': {
                bg: 'bg-[#EE3540]',
                text: 'text-[#EE3540]',
                border: 'border-[#EE3540]',
                hover: 'hover:bg-[#EE3540]/10'
            },
            'secondary': {
                bg: 'bg-[#F08621]',
                text: 'text-[#F08621]',
                border: 'border-[#F08621]',
                hover: 'hover:bg-[#F08621]/10'
            },
            'secondary-blue': {
                bg: 'bg-[#28B0E6]',
                text: 'text-[#28B0E6]',
                border: 'border-[#28B0E6]',
                hover: 'hover:bg-[#28B0E6]/10'
            }
        } as any;
        return colors[color] || colors.primary;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#FEEBEC] to-white section-container">
            <div className="max-w-7xl mx-auto py-10">
                {/* Header */}
                <div className="space-y-1">
                    <h1 className="text-primary font-extrabold text-xl md:text-4xl font-poppins text-center">
                        Nos Packs d&apos;Abonnement
                    </h1>
                    <p className="text-[#1E1E1E] text-base text-center block">
                        Choisissez le pack qui correspond à vos besoins et développez votre activité
                    </p>
                    <div className="bg-secondary h-2 max-w-36 mt-1 rounded-tl-md mx-auto rounded-r-full "></div>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-7 ">
                    {packs.map((pack) => {
                        const colorClasses = getColorClasses(pack.color);
                        const IconComponent = pack.icon;

                        return (
                            <Card
                                key={pack.id}
                                className={`relative transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${pack.popular ? 'ring-2 ring-[#28B0E6] shadow-lg' : ''
                                    }`}
                            >
                                {pack.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <Chip
                                            className="bg-[#28B0E6] text-white font-semibold px-3 py-1"
                                            size="sm"
                                        >
                                            ⭐ Populaire
                                        </Chip>
                                    </div>
                                )}

                                <CardHeader className="flex flex-col items-center pt-8 pb-4">
                                    <div className={`p-3 rounded-full ${colorClasses.bg} mb-4`}>
                                        <IconComponent className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 text-center">
                                        {pack.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 text-center mt-2">
                                        {pack.description}
                                    </p>
                                </CardHeader>

                                <CardBody className="pt-0">
                                    {/* Price Section */}
                                    <div className="text-center mb-6">
                                        <div className="flex items-baseline justify-center gap-1">
                                            <span className={`text-3xl font-bold ${colorClasses.text}`}>
                                                {pack.price.toLocaleString()}
                                            </span>
                                            <span className="text-sm text-gray-500 font-medium">
                                                {pack.currency}
                                            </span>
                                        </div>
                                        <span className="text-sm text-gray-500">
                                            {pack.period}
                                        </span>
                                    </div>

                                    <Divider className="my-4" />

                                    {/* Features */}
                                    <div className="space-y-3 mb-6">
                                        {pack.features.map((feature, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <Check className={`w-5 h-5 ${colorClasses.text} flex-shrink-0 mt-0.5`} />
                                                <span className="text-sm text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <Button
                                        className={`w-full ${colorClasses.bg} text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:opacity-90 hover:shadow-lg`}
                                        size="lg"
                                    >
                                        Choisir ce pack
                                    </Button>
                                </CardBody>
                            </Card>
                        );
                    })}
                </div>

                {/* Bottom Section */}
                <div className="mt-16 text-center">
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Besoin d&apos;aide pour choisir ?
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Notre équipe est là pour vous accompagner dans le choix du pack le plus adapté à vos besoins.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                className="bg-[#EE3540] text-white hover:bg-[#EE3540]/90"
                                size="lg"
                            >
                                Nous contacter
                            </Button>
                            <Button
                                variant="bordered"
                                className="border-[#28B0E6] text-[#28B0E6] hover:bg-[#28B0E6]/10"
                                size="lg"
                            >
                                Voir la FAQ
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

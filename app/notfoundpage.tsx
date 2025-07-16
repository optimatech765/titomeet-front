'use client';

import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";
import { Spacer } from "@heroui/spacer";
import { useRouter } from 'next/navigation';
import { ArrowLeft, Home, Search } from 'lucide-react';

export const NotFoundPage = () => {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    const handleGoHome = () => {
        router.push('/');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full">
                {/* Animation container */}
                <div className="text-center mb-8 animate-pulse">
                    <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-[#EE3540] via-[#F08621] to-[#EE3540] bg-clip-text text-transparent">
                        404
                    </div>
                    <div className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                        Oops! Page introuvable
                    </div>
                </div>

                {/* Main Card */}
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl">
                    <CardBody className="p-8 text-center">
                        <div className="mb-6">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#EE3540] to-[#F08621] rounded-full mb-4">
                                <Search className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                                Page non trouvée
                            </h1>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
                                Voici quelques options pour continuer votre navigation.
                            </p>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                color="primary"
                                size="lg"
                                startContent={<Home className="w-5 h-5" />}
                                onPress={handleGoHome}
                                className="w-full sm:w-auto bg-gradient-to-r from-[#EE3540] to-[#F08621] hover:from-[#EE3540]/90 hover:to-[#F08621]/90 text-white font-semibold"
                            >
                                Retour à l&apos;accueil
                            </Button>

                            <Button
                                color="secondary"
                                variant="bordered"
                                size="lg"
                                startContent={<ArrowLeft className="w-5 h-5" />}
                                onPress={handleGoBack}
                                className="w-full sm:w-auto border-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Page précédente
                            </Button>
                        </div>

                        <Spacer y={6} />

                        {/* Additional help section */}
                        <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                Besoin d&apos;aide ? Voici quelques liens utiles :
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="text-[#EE3540] dark:text-[#F08621] hover:text-[#EE3540]/80 dark:hover:text-[#F08621]/80 underline"
                                >
                                    Contactez-nous
                                </Link>
                                <Link
                                    href="/help"
                                    className="text-[#EE3540] dark:text-[#F08621] hover:text-[#EE3540]/80 dark:hover:text-[#F08621]/80 underline"
                                >
                                    Centre d&apos;aide
                                </Link>
                                <Link
                                    href="/sitemap"
                                    className="text-[#EE3540] dark:text-[#F08621] hover:text-[#EE3540]/80 dark:hover:text-[#F08621]/80 underline"
                                >
                                    Plan du site
                                </Link>
                            </div>
                        </div>
                    </CardBody>
                </Card>

                {/* Floating elements for visual appeal */}
                <div className="fixed top-10 left-10 w-20 h-20 bg-[#EE3540]/20 dark:bg-[#F08621]/20 rounded-full opacity-20 animate-bounce"></div>
                <div className="fixed bottom-10 right-10 w-16 h-16 bg-[#F08621]/20 dark:bg-[#EE3540]/20 rounded-full opacity-20 animate-pulse"></div>
                <div className="fixed top-1/2 left-5 w-12 h-12 bg-[#EE3540]/30 dark:bg-[#F08621]/30 rounded-full opacity-20 animate-ping"></div>
            </div>
        </div>
    );
}
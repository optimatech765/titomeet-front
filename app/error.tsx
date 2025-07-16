
'use client';

import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";
import { Spacer } from "@heroui/spacer";
import { Chip } from "@heroui/chip";
import { useRouter } from 'next/navigation';
import { ArrowLeft, Home, AlertTriangle, RefreshCw, Mail, Bug } from 'lucide-react';

interface ErrorPageProps {
  error?: {
    message?: string;
    statusCode?: number;
    statusText?: string;
  };
  reset?: () => void;
}


export default function ErrorPage({ error, reset }: ErrorPageProps) {
  const router = useRouter();

  // Déterminer le type d'erreur et les informations à afficher
  const errorCode = error?.statusCode || 500;
  const errorMessage = error?.message || "Une erreur inattendue s'est produite";
  const errorStatus = error?.statusText || "Erreur interne du serveur";

  const getErrorConfig = (code: number) => {
    switch (code) {
      case 400:
        return {
          title: "Requête invalide",
          description: "La requête envoyée n'est pas valide.",
          icon: <AlertTriangle className="w-10 h-10 text-white" />,
          color: "warning" as const
        };
      case 401:
        return {
          title: "Non autorisé",
          description: "Vous n'êtes pas autorisé à accéder à cette ressource.",
          icon: <AlertTriangle className="w-10 h-10 text-white" />,
          color: "warning" as const
        };
      case 403:
        return {
          title: "Accès interdit",
          description: "Vous n'avez pas les permissions nécessaires.",
          icon: <AlertTriangle className="w-10 h-10 text-white" />,
          color: "danger" as const
        };
      case 404:
        return {
          title: "Page introuvable",
          description: "La page que vous recherchez n'existe pas.",
          icon: <AlertTriangle className="w-10 h-10 text-white" />,
          color: "warning" as const
        };
      case 500:
      default:
        return {
          title: "Erreur serveur",
          description: "Une erreur interne du serveur s'est produite.",
          icon: <Bug className="w-10 h-10 text-white" />,
          color: "danger" as const
        };
    }
  };

  const errorConfig = getErrorConfig(errorCode);

  const handleGoBack = () => {
    router.back();
  };

  const handleGoHome = () => {
    router.push('/');
  };

  const handleRefresh = () => {
    if (reset) {
      reset();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-red-100 dark:from-gray-900 dark:via-red-900/20 dark:to-orange-900/20 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Error Code Display */}
        <div className="text-center mb-8 animate-pulse">
          <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-[#EE3540] via-[#F08621] to-[#EE3540] bg-clip-text text-transparent mb-4">
            {errorCode}
          </div>
          <Chip 
            color={errorConfig.color}
            variant="flat"
            size="lg"
            className="text-lg font-semibold"
          >
            {errorStatus}
          </Chip>
        </div>

        {/* Main Error Card */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl">
          <CardBody className="p-8 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#EE3540] to-[#F08621] rounded-full mb-4">
                {errorConfig.icon}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {errorConfig.title}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {errorConfig.description}
              </p>
              
              {/* Error details */}
              {errorMessage && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
                  <p className="text-sm text-red-700 dark:text-red-300 font-mono">
                    {errorMessage}
                  </p>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
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
                startContent={<RefreshCw className="w-5 h-5" />}
                onPress={handleRefresh}
                className="w-full sm:w-auto border-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Réessayer
              </Button>

              <Button
                color="default"
                variant="light"
                size="lg"
                startContent={<ArrowLeft className="w-5 h-5" />}
                onPress={handleGoBack}
                className="w-full sm:w-auto"
              >
                Retour
              </Button>
            </div>

            <Spacer y={6} />

            {/* Additional help section */}
            <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Le problème persiste ? Contactez notre équipe de support :
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#EE3540] dark:text-[#F08621] hover:text-[#EE3540]/80 dark:hover:text-[#F08621]/80 underline"
                >
                  <Mail className="w-4 h-4" />
                  Support technique
                </Link>
                <Link
                  href="/help"
                  className="text-[#EE3540] dark:text-[#F08621] hover:text-[#EE3540]/80 dark:hover:text-[#F08621]/80 underline"
                >
                  Centre d&apos;aide
                </Link>
                <Link
                  href="/status"
                  className="text-[#EE3540] dark:text-[#F08621] hover:text-[#EE3540]/80 dark:hover:text-[#F08621]/80 underline"
                >
                  Statut du service
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
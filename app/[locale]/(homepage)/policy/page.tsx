import React from 'react';

const Page = () => {
    return (
        <div className="section-container">
            <h1 className="text-3xl font-bold mb-8 text-center">Politique de confidentialité (Privacy Policy)</h1>

            <div className="space-y-4 text-gray-700">
                <p><strong>1. Données collectées :</strong> Nous recueillons les informations fournies lors de la création de compte et de l’achat de billets.</p>
                <p><strong>2. Utilisation :</strong> Les données servent à gérer les comptes, événements, paiements, et communications.</p>
                <p><strong>3. Partage :</strong> Aucune revente de données. Partage uniquement avec prestataires nécessaires (paiement, e-mailing).</p>
                <p><strong>4. Sécurité :</strong> Vos données sont sécurisées via des protocoles de chiffrement et d’authentification.</p>
                <p><strong>5. Vos droits :</strong> Vous pouvez demander l’accès, la modification ou la suppression de vos données à privacy@titomeet.com.</p>
            </div>
        </div>
    );
}

export default Page;

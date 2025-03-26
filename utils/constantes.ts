import { BriefcaseBusiness, CalendarCheck, LayoutDashboard, UserRound, Wallet } from 'lucide-react';
export const SlidesImages = [
    {
        title: "Image 3",
        subtitle: "Subtitle 3",
        image: "/img/hero-image.png",
    },
    {
        title: "Image 1",
        subtitle: "Subtitle 1",
        image: "/img/function-imageB.jpg",
    },
    {
        title: "Image 2",
        subtitle: "Subtitle 2",
        image: "/img/joy.png",
    },

    {
        title: "Image 4",
        subtitle: "Subtitle 4",
        image: "/img/login-image.jpg",
    },
];

export const menuItems = [
    {
        libelle: "Tableau de bord",
        icon: LayoutDashboard,
        lien: "/",
        tague:"home"
    },
    {
        libelle: "Evènements",
        icon: CalendarCheck,
        lien: "/",
        tague:"events"
    },
    {
        libelle: "Utilisateurs",
        icon: UserRound,
        lien: "/",
        tague:"users"
    },
    {
        libelle: "Prestataires",
        icon: BriefcaseBusiness,
        lien: "/",
        tague:"providers"
    },
    {
        libelle: "Paiement",
        icon: Wallet,
        lien: "/",
        tague:"paiements"
    },
    
];
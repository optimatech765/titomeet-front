/* eslint-disable @typescript-eslint/no-explicit-any */
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
        lien: "/admin",
        tague: "home"
    },
    {
        libelle: "Catégories Evènements",
        icon: CalendarCheck,
        lien: "/admin/events-categories",
        tague: "events-categories"
    },
    {
        libelle: "Catégories Services",
        icon: CalendarCheck,
        lien: "/admin/providers-categories",
        tague: "providers-categories"
    },
    
    {
        libelle: "Evènements",
        icon: CalendarCheck,
        lien: "/admin/events",
        tague: "events"
    },
    {
        libelle: "Utilisateurs",
        icon: UserRound,
        lien: "/admin/users",
        tague: "users"
    },
    {
        libelle: "Prestataires",
        icon: BriefcaseBusiness,
        lien: "/admin/providers",
        tague: "providers"
    },
    {
        libelle: "Paiement",
        icon: Wallet,
        lien: "/admin/payments",
        tague: "paiements"
    },

];

export const statusColorMap: any = {
    active: {
        color: "success",
        text: "Actif",

    },
    paused: {
        color: "warning",
        text: "En pause",

    },
    vacation: {
        color: "danger",
        text: "Vacation",

    },

} as any;
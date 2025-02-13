"use client";

import { Button, Link as LinkH, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import Link from "next/link";


export const NavbarSection = () => {
    return (
        <Navbar isBordered className="px-6 shadow-md">
            {/* Logo */}
            <NavbarBrand>
                <img src="/img/logo.png" alt="Logo" className="h-16 w-auto" />
            </NavbarBrand>

            {/* Liens de navigation */}
            <NavbarContent className="hidden lg:flex gap-6">
                <NavbarItem>
                    <LinkH as={Link} href="/" color="foreground" className="font-semibold hover:underline">
                        Accueil
                    </LinkH>
                </NavbarItem>
                <NavbarItem>
                    <LinkH href="/evenements" color="foreground" className="font-semibold hover:underline">
                        Événements
                    </LinkH>
                </NavbarItem>
                <NavbarItem>
                    <LinkH href="/categories" color="foreground" className="font-semibold hover:underline">
                        Catégories
                    </LinkH>
                </NavbarItem>
                <NavbarItem>
                    <LinkH href="/fonctionnalites" color="foreground" className="font-semibold hover:underline">
                        Fonctionnalités
                    </LinkH>
                </NavbarItem>
                <NavbarItem>
                    <LinkH href="/login" color="foreground" className="font-semibold hover:underline">
                        Se connecter
                    </LinkH>
                </NavbarItem>
            </NavbarContent>

            {/* Bouton S'inscrire */}
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} href="/register" color="warning" variant="solid" className="font-bold">
                        S’inscrire
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

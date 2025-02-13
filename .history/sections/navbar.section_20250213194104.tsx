"use client";

import { Button, Drawer, DrawerContent, Link as LinkH, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { useState } from "react";
import { Menu } from "lucide-react"; // Icône de menu
import Link from "next/link";

export const NavbarSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar isBordered className="px-6 shadow-md">
            {/* Menu burger (affiché sur mobile) */}
            <NavbarContent className="lg:hidden">
                <Drawer isOpen={isOpen} onOpenChange={setIsOpen} placement="left">

                    <Button isIconOnly variant="light">
                        <Menu size={24} />
                    </Button>

                    <DrawerContent className="w-64 p-4">
                        <nav className="flex flex-col gap-4">
                            <LinkH as={Link} href="/" onClick={() => setIsOpen(false)} className="text-lg font-semibold">
                                Accueil
                            </LinkH>
                            <LinkH as={Link} href="/evenements" onClick={() => setIsOpen(false)} className="text-lg font-semibold">
                                Événements
                            </LinkH>
                            <LinkH as={Link} href="/categories" onClick={() => setIsOpen(false)} className="text-lg font-semibold">
                                Catégories
                            </LinkH>
                            <LinkH as={Link} href="/fonctionnalites" onClick={() => setIsOpen(false)} className="text-lg font-semibold">
                                Fonctionnalités
                            </LinkH>
                            <LinkH as={Link} href="/login" onClick={() => setIsOpen(false)} className="text-lg font-semibold">
                                Se connecter
                            </LinkH>
                            <Button as={Link} href="/register" color="warning" className="font-bold mt-4">
                                S’inscrire
                            </Button>
                        </nav>
                    </DrawerContent>
                </Drawer>
            </NavbarContent>

            {/* Logo */}
            <NavbarBrand>
                <img src="/img/logo.png" alt="Logo" className="h-16 w-auto" />
            </NavbarBrand>

            {/* Liens de navigation (cachés sur mobile) */}
            <NavbarContent className="hidden lg:flex gap-6">
                <NavbarItem>
                    <LinkH as={Link} href="/" className="font-semibold hover:underline">
                        Accueil
                    </LinkH>
                </NavbarItem>
                <NavbarItem>
                    <LinkH as={Link} href="/evenements" className="font-semibold hover:underline">
                        Événements
                    </LinkH>
                </NavbarItem>
                <NavbarItem>
                    <LinkH as={Link} href="/categories" className="font-semibold hover:underline">
                        Catégories
                    </LinkH>
                </NavbarItem>
                <NavbarItem>
                    <LinkH as={Link} href="/fonctionnalites" className="font-semibold hover:underline">
                        Fonctionnalités
                    </LinkH>
                </NavbarItem>
                <NavbarItem>
                    <LinkH as={Link} href="/login" className="font-semibold hover:underline">
                        Se connecter
                    </LinkH>
                </NavbarItem>
            </NavbarContent>

            {/* Bouton S'inscrire */}
            <NavbarContent justify="end" className="hidden lg:flex">
                <NavbarItem>
                    <Button as={Link} href="/register" color="warning" variant="solid" className="font-bold">
                        S’inscrire
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}


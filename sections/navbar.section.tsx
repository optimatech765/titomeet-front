"use client";

import { Button, Drawer, DrawerContent, Link as LinkH, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { useState } from "react";
import { Menu } from "lucide-react"; // Icône de menu
import Link from "next/link";
import Image from "next/image";

export const NavbarSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar
            maxWidth="full"
            className="px-0 md:px-6 bg-white section-container gap-16  sticky justify-evenly border-slate-300 border-1 text-black"
            position={"sticky"}
            isBordered={true}>


            {/* Menu burger (affiché sur mobile) */}
            <Button isIconOnly variant="light" className="lg:hidden text-primary" onPress={() => setIsOpen(true)}>
                <Menu size={24} className="text-primary" fill="#ee3540" />
            </Button>


            {/* Logo */}
            <NavbarBrand>
                <div className="flex items-center justify-end lg:justify-between gap-2 flex-1">
                    <Image height={40} width={40} src="/img/logo.png" alt="Logo" className="h-16 w-auto" />
                </div>
            </NavbarBrand>


            <Drawer className="lg:hidden" isOpen={isOpen} onOpenChange={setIsOpen} placement="left">
                <DrawerContent className="w-64 p-4">
                    <nav className="flex flex-col gap-4">
                        <LinkH as={Link} href="/" onPress={() => setIsOpen(false)} className="text-lg font-semibold text-black">
                            Accueil
                        </LinkH>
                        <LinkH as={Link} href="/#evenements" onPress={() => setIsOpen(false)} className="text-lg font-semibold">
                            évènements
                        </LinkH>
                        <LinkH as={Link} href="/#categories" onPress={() => setIsOpen(false)} className="text-lg font-semibold">
                            Catégories
                        </LinkH>
                        <LinkH as={Link} href="/#fonctionnalites" onPress={() => setIsOpen(false)} className="text-lg font-semibold">
                            Fonctionnalités
                        </LinkH>
                        <LinkH as={Link} href="/#providers" onPress={() => setIsOpen(false)} className="text-lg font-semibold">
                            Prestataires
                        </LinkH>
                        <LinkH as={Link} href="/auth" onPress={() => setIsOpen(false)} className="text-lg font-semibold">
                            Se connecter
                        </LinkH>
                        <Button as={Link} href="/auth/register" className="font-bold mt-4 bg-primary text-white">
                            S’inscrire
                        </Button>
                    </nav>
                </DrawerContent>
            </Drawer>

            {/* Liens de navigation (cachés sur mobile) */}
            <NavbarContent className="hidden lg:flex gap-6">
                <NavbarItem isActive>
                    <LinkH aria-current="page" as={Link} href="/" className="font-semibold underline-hover text-black">
                        Accueil
                    </LinkH>
                </NavbarItem>
                <NavbarItem>
                    <LinkH underline="active" as={Link} href="/#evenements" className="font-semibold underline-hover text-black">
                        Évènements
                    </LinkH>
                </NavbarItem>
                <NavbarItem>
                    <LinkH as={Link} href="/#categories" className="font-semibold underline-hover text-black">
                        Catégories
                    </LinkH>
                </NavbarItem>
                <NavbarItem>
                    <LinkH as={Link} href="/#fonctionnalites" className="font-semibold underline-hover text-black">
                        Fonctionnalités
                    </LinkH>
                </NavbarItem>
                <NavbarItem>
                    <LinkH as={Link} href="/#providers" className="font-semibold underline-hover text-black">
                        Prestataires
                    </LinkH>
                </NavbarItem>
                <NavbarItem>
                    <LinkH as={Link} href="/auth" className="font-semibold underline-hover text-black">
                        Se connecter
                    </LinkH>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} href="/auth/register" variant="solid" className=" bg-primary text-white rounded-full px-10">
                        S’inscrire
                    </Button>
                </NavbarItem>

                {/* <NavbarItem>

                    <LangSelect />


                </NavbarItem>
                <NavbarItem>
                    <SwitchThemeComponent />
                </NavbarItem> */}
            </NavbarContent>


        </Navbar>
    );
}


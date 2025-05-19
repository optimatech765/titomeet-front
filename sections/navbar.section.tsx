"use client";

import { Button, Drawer, DrawerContent, Link as LinkH, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react"; // Icône de menu
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export const NavbarSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeHash, setActiveHash] = useState("/");

    // Écoute les changements de hash
    useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash);
        };

        // Définir le hash initial (au cas où)
        handleHashChange();

        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    const isActive = (href: string) => {
        return activeHash === href;
    };

    const changeLink = (lien: string) => {
        setActiveHash(lien);
    }


    return (
        <Navbar
            maxWidth="full"
            className=" bg-white section-container gap-16  sticky justify-evenly border-slate-300 border-1 text-black"
            position={"sticky"}
            isBordered={true}
            classNames={{
                base: "px-0 md:px-6",
                wrapper: "px-0 md:px-6",
            }}
            >


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
                        {[
                            { href: "/", label: "Accueil" },
                            { href: "/#evenements", label: "Évènements" },
                            { href: "/#categories", label: "Catégories" },
                            { href: "/#fonctionnalites", label: "Fonctionnalités" },
                            { href: "/#providers", label: "Prestataires" },
                            { href: "/auth", label: "Se connecter" },
                        ].map(({ href, label }) => (
                            <LinkH
                                as={Link}
                                key={href}
                                href={href}
                                onPress={() => {
                                    changeLink(href)
                                    setIsOpen(false)
                                }
                                }

                                 className={clsx({ "text-primary": isActive(href), "text-black": !isActive(href) }, "text-lg font-semibold")}
                            >
                                {label}
                            </LinkH>
                        ))}
                        <Button as={Link} href="/auth/register" className="font-bold mt-4 bg-primary text-white">
                            S’inscrire
                        </Button>
                    </nav>
                </DrawerContent>
            </Drawer>

            {/* Liens de navigation (cachés sur mobile) */}
            <NavbarContent className="hidden lg:flex gap-6">
                {[
                    { href: "/", label: "Accueil" },
                    { href: "/#evenements", label: "Évènements" },
                    { href: "/#categories", label: "Catégories" },
                    { href: "/#fonctionnalites", label: "Fonctionnalités" },
                    { href: "/#providers", label: "Prestataires" },
                    { href: "/auth", label: "Se connecter" },
                ].map(({ href, label }) => (
                    <NavbarItem key={href}   >
                        <LinkH
                            underline={isActive(href) ? "active" : "none"}
                            onPress={() => changeLink(href)}
                            as={Link}
                            href={href}
                            className={clsx({ "active-link": isActive(href), "text-black underline-hover": !isActive(href) }, "text-lg font-semibold text-black ")}
                        >
                            {label}
                        </LinkH>
                    </NavbarItem>
                ))}
                {/*         
                <NavbarItem isActive={isActive("/")}>
                    <LinkH aria-current="page" as={Link} href="/" className="font-semibold underline-hover text-black">
                        Accueil
                    </LinkH>
                </NavbarItem>
                <NavbarItem isActive={isActive("/#evenements")}>
                    <LinkH underline="active" as={Link} href="/#evenements" className="font-semibold underline-hover text-black">
                        Évènements
                    </LinkH>
                </NavbarItem>
                <NavbarItem isActive={isActive("/#categories")}>
                    <LinkH as={Link} href="/#categories" className="font-semibold underline-hover text-black">
                        Catégories
                    </LinkH>
                </NavbarItem>
                <NavbarItem isActive={isActive("/#fonctionnalites")}>
                    <LinkH as={Link} href="/#fonctionnalites" className="font-semibold underline-hover text-black">
                        Fonctionnalités
                    </LinkH>
                </NavbarItem>
                <NavbarItem isActive={isActive("/#providers")}>
                    <LinkH as={Link} href="/#providers" className="font-semibold underline-hover text-black">
                        Prestataires
                    </LinkH>
                </NavbarItem>
                <NavbarItem isActive={isActive("/auth")}>
                    <LinkH as={Link} href="/auth" className="font-semibold underline-hover text-black">
                        Se connecter
                    </LinkH>
                </NavbarItem> */}
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


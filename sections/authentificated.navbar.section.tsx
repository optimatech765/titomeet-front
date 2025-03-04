"use client";

import { Avatar, Button, Drawer, DrawerContent, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Link as LinkH, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { useState } from "react";
import { Bell, MapPinIcon, Menu, MessageCircleMore } from "lucide-react"; // Icône de menu
import Link from "next/link";
import { LangSelect } from "@/locales/lang.select";
import { SwitchThemeComponent } from "@/components/switch.theme.component";

export const AuthentificatedNavbarSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar
            maxWidth="full"
            className=" bg-white gap-20 section-container  sticky justify-evenly border-slate-300 border-1 text-black"
            position={"sticky"}
            isBordered={true}>
            {/* Menu burger (affiché sur mobile) */}
            <Button isIconOnly variant="light" className="lg:hidden" onPress={() => setIsOpen(true)}>
                <Menu size={24} />
            </Button>
            {/* Logo */}
            <NavbarBrand>
                <div className="flex items-center gap-2 flex-1">
                    <img src="/img/logo.png" alt="Logo" className="h-16 w-auto" />
                    <Input
                        startContent={<MapPinIcon fill="red" className="w-4 h-4 text-white" />}
                        radius="full"
                        placeholder="Localisation"
                        className="ml-4 rounded-full hidden md:block max-w-xs"
                        size="sm"
                    />
                </div>

            </NavbarBrand>

            <NavbarContent className="lg:hidden">
                <Drawer isOpen={isOpen} onOpenChange={setIsOpen} placement="left">
                    <DrawerContent className="w-64 p-4">
                        <nav className="flex flex-col gap-4">
                            <LinkH as={Link} href="/" onPress={() => setIsOpen(false)} className="text-lg font-semibold text-black">
                                Accueil
                            </LinkH>
                            <LinkH as={Link} href="/evenements" onPress={() => setIsOpen(false)} className="text-lg font-semibold">
                                Événements
                            </LinkH>
                            <LinkH as={Link} href="/categories" onPress={() => setIsOpen(false)} className="text-lg font-semibold">
                                Catégories
                            </LinkH>
                            <LinkH as={Link} href="/fonctionnalites" onPress={() => setIsOpen(false)} className="text-lg font-semibold">
                                Fonctionnalités
                            </LinkH>
                            <LinkH as={Link} href="/login" onPress={() => setIsOpen(false)} className="text-lg font-semibold">
                                Se connecter
                            </LinkH>
                            <Button as={Link} href="/register" color="warning" className="font-bold mt-4">
                                S’inscrire
                            </Button>
                        </nav>
                    </DrawerContent>
                </Drawer>
            </NavbarContent>


            {/* Liens de navigation (cachés sur mobile) */}
            <NavbarContent className="hidden lg:flex gap-6">
                <NavbarItem isActive>
                    <LinkH aria-current="page" as={Link} href="/" className="font-semibold underline-hover text-black">
                        Accueil
                    </LinkH>
                </NavbarItem>
                <NavbarItem>
                    <LinkH underline="active" as={Link} href="/user/events" className="font-semibold underline-hover text-black">
                        Événements
                    </LinkH>
                </NavbarItem>
                <NavbarItem>
                    <LinkH as={Link} href="/user/our-events" className="font-semibold underline-hover text-black">
                        Mes évènements
                    </LinkH>
                </NavbarItem>
                <NavbarItem>
                    <LinkH as={Link} href="/services" className="font-semibold underline-hover text-black">
                        Services
                    </LinkH>
                </NavbarItem>

                <NavbarItem>
                    <LinkH

                        as={Link}
                        href="/message"
                        className="font-semibold underline-hover text-black"
                    >
                        <MessageCircleMore className="w-10 h-10 text-white" fill={"#ee3540"} />

                    </LinkH>
                </NavbarItem>

                <NavbarItem>
                    <LinkH as={Link} href="/notifications" className="font-semibold underline-hover text-black">
                        <Bell className="w-8 h-8 text-primary" fill={"#ee3540"} />
                    </LinkH>
                </NavbarItem>

                <NavbarItem>


                    <Dropdown>
                        <DropdownTrigger>
                            <Avatar name={"USR"} alt="Avatar" className="w-10 font-bold h-10 rounded-full cursor-pointer" />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Dropdown Variants" variant={"solid"}>
                            <DropdownItem key="new">Profil</DropdownItem>
                            <DropdownItem key="delete" className="text-danger" color="danger">
                                <Link href="/auth">Se déconnecter</Link>
                                {/* Se déconnecter */}
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>

                <NavbarItem>

                    <LangSelect />


                </NavbarItem>
                <NavbarItem>
                    <SwitchThemeComponent />
                </NavbarItem>
            </NavbarContent>


        </Navbar>
    );
}


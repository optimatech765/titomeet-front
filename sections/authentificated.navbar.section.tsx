"use client";

import { Avatar, Button, Drawer, DrawerContent, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Link as LinkH, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { useState } from "react";
import { Bell, MapPinIcon, Menu, MessageCircleMore } from "lucide-react"; // Icône de menu
import Link from "next/link";
import Image from "next/image";
import { getInitials } from "@/utils/functions/other.functions";
import { useAppContext } from "@/context";
import { useRouter } from "next/navigation";

export const AuthentificatedNavbarSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuth } = useAppContext();
    const router = useRouter();

    const logOut = () => {
        localStorage.removeItem("accessToken");
        router.push("/auth");
    }

    return (
        <Navbar
            classNames={{
                wrapper: "px-0"
            }}
            maxWidth="full"
            className=" bg-white gap-20 md:section-container  sticky justify-evenly border-slate-300 border-1 text-black"
            position={"sticky"}
            isBordered={true}>
            {/* Menu burger (affiché sur mobile) */}
            <Button isIconOnly variant="light" className="lg:hidden" onPress={() => setIsOpen(true)}>
                <Menu size={24} />
            </Button>
            {/* Logo */}
            <NavbarBrand className="px-0">
                <div className="flex items-center  gap-2 flex-1">

                    <Image height={200} width={400} src="/img/logo.png" alt="Logo" className="h-16  w-auto " />

                    <Input
                        startContent={<MapPinIcon fill="red" className="w-4 h-4 text-white" />}
                        radius="full"
                        placeholder="Localisation"
                        className="ml-4 rounded-full hidden sm:block max-w-xs"
                        size="sm"
                    />
                </div>

            </NavbarBrand>


            <Drawer isOpen={isOpen} onOpenChange={setIsOpen} placement="left" className="lg:hidden">
                <DrawerContent className="w-64 p-4">
                    <nav className="flex flex-col gap-4 ">
                        <LinkH as={Link} href="/user" onPress={() => setIsOpen(false)} className="text-lg font-semibold text-black">
                            Accueil
                        </LinkH>
                        <LinkH as={Link} href="/user/events" onPress={() => setIsOpen(false)} className="text-lg font-semibold">
                            Événements
                        </LinkH>
                        <LinkH as={Link} href="/user/our-events" onPress={() => setIsOpen(false)} className="text-lg font-semibold">
                            Mes évènements
                        </LinkH>
                        <LinkH as={Link} href="/user/services" onPress={() => setIsOpen(false)} className="text-lg font-semibold">
                            Services
                        </LinkH>

                    </nav>
                </DrawerContent>
            </Drawer>



            {/* Liens de navigation (cachés sur mobile) */}
            <NavbarContent className="hidden lg:flex gap-6">
                <NavbarItem isActive>
                    <LinkH aria-current="page" as={Link} href="/user" className="font-semibold underline-hover text-black">
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
                    <LinkH as={Link} href="/user/services" className="font-semibold underline-hover text-black">
                        Services
                    </LinkH>
                </NavbarItem>

                <NavbarItem>
                    <LinkH

                        as={Link}
                        href="/user/message"
                        className="font-semibold underline-hover text-black"
                    >
                        <MessageCircleMore className="w-10 h-10 text-white" fill={"#ee3540"} />

                    </LinkH>
                </NavbarItem>

                <NavbarItem>
                    <LinkH as={Link} href="/user/notifications" className="font-semibold underline-hover text-black">
                        <Bell className="w-8 h-8 text-primary" fill={"#ee3540"} />
                    </LinkH>
                </NavbarItem>

                <NavbarItem>


                    <Dropdown>
                        <DropdownTrigger>
                            <Avatar name={getInitials(isAuth?.firstName, isAuth?.lastName)} alt="Avatar" className="w-10 font-bold h-10 rounded-full cursor-pointer" />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Dropdown Variants" variant={"solid"}>
                            <DropdownItem key="new">
                                <Link href={"/user/profil"}>
                                    Profil
                                </Link>
                            </DropdownItem>
                            <DropdownItem key="delete" className="text-danger" color="danger">
                                <span className={"cursor-pointer"} onClick={logOut} >Se déconnecter</span>
                                {/* Se déconnecter */}
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
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


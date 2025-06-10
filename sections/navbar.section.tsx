"use client";

import { Button, Drawer, DrawerContent, Link as LinkH, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react"; // Icône de menu
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useScopedI18n } from "@/locales/client";

export const NavbarSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeHash, setActiveHash] = useState("/");
    const pathName = usePathname();
    const navbarT = useScopedI18n('navbar');
    const buttonT = useScopedI18n('button');

    // Écoute les changements de hash
    useEffect(() => {
        const sectionIds = [
            "/",
            "#evenements",
            "#categories",
            "#fonctionnalites",
            "#providers"
        ];

        const handleScroll = () => {
            let current = "/";
            for (const id of sectionIds) {
                const section = document.querySelector(id === "/" ? "body" : id);
                if (section) {
                    const top = (section as HTMLElement).getBoundingClientRect().top;
                    if (top <= 50) {
                        current = id;
                    }
                }
            }

            if (pathName === "/fr/auth" || pathName === "/en/auth") {
                setActiveHash("/auth");
            } else {
                setActiveHash(current);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });


        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [pathName]);


    const isActive = (href: string) => {
        return activeHash === href;
    };

    const changeLink = (lien: string) => {
        setActiveHash(lien);
    }

    const linksList = [
        { href: "/", label: navbarT("home") },
        { href: "#evenements", label: navbarT("event") },
        { href: "#categories", label: navbarT("categotie") },
        { href: "#fonctionnalites", label: navbarT("functions") },
        { href: "#providers", label: navbarT("provider") }
    ]


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
                    <nav className="flex flex-col gap-4  ">
                        {linksList.map(({ href, label }) => (
                            <LinkH
                                as={Link}
                                key={href}
                                href={href}
                                onPress={() => {
                                    changeLink(href)
                                    setIsOpen(false)
                                }
                                }

                                className={clsx({ "text-primary": isActive(href) || href === "/" + activeHash, "text-black": !isActive(href) && href !== "/" + activeHash }, "text-lg font-semibold")}
                            >
                                {label}
                            </LinkH>
                        ))}
                        <LinkH
                            as={Link}
                            key={"/auth"}
                            href={"/auth"}
                            onPress={() => {
                                changeLink("/auth")
                                setIsOpen(false)
                            }
                            }

                            className={clsx({ "text-primary": isActive("/auth"), "text-black": !isActive("/auth") }, "text-lg font-semibold")}
                        >
                            {buttonT("login")}
                        </LinkH>

                        <Button as={Link} href="/auth/register" className="font-bold mt-4 bg-primary text-white">
                            {buttonT("register")}
                        </Button>
                    </nav>
                </DrawerContent>
            </Drawer>

            {/* Liens de navigation (cachés sur mobile) */}
            <NavbarContent className="hidden lg:flex gap-6">
                {linksList.map(({ href, label }) => (
                    <NavbarItem key={href}   >
                        <LinkH
                            underline={isActive(href) ? "active" : "none"}
                            onPress={() => changeLink(href)}
                            as={Link}
                            href={href}
                            className={clsx({ "active-link": isActive(href) || href === "/" + activeHash, "text-black underline-hover": !isActive(href) && href !== "/" + activeHash }, "text-lg font-semibold text-black ")}
                        >
                            {label}
                        </LinkH>
                    </NavbarItem>
                ))}
                <NavbarItem key={"/auth"}   >
                    <LinkH
                        underline={isActive("/auth") ? "active" : "none"}
                        onPress={() => changeLink("/auth")}
                        as={Link}
                        href={"/auth"}
                        className={clsx({ "active-link": isActive("/auth"), "text-black underline-hover": !isActive("/auth") }, "text-lg font-semibold text-black ")}
                    >
                        {buttonT("login")}
                    </LinkH>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} href="/auth/register" className="font-bold bg-primary text-white">
                        {buttonT("register")}
                    </Button>
                </NavbarItem>

            </NavbarContent>


        </Navbar>
    );
}


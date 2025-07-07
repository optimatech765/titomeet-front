"use client";
import { useScopedI18n } from '@/locales/client';
import { Button, Input } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const FooterSection = () => {
    const mailingT = useScopedI18n('mailing');
    const buttonT = useScopedI18n('button');
    const websiteT = useScopedI18n('website');
    const navbarT = useScopedI18n('navbar');

    const linksList = [
        { href: "/", label:navbarT("home") },
        { href: "/#evenements", label: navbarT("event") },
        { href: "/#categories", label: navbarT("categotie") },
        { href: "/#fonctionnalites", label: navbarT("functions") },
        { href: "/#providers", label: navbarT("provider") }
    ]
    return (
        <div className="mt-7">
            <footer className="bg-footer-pattern bg-cover min-h-56 pt-11 px-5 md:px-10">

                <div className="md:grid gap-4 grid-cols-3">
                    <div className={"col-span-2"}>
                        <div className="md:grid gap-4 grid-cols-3">
                            <div>

                                <Image alt='logo ' src={"/img/footer.png"} height={100} width={300} className={""} />
                                <p className={"font-poppins footer-link "} >
                                  {websiteT("slogan")}
                                </p>

                            </div>

                            <div>
                                <span className={"font-semibold font-poppins "} >{websiteT("lastInfo")}</span>
                                <div>
                                    {linksList.map(({ href, label }) => (
                                        <Link key={href} href={href} scroll={true} className='block footer-link'>{label}</Link>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <span className={"font-semibold font-poppins "} >{websiteT("help")}</span>
                                <div>
                                    <Link href={"/faq"} scroll={true} className='block footer-link'>FAQ</Link>
                                    <Link href={"/terms"} scroll={true} className='block footer-link'>{websiteT("terms")}</Link>
                                    <Link href={"/policy"} scroll={true} className='block footer-link'>{websiteT("policy")}</Link>
                                    <Link href={"/support"} scroll={true} className='block footer-link'>{websiteT("support")}</Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='space-y-1'>
                        <label className={"font-semibold font-poppins m:ml-4  "} >{mailingT("label")}</label>
                        <Input
                            radius='full'
                            size='lg'
                            className="w-auto pr-0 rounded-full py-2 text-sm text-gray-70 focus:ring-primary focus:border-primary focus:outline-none focus:ring-1 sm:text-sm"
                            placeholder="Email"
                            type="email"
                            endContent={

                                <Button className="bg-primary text-white rounded-full -mr-4 ">
                                
                                   {buttonT("register")}
                                </Button>

                            }
                        />
                    </div>


                </div>

            </footer>

        </div>
    );
}


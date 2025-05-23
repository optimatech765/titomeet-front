"use client";
import { Button, Input } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const FooterSection = () => {
    return (
        <div className="mt-7">
            <footer className="bg-footer-pattern bg-cover min-h-56 pt-11 px-5 md:px-10">

                <div className="md:grid gap-4 grid-cols-3">
                    <div className={"col-span-2"}>
                        <div className="md:grid gap-4 grid-cols-3">
                            <div>

                                <Image alt='logo ' src={"/img/footer.png"} height={100} width={300} className={""} />
                                <p className={"font-poppins footer-link "} >
                                    Rejoignez une communauté dynamique et vivez des évènements uniques
                                </p>

                            </div>

                            <div>
                                <span className={"font-semibold font-poppins "} >Recevez les dernières actualités</span>
                                <div>
                                    <Link href={"/"} scroll={true} className='block footer-link'>Accueil</Link>
                                    <Link href={"#evenements"} scroll={true} className='block footer-link'>évènements</Link>
                                    <Link href={"/user/our-events"} scroll={true} className='block footer-link'>Mes évènements</Link>
                                    <Link href={"#fonctionnalites"} scroll={true} className='block footer-link'>Services</Link>
                                </div>
                            </div>

                            <div>
                                <span className={"font-semibold font-poppins "} >Aides</span>
                                <div>
                                    <Link href={"#"} scroll={true} className='block footer-link'>FAQ</Link>
                                    <Link href={"#"} scroll={true} className='block footer-link'>Conditions générales</Link>
                                    <Link href={"#"} scroll={true} className='block footer-link'>Politiques de confidentialité</Link>
                                    <Link href={"#"} scroll={true} className='block footer-link'>Support client</Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='space-y-1'>
                        <label className={"font-semibold font-poppins m:ml-4  "} >Recevez les dernières actualités</label>
                        <Input
                            radius='full'
                            size='lg'
                            className="w-auto pr-0 rounded-full py-2 text-sm text-gray-70 focus:ring-primary focus:border-primary focus:outline-none focus:ring-1 sm:text-sm"
                            placeholder="Email"
                            type="email"
                            endContent={

                                <Button className="bg-primary text-white rounded-full -mr-4 ">
                                    S&apos;inscrire
                                </Button>

                            }
                        />
                    </div>


                </div>

            </footer>

        </div>
    );
}


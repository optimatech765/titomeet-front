"use client"
import { Button, Input } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <div className='py-10'>
            <div className=" flex justify-center items-center">

                <Image alt='dd' src={'/img/auth-logo.png'} width={120} height={60} />

            </div>
            <div className="text-center mb-6">
                <h2 className="text-base font-semibold">Mot de pasee oublié</h2>
                <p className="text-gray-500 text-xs font-light">
                    Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe
                </p>
            </div>

            <div className="mb-2 space-y-0.5">
                <label className="block text-sm font-medium">Email</label>
                <Input radius={"full"} type="email" className='rounded-full' placeholder="Entrez votre adresse email" />
            </div>

            <Button radius='full' className="w-full bg-red-500 hover:bg-red-600 text-white">Envoyer</Button>

            <p className="text-center mt-4 text-sm">
                Se connecter avec son mot de passe <Link href="/auth" className="text-red-500 underline">Se connecter</Link>
            </p>
        </div>
    );
}

export default Page;

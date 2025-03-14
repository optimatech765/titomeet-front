import { Button } from '@heroui/button';
import React from 'react';
import InputContainerComponent from '../create-event/input.container.component';

export const SecurityProfil = () => {
    return (
        <div className='flex flex-col justify-between h-full'>
            <div>
                <h2 className="text-2xl font-semibold mb-4">Sécurité du compte</h2>

                <div className='md:w-1/2 flex flex-col gap-4'>
                    <InputContainerComponent title={"Mot de passe"} >
                        <Button variant='bordered' className="border-secondary-blue w-full text-secondary-blue  px-6 py-2" radius='full' >
                            Modifier
                        </Button>

                    </InputContainerComponent>
               
                    <h2 className="text-2xl font-semibold mb-4">Authentification</h2>
                    <InputContainerComponent title={"Google"} >
                        <Button variant='bordered' className="border-secondary-blue w-full text-secondary-blue  px-6 py-2" radius='full' >
                            Lier compte
                        </Button>

                    </InputContainerComponent>

                    <InputContainerComponent title={"Facebook"} >
                        <Button variant='bordered' className="border-secondary-blue w-full text-secondary-blue  px-6 py-2" radius='full' >
                            Lier compte
                        </Button>

                    </InputContainerComponent>
                </div>

            </div>

            {/* Bouton sauvegarder */}
            <div className="mt-6">
                <Button className="bg-red-500 text-white px-6 py-2" radius='full' >
                    Sauvegarder
                </Button>
            </div>

        </div>
    );
}

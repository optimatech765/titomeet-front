import { Button } from '@heroui/button';
import React from 'react';
import InputContainerComponent from '../create-event/input.container.component';
import { useScopedI18n } from '@/locales/client';

export const SecurityProfil = () => {
    const updateProfilT = useScopedI18n("updateProfil");
    const buttonT = useScopedI18n("button");
    const inputT = useScopedI18n("input");
    return (
        <div className='flex flex-col justify-between h-full'>
            <div>
                <h2 className="text-2xl font-semibold mb-4">{updateProfilT("sideBarTitle4")}</h2>

                <div className='md:w-1/2 flex flex-col gap-4'>
                    <InputContainerComponent title={inputT("passwordLabel")} >
                        <Button variant='bordered' className="border-secondary-blue w-full text-secondary-blue  px-6 py-2" radius='full' >
                            {buttonT("update")}
                        </Button>

                    </InputContainerComponent>
               
                    <h2 className="text-2xl font-semibold mb-4">{updateProfilT("securityAuth")}</h2>
                    <InputContainerComponent title={"Google"} >
                        <Button variant='bordered' className="border-secondary-blue w-full text-secondary-blue  px-6 py-2" radius='full' >
                          {updateProfilT("securityLinkAccount")}
                        </Button>

                    </InputContainerComponent>

                    <InputContainerComponent title={"Facebook"} >
                        <Button variant='bordered' className="border-secondary-blue w-full text-secondary-blue  px-6 py-2" radius='full' >
                              {updateProfilT("securityLinkAccount")}
                        </Button>

                    </InputContainerComponent>
                </div>

            </div>

            {/* Bouton sauvegarder */}
            <div className="mt-6">
                <Button className="bg-red-500 text-white px-6 py-2" radius='full' >
                  {buttonT("save")}
                </Button>
            </div>

        </div>
    );
}

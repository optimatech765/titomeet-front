/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@heroui/button';
import { Radio, RadioGroup, useDisclosure } from '@heroui/react';
import React from 'react';
import { DesactiveAccountModal } from './desactive.account.modal';
import { DeleteAccountModal } from './delete.account.modal';
import { useChangeLocale, useCurrentLocale, useScopedI18n } from '@/locales/client';

export const AdvancedSettingsProfil = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isOpenDesactive, onOpen: onOpenDesactive, onClose: onCloseDesactive } = useDisclosure();
    const updateProfilT = useScopedI18n("updateProfil");
    const locale = useCurrentLocale();
    const changelOcale = useChangeLocale();

    return (
        <>
            <div className='flex flex-col justify-between h-full'>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">
                        {updateProfilT("advancedTitle")}
                    </h2>

                    <h4 className='text-sm font-medium text-gray-700'>{updateProfilT("advancedLan")}</h4>
                    <div className="flex flex-col gap-3 mt-3">
                        <RadioGroup value={locale} onValueChange={(e) => changelOcale(e as any)} className={"justify-start space-y-4"} >

                            <Radio value="fr"
                                onChange={() => changelOcale("fr")}
                                checked={locale === "fr"}
                                color='danger'
                                classNames={{
                                    label: "text-sm pl-0 font-medium text-gray-700 flex flex-row-reverse gap-2",
                                    description: "text-sm font-medium text-gray-700 flex flex-row-reverse gap-2",
                                    base: "flex flex-row-reverse gap-2 pl-0  my-1",
                                }} >
                                {updateProfilT("advancedFr")}
                            </Radio>
                            <Radio value="en"
                                onChange={() => changelOcale("en")}
                                checked={locale === "en"}
                                color='danger'
                                classNames={{
                                    label: "text-sm font-medium text-gray-700 flex flex-row-reverse gap-2",
                                    description: "text-sm font-medium text-gray-700 flex flex-row-reverse gap-2",
                                    base: "flex flex-row-reverse gap-2 pl-0",
                                }}
                            >
                                {updateProfilT("advancedEn")}
                            </Radio>

                        </RadioGroup>
                        {/* <p className="text-default-500 text-small">Selected: {selected}</p> */}
                    </div>

                    <div className={"mt-5"}>
                        <h4 className='text-sm font-medium text-gray-700'>Compte</h4>
                        <div className="flex flex-col gap-3 mt-4 md:w-1/3">
                            <Button onPress={() => onOpenDesactive()} className="bg-tertiary font-semibold text-primary px-6 py-2  " radius='full' >
                                {updateProfilT("deactive")}
                            </Button>
                            <Button onPress={() => onOpen()} className="bg-tertiary font-semibold text-primary px-6 py-2  " radius='full' >
                                {updateProfilT("delete")}
                            </Button>
                        </div>
                    </div>

                </div>

                {/* Bouton sauvegarder */}
                {/* <div className="mt-6">
                    <Button className="bg-red-500 text-white px-6 py-2  " radius='full' >
                        Sauvegarder
                    </Button>
                </div> */}

            </div>

            <DeleteAccountModal isOpen={isOpen} onClose={onClose} />
            <DesactiveAccountModal isOpen={isOpenDesactive} onClose={onCloseDesactive} />
        </>

    );
}

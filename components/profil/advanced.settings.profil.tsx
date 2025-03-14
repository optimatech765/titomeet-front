import { Button } from '@heroui/button';
import { Radio, RadioGroup, useDisclosure } from '@heroui/react';
import React from 'react';
import { DesactiveAccountModal } from './desactive.account.modal';
import { DeleteAccountModal } from './delete.account.modal';

export const AdvancedSettingsProfil = () => {
    const [selected, setSelected] = React.useState("london");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isOpenDesactive, onOpen: onOpenDesactive, onClose: onCloseDesactive } = useDisclosure();
    return (
        <>
            <div className='flex flex-col justify-between h-full'>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">
                        Paramètres avancés
                    </h2>

                    <h4 className='text-sm font-medium text-gray-700'>Langue</h4>
                    <div className="flex flex-col gap-3 mt-3">
                        <RadioGroup value={selected} onValueChange={setSelected} className={"justify-start space-y-4"} >

                            <Radio value="fr"
                                color='success'
                                classNames={{
                                    label: "text-sm pl-0 font-medium text-gray-700 flex flex-row-reverse gap-2",
                                    description: "text-sm font-medium text-gray-700 flex flex-row-reverse gap-2",
                                    base: "flex flex-row-reverse gap-2 pl-0  my-1",
                                }} >
                                Français
                            </Radio>

                            <Radio value="en"
                                color='success'
                                classNames={{
                                    label: "text-sm font-medium text-gray-700 flex flex-row-reverse gap-2",
                                    description: "text-sm font-medium text-gray-700 flex flex-row-reverse gap-2",
                                    base: "flex flex-row-reverse gap-2 pl-0",
                                }}
                            >
                                Anglais
                            </Radio>

                        </RadioGroup>
                        {/* <p className="text-default-500 text-small">Selected: {selected}</p> */}
                    </div>

                    <div className={"mt-5"}>
                        <h4 className='text-sm font-medium text-gray-700'>Compte</h4>
                        <div className="flex flex-col gap-3 mt-4 md:w-1/3">
                            <Button onPress={() => onOpenDesactive()} className="bg-tertiary font-semibold text-primary px-6 py-2  " radius='full' >
                                Desactiver mon compte
                            </Button>
                            <Button onPress={() => onOpen()} className="bg-tertiary font-semibold text-primary px-6 py-2  " radius='full' >
                                Supprimer mon compte
                            </Button>
                        </div>
                    </div>

                </div>

                {/* Bouton sauvegarder */}
                <div className="mt-6">
                    <Button className="bg-red-500 text-white px-6 py-2  " radius='full' >
                        Sauvegarder
                    </Button>
                </div>

            </div>

            <DeleteAccountModal isOpen={isOpen} onClose={onClose} />
            <DesactiveAccountModal isOpen={isOpenDesactive} onClose={onCloseDesactive} />
        </>

    );
}

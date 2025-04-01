"use client"
import { useProvidersStore } from '@/stores/providers.store';
import { Button, Card, CardBody, Input, Select, SelectItem } from '@heroui/react';
import React from 'react';

export const FirstStep = ({ setActiveStep }: { setActiveStep: (activeStep: number) => void }) => {
    const {updateProviderData, providerData } = useProvidersStore();
    return (

        <Card className=" mt-6 mx-14">
            <CardBody>
                <h3 className="text-lg font-semibold mb-4">Informations générales</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                        onChange={(e) => updateProviderData("name", e.target.value)}
                        value={providerData.name}
                        placeholder="Nom du prestataire/Entreprise"
                        classNames={{
                            input: "w-full bg-white",
                            base: "w-full bg-white",
                            inputWrapper: "w-full bg-white ring-1 ring-slate-300 focus:none hover:none ",
                        }}
                    />
                    <Select
                        classNames={{

                            base: "w-full bg-white",
                            trigger: "w-full bg-white ring-1 ring-slate-300 focus:none hover:none ",
                        }}
                    >
                        <SelectItem key="">Catégorie de service</SelectItem>
                        <SelectItem key="event">Événementiel</SelectItem>
                        <SelectItem key="tech">Technologie</SelectItem>
                    </Select>
                    <Input
                        onChange={(e) => updateProviderData("email", e.target.value)}
                        value={providerData.email}
                        classNames={{
                            input: "w-full bg-white",
                            base: "w-full bg-white",
                            inputWrapper: "w-full bg-white ring-1 ring-slate-300 focus:none hover:none ",
                        }}
                        type="email" placeholder="Adresse mail" />
                    <Input
                        onChange={(e) => updateProviderData("address", e.target.value)}
                        value={providerData.address}
                        classNames={{
                            input: "w-full bg-white",
                            base: "w-full bg-white",
                            inputWrapper: "w-full bg-white ring-1 ring-slate-300 focus:none hover:none ",
                        }}
                        placeholder="Localisation" />
                    <Input
                        onChange={(e) => updateProviderData("phone", e.target.value)}
                        value={providerData.phone}
                        classNames={{
                            input: "w-full bg-white",
                            base: "w-full bg-white",
                            inputWrapper: "w-full bg-white ring-1 ring-slate-300 focus:none hover:none ",
                        }}
                        type="tel" placeholder="Téléphone" />
                    <Input
                        onChange={(e) => updateProviderData("website", e.target.value)}
                        value={providerData.website}
                        classNames={{
                            input: "w-full bg-white",
                            base: "w-full bg-white",
                            inputWrapper: "w-full bg-white ring-1 ring-slate-300 focus:none hover:none ",
                        }}
                        type="url" placeholder="Site web" />
                </div>
                <div className="flex justify-end mt-6">
                    <Button size='sm' radius='full' onPress={() => setActiveStep(2)} className="bg-primary  font-medium text-white px-6 py-2">
                        Suivant
                    </Button>
                </div>
            </CardBody>
        </Card>

    );
}



/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { AddressSelector } from '@/components/selectors/address.selector';
import { ProvidersCategoriesSelectorComponent } from '@/components/selectors/providers.categories.selector.component';
import { InputErrorStore } from '@/stores/input.error.store';
import { useProvidersStore } from '@/stores/providers.store';
import { ProvidersValidatorStepOne } from '@/utils/validator/providers.validator';
import { Button, Card, CardBody, Input } from '@heroui/react';
import React from 'react';
import { toast } from 'react-toastify';

export const FirstStep = ({ setActiveStep }: { setActiveStep: (activeStep: number) => void }) => {
    const { updateProviderData, providerData } = useProvidersStore();
    const { setMessageError, errorField } = InputErrorStore();

    const NextStep = () => {
        const { error, errorData } = ProvidersValidatorStepOne(providerData);
        if (error) {
            toast.error(errorData.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
            });
            setMessageError(errorData)
        }
        else {
            setActiveStep(2);
        }
    }

    
    return (

        <Card className=" mt-6 mx-14">
            <CardBody>
                <h3 className="text-lg font-semibold mb-4">Informations générales</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                        errorMessage={errorField?.message}
                        isInvalid={errorField.field === 'name'}
                        onChange={(e) => updateProviderData("name", e.target.value)}
                        value={providerData.name}
                        placeholder="Nom du prestataire/Entreprise"
                        classNames={{
                            input: "w-full bg-white",
                            base: "w-full bg-white",
                            inputWrapper: "w-full bg-white ring-1 ring-slate-300 focus:none hover:none ",
                        }}
                    />

                    <ProvidersCategoriesSelectorComponent
                        onChange={(e: any) => updateProviderData("categoryId", e)}
                        value={providerData?.categoryId ? providerData?.categoryId?.split(",") : []}
                    />

                    <Input
                        errorMessage={errorField?.message}
                        isInvalid={errorField.field === 'email'}
                        onChange={(e) => updateProviderData("email", e.target.value)}
                        value={providerData.email}
                        classNames={{
                            input: "w-full bg-white",
                            base: "w-full bg-white",
                            inputWrapper: "w-full bg-white ring-1 ring-slate-300 focus:none hover:none ",
                        }}
                        type="email" placeholder="Adresse mail"
                    />

                    <div className="w-full">
                        <AddressSelector onChange={(e) => updateProviderData("addressId", e)} value={providerData.addressId} />
                    </div>


                    <Input
                        errorMessage={errorField?.message}
                        isInvalid={errorField.field === 'phoneNumber'}
                        onChange={(e) => updateProviderData("phoneNumber", e.target.value)}
                        value={providerData.phoneNumber}
                        classNames={{
                            input: "w-full bg-white",
                            base: "w-full bg-white",
                            inputWrapper: "w-full bg-white ring-1 ring-slate-300 focus:none hover:none ",
                        }}
                        type="tel" placeholder="Téléphone"
                    />

                    <Input
                        isInvalid={errorField.field === 'website'}
                        errorMessage={errorField?.message}
                        onChange={(e) => updateProviderData("website", e.target.value)}
                        value={providerData.website}
                        classNames={{
                            input: "w-full bg-white",
                            base: "w-full bg-white",
                            inputWrapper: "w-full bg-white ring-1 ring-slate-300 focus:none hover:none ",
                        }}
                        type="url" placeholder="Site web"
                    />

                </div>
                <div className="flex justify-end mt-6">
                    <Button 
                    name={"NextStep"}
                    size='sm' radius='full' onPress={NextStep} className="bg-primary  font-medium text-white px-6 py-2">
                        Suivant
                    </Button>
                </div>
            </CardBody>
        </Card>

    );
}



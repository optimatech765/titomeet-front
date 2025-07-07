/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputErrorStore } from '@/stores/input.error.store';
import { useProvidersStore } from '@/stores/providers.store';
import { ProvidersValidatorStepTwo } from '@/utils/validator/providers.validator';
import { Avatar, Button, Card, CardBody, Textarea } from '@heroui/react';
import { Camera } from 'lucide-react';
import React from 'react';
import { toast } from 'react-toastify';

export const SecondStemp = ({ setActiveStep }: { setActiveStep: (activeStep: number) => void }) => {
    const { updateProviderData, providerData } = useProvidersStore();
    const { setMessageError, errorField } = InputErrorStore();

    const NextStep = () => {
        const { error, errorData } = ProvidersValidatorStepTwo(providerData);
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
            setActiveStep(3);
        }
    }

    return (

        <Card className=" mt-6 mx-14">
            <CardBody>
                <h3 className="text-lg font-semibold mb-4">Description et offres</h3>
                <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                        <Avatar alt="Avatar" className="w-full h-full rounded-full text-white" />
                        <label className="absolute bottom-0 right-0 bg-red-500 p-1 rounded-full cursor-pointer">
                            <Camera size={16} className="text-white" />
                            <input type="file" className="hidden" onChange={(e: any) => updateProviderData("image", e.target.files[0])} />
                        </label>
                    </div>
                    <p className="mt-2 text-gray-500">Photo de profil</p>
                </div>
                <div className="mt-6 space-y-4">
                    <Textarea
                        isInvalid={errorField.field === 'description'}
                        errorMessage={errorField?.message}
                        onChange={(e) => updateProviderData("description", e.target.value)}
                        value={providerData.description}
                        classNames={{
                            input: "w-full bg-white",
                            base: "w-full bg-white",
                            inputWrapper: "w-full bg-white ring-1 ring-slate-300 focus:none hover:none ",
                        }}
                        placeholder="Description du service" />
                    <Textarea
                        isInvalid={errorField.field === 'pricingDetails'}
                        errorMessage={errorField?.message}
                        onChange={(e) => updateProviderData("pricingDetails", e.target.value)}
                        value={providerData.pricingDetails}
                        classNames={{
                            input: "w-full bg-white",
                            base: "w-full bg-white",
                            inputWrapper: "w-full bg-white ring-1 ring-slate-300 focus:none hover:none ",
                        }}
                        placeholder="Informations tarifaires" />
                </div>
                <div className="flex justify-end mt-6 gap-3">
                    <Button
                        name={"PreviousStep"}
                        radius='full' size={"sm"} onPress={() => setActiveStep(1)} className="bg-tertiary  font-medium text-primary px-6 py-2">
                        Précédent
                    </Button>
                    <Button
                        name={"NextStep"}
                        radius='full' size={"sm"} onPress={NextStep} className="bg-primary  font-medium text-white px-6 py-2">
                        Suivant
                    </Button>
                </div>
            </CardBody>
        </Card >

    );
}



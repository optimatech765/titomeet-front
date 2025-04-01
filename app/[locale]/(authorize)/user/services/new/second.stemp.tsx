import { Avatar, Button, Card, CardBody, Textarea } from '@heroui/react';
import { Camera } from 'lucide-react';
import React from 'react';

export const SecondStemp = ({ setActiveStep }: { setActiveStep: (activeStep: number) => void }) => {
    return (

        <Card className=" mt-6 mx-14">
            <CardBody>
                <h3 className="text-lg font-semibold mb-4">Description et offres</h3>
                <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                        <Avatar alt="Avatar" className="w-full h-full rounded-full text-white" />
                        <label className="absolute bottom-0 right-0 bg-red-500 p-1 rounded-full cursor-pointer">
                            <Camera size={16} className="text-white" />
                            <input type="file" className="hidden" />
                        </label>
                    </div>
                    <p className="mt-2 text-gray-500">Photo de profil</p>
                </div>
                <div className="mt-6 space-y-4">
                    <Textarea
                        classNames={{
                            input: "w-full bg-white",
                            base: "w-full bg-white",
                            inputWrapper: "w-full bg-white ring-1 ring-slate-300 focus:none hover:none ",
                        }}
                        placeholder="Description du service" />
                    <Textarea
                        classNames={{
                            input: "w-full bg-white",
                            base: "w-full bg-white",
                            inputWrapper: "w-full bg-white ring-1 ring-slate-300 focus:none hover:none ",
                        }}
                        placeholder="Informations tarifaires" />
                </div>
                <div className="flex justify-end mt-6 gap-3">
                    <Button radius='full' size={"sm"} onPress={() => setActiveStep(1)} className="bg-tertiary  font-medium text-primary px-6 py-2">
                        Précédent
                    </Button>
                    <Button radius='full' size={"sm"} onPress={() => setActiveStep(3)} className="bg-primary  font-medium text-white px-6 py-2">
                        Suivant
                    </Button>
                </div>
            </CardBody>
        </Card >

    );
}



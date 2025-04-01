"use client"
import { useProvidersStore } from '@/stores/providers.store';
import { Button, Card, CardBody, Input } from '@heroui/react';
import { Info, Trash, Upload } from 'lucide-react';
import React, { useState } from 'react';

export const ThirdStep = ({ setActiveStep }: { setActiveStep: (activeStep: number) => void }) => {

    const [files, setFiles] = useState([
        { name: "Nomdudocument.pdf", size: "1.8 Mb" },
        { name: "Nomdudocument.pdf", size: "1.8 Mb" },
    ]);

    const removeFile = (index: number) => {
        setFiles(files.filter((_, i) => i !== index));
    };
    const { updateProviderData, providerData } = useProvidersStore();

    return (
        <Card className=" mt-6 mx-14">
            <CardBody>

                <h3 className="text-lg font-semibold mb-4 text-center">Documents & Justificatifs</h3>
                <div className="flex items-center text-secondary font-medium mb-2">
                    <Info size={18} className="mr-2" />
                    Liste des fichiers requis
                </div>
                <Input placeholder="Registre de commerce - IFU - Documents" className="mb-4"
                    onChange={(e) => updateProviderData("documents", e.target.value)}
                    value={providerData.documents}
                    classNames={{
                        input: "w-full bg-white",
                        base: "w-full bg-white",
                        inputWrapper: "w-full bg-white ring-1 ring-slate-300 focus:none hover:none ",
                    }}
                />
                <label className="border-2 justify-center border-dashed flex gap-3 bg-slate-200  border-gray-300 rounded-lg p-6 text-center text-gray-500 cursor-pointer">
                    <Upload size={24} className=" mb-2" />
                    Glissez-déposez vos fichiers ici ou cliquez pour les importer
                    <input type="file" multiple className="hidden" onChange={(e) => setFiles(e.target.files)} />
                </label>
                <div className="mt-4 space-y-2">
                    {files.map((file, index) => (
                        <div
                            key={index}
                            className="flex items-center ring-1 ring-slate-300 rounded-lg  md:w-1/3 justify-between p-3"
                        >
                            <span className="text-gray-700">{file.name} - {file.size}</span>
                            <button onClick={() => removeFile(index)} className="text-primary">
                                <Trash size={20} />
                            </button>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end mt-6 gap-3">
                    <Button radius='full' size={"sm"} onPress={() => setActiveStep(2)} className="bg-tertiary  font-medium text-primary px-6 py-2">
                        Précédent
                    </Button>
                    <Button radius='full' size={"sm"} className="bg-primary  font-medium text-white px-6 py-2">
                        Soumettre
                    </Button>
                </div>

            </CardBody>
        </Card>
    );
}



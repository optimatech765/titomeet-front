"use client"
import { assetsServices } from '@/services/assets/assets.services';
import { ProvidersServices } from '@/services/providers/providers.services';
import { useProvidersStore } from '@/stores/providers.store';
import { cleanResponse } from '@/utils/functions/other.functions';
import { Button, Card, CardBody, Input } from '@heroui/react';
import { Info, Trash, Upload } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

export const ThirdStep = ({ setActiveStep }: { setActiveStep: (activeStep: number) => void }) => {

    const [isLoading, setIsLoading] = useState(false);

    const [files, setFiles] = useState([
        { name: "Nomdudocument.pdf", size: "1.8 Mb" },
        { name: "Nomdudocument.pdf", size: "1.8 Mb" },
    ]);

    const removeFile = (index: number) => {
        setFiles(files.filter((_, i) => i !== index));
    };
    const { updateProviderData, providerData,setProviderData } = useProvidersStore();

    const uploadFile = async (file: File) => {

        const response = await assetsServices.getPresignUrl({
            fileName: "" + new Date().getTime() + file.name,
            fileType: file?.type
        });

        const { uploadUrl, fields, downloadUrl } = cleanResponse(response.data);

        const formData = new FormData()
        Object.entries(fields).forEach(([key, value]) => {
            formData.append(key, value as string)
        })

        formData.append("file", file)

        const uploadResponse = await fetch(uploadUrl, {
            method: "POST",
            body: formData,
        })

        if (uploadResponse.ok) {
            // Return the fileKey and type based on file
            return {
                fileKey: fields.key,
                type: file.type.includes("image") ? "image" : "pdf",
                downloadUrl: downloadUrl,
            }
        }

        return {
            fileKey: fields.key,
            type: file.type.includes("image") ? "image" : "pdf",
            downloadUrl: downloadUrl,
        }
    }

    const router = useRouter();


    const handleSubmitProvider = async () => {
        try {
            setIsLoading(true)
            const token = localStorage.getItem('accessToken');
            const providersServices = new ProvidersServices(token || "");

            const toastId = toast.loading("Enregistrement en cours...");

            const {downloadUrl} = await uploadFile(providerData.image);

            providersServices
                .addProviders({
                    name: providerData.name,
                    description: providerData.description,
                    image: downloadUrl,
                    addressId: providerData.addressId,
                    categoryId: providerData.categoryId,
                    email: providerData.email,
                    phoneNumber: providerData.phoneNumber,
                    website: providerData.website,
                    pricingDetails: providerData.pricingDetails,
                })
                .then(
                    (response) => {
                        const data = response.data;
                        console.log(data);
                        toast.update(toastId, {
                            render: "Enregistrement réussi",
                            type: "success",
                            isLoading: false,
                            autoClose: 5000,
                        });
                        setIsLoading(false);
                        setActiveStep(1);
                        setProviderData({})
                        router.push("/user/services");
                    },
                    (error) => {
                        console.log(error);
                        toast.update(toastId, {
                            render: "Erreur lors de l'enregistrement",
                            type: "error",
                            isLoading: false,
                            autoClose: 5000,
                        });
                        setIsLoading(false);
                    }
                );
        } catch (error) {

            console.error("Erreur lors de la récupération des détails :", error);
            toast.error("Erreur lors de l'enegistrement");
            setIsLoading(false);
        }
    }


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
                    <input type="file" multiple className="hidden" onChange={(e) => console.log(e.target.files)} />
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
                    <Button isLoading={isLoading} onPress={() => setActiveStep(2)} radius='full' size={"sm"} className="bg-tertiary  font-medium text-primary px-6 py-2">
                        Précédent
                    </Button>
                    <Button isLoading={isLoading} onPress={handleSubmitProvider} radius='full' size={"sm"} className="bg-primary  font-medium text-white px-6 py-2">
                        Soumettre
                    </Button>
                </div>

            </CardBody>
        </Card>
    );
}



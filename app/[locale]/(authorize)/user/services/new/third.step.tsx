/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { FilePreviewComponent } from '@/components/file.preview.component';
import { AssetsServices } from '@/services/assets/assets.services';
import { ProvidersServices } from '@/services/providers/providers.services';
import { InputErrorStore } from '@/stores/input.error.store';
import { useProvidersStore } from '@/stores/providers.store';
import { cleanResponse } from '@/utils/functions/other.functions';
import { ProviderValidator } from '@/utils/validator/provider.validator';
import { Button, Card, CardBody } from '@heroui/react';
import { Info, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

export const ThirdStep = ({ setActiveStep }: { setActiveStep: (activeStep: number) => void }) => {

    const [isLoading, setIsLoading] = useState(false);
    const { setMessageError } = InputErrorStore();

    const [files, setFiles] = useState([
        { name: "Nomdudocument.pdf", size: "1.8 Mb" },
        { name: "Nomdudocument.pdf", size: "1.8 Mb" },
    ]);

    const removeFile = (index: number) => {
        setFiles(files.filter((_, i) => i !== index));
    };
    const { updateProviderData, providerData, setProviderData } = useProvidersStore();

    const uploadFile = async (file: File) => {
        const token = localStorage?.getItem('accessToken') || "";
        const assetsServices = new AssetsServices(token);
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

            const { error, errorData } = ProviderValidator(providerData);

            if (error) {
                toast.error(errorData.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                });
                setMessageError(errorData)
                return;
            }
            else {


                setIsLoading(true)
                const token = localStorage.getItem('accessToken');
                const providersServices = new ProvidersServices(token || "");

                const toastId = toast.loading("Enregistrement en cours...");

                const { downloadUrl } = await uploadFile(providerData.image);

                const docs: any = [];
                const { downloadUrl: cniDownloadUrl, type: cniType } = await uploadFile(providerData.docs.cni);
                docs.push({ name: "Carte nationale d'identité", type: cniType, url: cniDownloadUrl });
                const { downloadUrl: ifuDownloadUrl, type: ifuType } = await uploadFile(providerData.docs.ifu);
                docs.push({ name: "Carte ifu", type: ifuType, url: ifuDownloadUrl });

                if (providerData.docs.rccm) {
                    const { downloadUrl: rccmDownloadUrl, type: rccmType } = await uploadFile(providerData.docs.rccm);
                    docs.push({ name: "Carte rccm", type: rccmType, url: rccmDownloadUrl });
                }

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
                        docs: docs
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
            }
        } catch (error) {

            console.error("Erreur lors de la récupération des détails :", error);
            toast.error("Erreur lors de l'enegistrement de la data");
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

                <FilePreviewComponent title={"Votre carte d'identité ou passeport*"}
                    onChange={(e) => updateProviderData("docs",
                        {
                            ...providerData.docs,
                            cni: e,

                        })} />

                <FilePreviewComponent title={"Votre IFU*"}
                    onChange={(e) => updateProviderData("docs",
                        {
                            ...providerData.docs,
                            ifu: e,
                        }
                    )}
                />
                <FilePreviewComponent title={"Votre RCCM"}
                    onChange={(e) => updateProviderData("docs",
                        {
                            ...providerData.docs,
                            rccm: e,
                        }
                    )}
                />

                <div className="mt-4 space-y-2">
                    {files.map((file, index) => (
                        <div
                            key={index}
                            className="flex items-center ring-1 ring-slate-300 rounded-lg  md:w-1/3 justify-between p-3"
                        >
                            <span className="text-gray-700">{file.name} - {file.size}</span>
                            <button name={"removeFile"} onClick={() => removeFile(index)} className="text-primary">
                                <Trash size={20} />
                            </button>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end mt-6 gap-3">
                    <Button name={"PreviousStep"} isLoading={isLoading} onPress={() => setActiveStep(2)} radius='full' size={"sm"} className="bg-tertiary  font-medium text-primary px-6 py-2">
                        Précédent
                    </Button>
                    <Button name={"Submit"} isLoading={isLoading} onPress={handleSubmitProvider} radius='full' size={"sm"} className="bg-primary  font-medium text-white px-6 py-2">
                        Soumettre
                    </Button>
                </div>

            </CardBody>
        </Card>
    );
}



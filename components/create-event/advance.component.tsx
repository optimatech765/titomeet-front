/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Input, Modal, ModalBody, ModalContent, Select, SelectItem, Textarea, useDisclosure } from '@heroui/react';
import React, { useState } from 'react';
import ImageInputComponent from '../image.input.component';
import { ServiceAddComponent } from './service.add.component';
import InputContainerComponent, { InputContainerComponent2 } from './input.container.component';
import { InputErrorStore } from '@/stores/input.error.store';
import { useEventsStore } from '@/stores/events.store';
import { InfoIcon } from 'lucide-react';

interface Pass {
    name: string;
    amount: string;
}

interface Service {
    serviceName: string;
    serviceAgent: string;
    serviceDescription: string;
}

const AdvanceComponent = () => {

    const { data: eventData, updateEventData } = useEventsStore();
    const { errorField } = InputErrorStore();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure();
    const [newPasses, setNewPasses] = useState<Pass>({
        name: "",
        amount: ""
    });

    const [newServices, setNewServices] = useState<Service>(
        {
            serviceName: "",
            serviceAgent: "",
            serviceDescription: "",
        }
    );

    // const addNewService = () => {
    //     const newServices = [...eventData?.services || []];
    //     updateEventData("services", [...newServices, newServices]);
    //     setNewServices({ serviceName: "", serviceAgent: "", serviceDescription: "" });
    //     onClose2();
    //     alert("Service ajouté avec succès");
    // }

    // const removeService = (index: number) => {
    //     updateEventData("services", eventData.services.filter((_, i) => i !== index));
    // }

    // const cancelledService = () => {
    //     setNewServices({ serviceName: "", serviceAgent: "", serviceDescription: "" });
    // }


    const addNewPass = () => {
        console.log(eventData.prices)
        const newPrices = [...eventData?.prices || []];
        updateEventData("prices", [...newPrices, newPasses]);
        setNewPasses({ name: "", amount: "" });
        onClose2();
        alert("Passe ajoutée avec succès");
    }

    const removePass = (index: number) => {
        if (eventData?.prices) {
            updateEventData("prices", eventData?.prices.filter((_, i) => i !== index));
        }

    }

    const cancelled = () => {
        setNewPasses({ name: "", amount: "" });
    }

    return (
        <div className={"border rounded-md border-[#00000026] p-6 flex flex-col gap-6 "}>
            <div className="flex-1">
                <InputContainerComponent2 title={"Description"} >
                    <Textarea
                        value={eventData.description}
                        onChange={(e) => updateEventData("description", e.target.value)}
                        isInvalid={errorField.field === 'description'}
                        errorMessage={errorField?.message}
                        className=" border-slate-300"
                        variant="bordered"
                        rows={5}
                        fullWidth
                        labelPlacement='outside-left'
                        classNames={{
                            mainWrapper: "flex-1 items-start",
                            base: "flex-1 items-start",

                        }}
                    />
                </InputContainerComponent2>
            </div>

            <div className='flex flex-wrap gap-4 justify-between'>
                <div>
                    <ImageInputComponent
                        title="Photo de couverture"
                        onChange={(e) => updateEventData("coverPicture", e)}

                    />
                    {errorField.field === 'coverPicture' && <p className="text-red-500 text-xs">{errorField?.message}</p>}
                </div>

                <div>
                    <ImageInputComponent
                        onChange={(e) => updateEventData("badge", e)}
                        title="Badge"
                    />
                    {errorField.field === 'badge'
                        && <p className="text-red-500 text-xs">{errorField?.message}</p>}
                </div>
            </div>

            {/* selection du type d'accès et du type de ticket */}
            <div className='flex flex-wrap gap-4 justify-between'>
                <div className='flex-1'>
                    <InputContainerComponent title={"Type d'accès"} >
                        <Select className=''
                            value={eventData?.accessType}
                            onChange={(e) => updateEventData("accessType", e.target.value)}
                            isInvalid={errorField.field === 'accessType'}
                            errorMessage={errorField?.message}
                            labelPlacement={"outside-left"}
                            onSelectionChange={(e) => {
                                console.log(e.anchorKey)
                                updateEventData("accessType", e.anchorKey)
                            }}
                            selectedKeys={[eventData?.accessType]}
                        >
                            <SelectItem key="FREE">Gratuit</SelectItem>
                            <SelectItem key="PAID">Payant</SelectItem>
                        </Select>
                    </InputContainerComponent>
                </div>
                <div className='flex-1 flex justify-end'>
                    {eventData?.accessType === "PAID" &&
                        <div className='md:w-1/2'>
                            <Button onPress={onOpen2} size='sm' className=' bg-secondary text-white px-14 w-full' radius='full'>
                                Ajouter un prix
                            </Button>
                        </div>
                    }



                </div>

            </div>


            {/* button pour ajouter services */}
            <div >
                <div className='w-1/2'>
                    <InputContainerComponent title={" Services disponibles"} >
                        <Button onPress={onOpen} size='sm' className=' bg-secondary text-white px-14 w-full' radius='full'>
                            Ajouter service
                        </Button>
                    </InputContainerComponent>
                </div>
            </div>

            <ServiceAddComponent />

            <ServiceAddComponent />


            {/* Ajout de prestataire */}
            <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} classNames={{ closeButton: 'text-primary' }}>
                <ModalContent >
                    {(onClose) => (
                        <>

                            <div className='px-6 pt-5 mb-2'>
                                <h3 className="text-2xl  font-semibold  text-center">
                                    Ajout de service
                                </h3>


                            </div>

                            <ModalBody>
                                <div className="space-y-3">
                                    <div className={"space-y-2"}>
                                        <label className='text-sm font-medium text-gray-700'>Services</label>
                                        <Select className=''

                                            // value={eventData?.accessType}
                                            // onChange={(e) => updateEventData("accessType", e.target.value)}
                                            // isInvalid={errorField.field === 'accessType'}
                                            // errorMessage={errorField?.message}

                                            onSelectionChange={(e) => {
                                                console.log(e.anchorKey)
                                                updateEventData("accessType", e.anchorKey)
                                            }}
                                            selectedKeys={[eventData?.accessType]}
                                        >
                                            <SelectItem key="Service 1">Service 1</SelectItem>
                                            <SelectItem key="Service 2">Service 2</SelectItem>
                                            <SelectItem key="Service 3">Service 3</SelectItem>
                                            <SelectItem key="Service 4">Service 4</SelectItem>
                                        </Select>
                                    </div>


                                    <div className={"space-y-2"}>
                                        <label className='text-sm font-medium text-gray-700'>Prestataires</label>
                                        <Select className=''

                                            // value={eventData?.accessType}
                                            // onChange={(e) => updateEventData("accessType", e.target.value)}
                                            // isInvalid={errorField.field === 'accessType'}
                                            // errorMessage={errorField?.message}
                                            labelPlacement={"outside"}
                                            onSelectionChange={(e) => {
                                                console.log(e.anchorKey)
                                                updateEventData("accessType", e.anchorKey)
                                            }}
                                            selectedKeys={[eventData?.accessType]}
                                        >
                                            <SelectItem key="Prestataire 1">Prestataire 1</SelectItem>
                                            <SelectItem key="Prestataire 2">Prestataire 2</SelectItem>
                                            <SelectItem key="Prestataire 3">Prestataire 3</SelectItem>
                                            <SelectItem key="Prestataire 4">Prestataire 4</SelectItem>
                                        </Select>
                                    </div>

                                    <div className={"space-y-2"} >
                                        <label className='text-sm font-medium  flex items-center text-primary'>
                                            <InfoIcon className='w-5 h-5 text-primary' />
                                            Informations</label>
                                        <Textarea
                                            readOnly={true}
                                            value={eventData.description}
                                            className=" border-slate-300"
                                            variant="bordered"
                                            rows={5}
                                            fullWidth
                                            classNames={{
                                                mainWrapper: "flex-1 items-start",
                                                base: "flex-1 items-start",

                                            }}
                                        />
                                    </div>


                                    <div className='flex gap-2 justify-between'>
                                        <div className="flex-1">
                                            <Button size='sm' className='flex-1 bg-[#FACCCF] text-primary px-14 w-full' radius='full'>
                                                Annuler
                                            </Button>
                                        </div>

                                        <div className="flex-1">
                                            <Button size='sm' className='flex-1 bg-primary text-white px-14 w-full' radius='full'>
                                                Ajouter
                                            </Button>
                                        </div>

                                    </div>
                                </div>
                            </ModalBody>

                        </>
                    )}
                </ModalContent>
            </Modal>


            {/* Ajouter un prix */}
            <Modal backdrop={"blur"} isOpen={isOpen2} onClose={onClose2} classNames={{ closeButton: 'text-primary' }}>
                <ModalContent >
                    {(onClose2) => (
                        <>

                            <div className='px-6 pt-5 mb-2'>
                                <h3 className="text-2xl  font-semibold  text-center">
                                    Ajout de prix
                                </h3>


                            </div>

                            <ModalBody>
                                <div className="space-y-3">
                                    <div className={"space-y-2"}>
                                        <label className='text-sm font-medium text-gray-700'>Nom du ticket</label>
                                        <Input
                                            value={newPasses.name}
                                            onChange={(e) => setNewPasses({ ...newPasses, name: e.target.value })}
                                            isInvalid={errorField.field === 'name'}
                                            errorMessage={errorField?.message}
                                            className='border-slate-300'
                                            variant='bordered'
                                            placeholder={"Prix"}
                                            fullWidth={true}


                                        />

                                    </div>

                                    <div className={"space-y-2"}>
                                        <label className='text-sm font-medium text-gray-700'>Prix</label>
                                        <Input
                                            type='number'
                                            value={newPasses?.amount}
                                            onChange={(e) => setNewPasses({ ...newPasses, amount: e.target.value })}
                                            isInvalid={errorField.field === 'amount'}
                                            errorMessage={errorField?.message}
                                            className='border-slate-300'
                                            variant='bordered'
                                            placeholder={"Prix"}
                                            fullWidth={true}


                                        />
                                    </div>

                                    <div className='flex gap-2 justify-between'>
                                        <div className="flex-1">
                                            <Button onPress={cancelled} size='sm' className='flex-1 bg-[#FACCCF] text-primary px-14 w-full' radius='full'>
                                                Annuler
                                            </Button>
                                        </div>

                                        <div className="flex-1">
                                            <Button onPress={addNewPass} size='sm' className='flex-1 bg-primary text-white px-14 w-full' radius='full'>
                                                Ajouter
                                            </Button>
                                        </div>

                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </div>
    );
}

export default AdvanceComponent;

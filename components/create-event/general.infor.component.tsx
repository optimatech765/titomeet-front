/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker, Input, Select, SelectItem, TimeInput } from '@heroui/react';
import { Timer } from 'lucide-react';
import React from 'react';
import InputContainerComponent from './input.container.component';
import { useEventsStore } from '@/stores/events.store';
import { InputErrorStore } from '@/stores/input.error.store';

const GeneralInforComponent = () => {
    const { data: eventData, updateEventData } = useEventsStore();
    const errorFields = InputErrorStore((state: any) => state.errorField);

    return (
        <div className={"border rounded-md border-[#00000026] p-6 "}>
            <div className={"flex flex-col md:grid grid-cols-1 md:gap-6 md:grid-cols-2"}>

                <InputContainerComponent title={"Nom de l'événement"} >
                    <Input
                        value={eventData?.name}
                        onChange={(e) => updateEventData("name", e.target.value)}
                        isInvalid={errorFields.field === 'name'}
                        errorMessage={errorFields?.message}
                        placeholder={"Nom de l'événement"}
                        labelPlacement={"outside-left"}
                        className='border-slate-300'
                        fullWidth={true}
                        classNames={{
                            "mainWrapper": "flex-1",
                        }}
                        variant={"bordered"}
                    />
                </InputContainerComponent>

                <InputContainerComponent title={"Catégorie"} >
                    <Select
                        value={[...eventData?.categories]}
                        onChange={(e) => updateEventData("categories", e.target.value)}
                        isInvalid={errorFields.field === 'categories'}
                        errorMessage={errorFields?.message}
                        className='border-slate-300'
                        variant='bordered'
                        // label={"Catégorie"}
                        fullWidth={true}
                        labelPlacement={"outside-left"}
                    >
                        <SelectItem key="1">Hello</SelectItem>
                        <SelectItem key="2">World</SelectItem>
                        <SelectItem key="3">Foo</SelectItem>
                    </Select>
                </InputContainerComponent>

                <InputContainerComponent title={"Date de début"} >
                    <DatePicker
                        value={eventData?.startDate as any}
                        onChange={(e) => updateEventData("startDate", e)}
                        isInvalid={errorFields.field === 'startDate'}
                        errorMessage={errorFields?.message}
                        selectorButtonPlacement={"start"}
                        className='border-slate-300'
                        variant='bordered'
                        // label={"Date de début"}
                        labelPlacement={"outside-left"}
                        fullWidth={true}

                    />
                </InputContainerComponent>

                <InputContainerComponent title={"Date de fin"} >
                    <DatePicker
                        value={eventData?.endDate as any}
                        onChange={(e) => updateEventData("endDate", e)}
                        isInvalid={errorFields.field === 'endDate'}
                        errorMessage={errorFields?.message}
                        selectorButtonPlacement={"start"}
                        className='border-slate-300'
                        variant='bordered'
                        labelPlacement={"outside-left"}
                        fullWidth={true}
                    />
                </InputContainerComponent>

                <InputContainerComponent title={"Heure de début"} >
                    <TimeInput
                        value={eventData?.startTime}
                        onChange={(e) => updateEventData("startTime", e)}
                        isInvalid={errorFields.field === 'startTime'}
                        errorMessage={errorFields?.message}
                        className='border-slate-300'
                        variant='bordered'
                        labelPlacement={"outside-left"}
                        startContent={<Timer />}
                        fullWidth={true}
                    />
                </InputContainerComponent>

                <InputContainerComponent title={"Heure de fin"} >
                    <TimeInput
                        value={eventData?.endTime}
                        onChange={(e) => updateEventData("endTime", e)}
                        isInvalid={errorFields.field === 'endTime'}
                        errorMessage={errorFields?.message}
                        className='border-slate-300'
                        variant='bordered'
                        labelPlacement={"outside-left"}
                        startContent={<Timer />}
                        fullWidth={true}
                    />
                </InputContainerComponent>

                <InputContainerComponent title={"Lieu"} >
                    <Input
                        value={eventData?.addressId}
                        onChange={(e) => updateEventData("addressId", e.target.value)}
                        isInvalid={errorFields.field === 'addressId'}
                        errorMessage={errorFields?.message}
                        className='border-slate-300'
                        variant='bordered'
                        placeholder={"Lieu"}
                        labelPlacement={"outside-left"}
                        fullWidth={true}
                        classNames={{
                            "mainWrapper": "flex-1"
                        }}
                    />
                </InputContainerComponent>

                <InputContainerComponent title={"Adresse"} >
                    <Input

                        className='border-slate-300'
                        variant='bordered'
                        placeholder={"Adresse"}
                        labelPlacement={"outside-left"}
                        fullWidth={true}
                        classNames={{
                            "mainWrapper": "flex-1"

                        }}
                    />
                </InputContainerComponent>

                <InputContainerComponent title={"Nombre de place"} >
                    <Input
                        value={'' + eventData?.capacity}
                        onChange={(e) => updateEventData("capacity", e.target.value)}
                        isInvalid={errorFields.field === 'capacity'}
                        errorMessage={errorFields?.message}
                        className='border-slate-300'
                        variant='bordered'
                        type={"number"}
                        placeholder={"Nombre de place"}
                        labelPlacement={"outside-left"}
                        fullWidth={true}
                        classNames={{
                            "mainWrapper": "flex-1"
                        }}
                    />
                </InputContainerComponent>

            </div>
        </div >
    );
}

export default GeneralInforComponent;

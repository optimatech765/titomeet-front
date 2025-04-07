/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker, Input, TimeInput } from '@heroui/react';
import { Timer } from 'lucide-react';
import React, { useEffect } from 'react';
import InputContainerComponent from './input.container.component';
import { useEventsStore } from '@/stores/events.store';
import { InputErrorStore } from '@/stores/input.error.store';
import EventCategorieSelectorComponent from '../selectors/event.categorie.selector.component';
import { AddressSelector } from '../selectors/address.selector';

const GeneralInforComponent = () => {
    const { data: eventData, updateEventData } = useEventsStore();
    const errorFields = InputErrorStore((state: any) => state.errorField);

    useEffect(() => {
        console.log(eventData)
    }, [eventData]);
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
                    <EventCategorieSelectorComponent
                        value={eventData?.categories ? eventData?.categories?.split(",") : []}
                        onChange={(e: any) => updateEventData("categories", e)} />
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
                        hideTimeZone
                        hourCycle={24}
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
                        hideTimeZone
                        hourCycle={24}
                    />
                </InputContainerComponent>

                <InputContainerComponent title={"Lieu"} >
                    <AddressSelector
                        value={eventData?.addressId}
                        onChange={(e) => updateEventData("addressId", e)}
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

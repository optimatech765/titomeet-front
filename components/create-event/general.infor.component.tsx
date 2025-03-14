import { DatePicker, Input, Select, SelectItem, TimeInput } from '@heroui/react';
import { Timer } from 'lucide-react';
import React from 'react';
import InputContainerComponent from './input.container.component';

const GeneralInforComponent = () => {
    return (
        <div className={"border rounded-md border-[#00000026] p-6 "}>
            <div className={"flex flex-col md:grid grid-cols-1 md:gap-6 md:grid-cols-2"}>
                
                <InputContainerComponent title={"Nom de l'événement"} >
                    <Input
                        // label={"Nom de l'événement"}
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
                        className='border-slate-300'
                        variant='bordered'
                        // label={"Catégorie"}
                        fullWidth={true}
                        labelPlacement={"outside-left"}>
                        <SelectItem value="1">Hello</SelectItem>
                        <SelectItem value="2">World</SelectItem>
                        <SelectItem value="3">Foo</SelectItem>
                    </Select>
                </InputContainerComponent>

                <InputContainerComponent title={"Date de début"} >
                    <DatePicker
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
                        selectorButtonPlacement={"start"}
                        className='border-slate-300'
                        variant='bordered'
                        labelPlacement={"outside-left"}
                        fullWidth={true}
                    />
                </InputContainerComponent>

                <InputContainerComponent title={"Heure de début"} >
                    <TimeInput
                        className='border-slate-300'
                        variant='bordered'
                        labelPlacement={"outside-left"}
                        startContent={<Timer />}
                        fullWidth={true}
                    />
                </InputContainerComponent>

                <InputContainerComponent title={"Heure de fin"} >
                    <TimeInput
                        className='border-slate-300'
                        variant='bordered'
                        labelPlacement={"outside-left"}
                        startContent={<Timer />}
                        fullWidth={true}
                    />
                </InputContainerComponent>

                <InputContainerComponent title={"Lieu"} >
                    <Input
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

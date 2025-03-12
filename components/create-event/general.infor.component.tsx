import { DatePicker, Input, Select, SelectItem, TimeInput } from '@heroui/react';
import { Timer } from 'lucide-react';
import React from 'react';

const GeneralInforComponent = () => {
    return (
        <div className={"border rounded-md border-[#00000026] p-6 "}>
            <div className={"flex flex-col md:grid grid-cols-1 md:gap-6 md:grid-cols-2"}>
                <Input
                    label={"Nom de l'événement"}
                    placeholder={"Nom de l'événement"}
                    labelPlacement={"outside-left"}
                    className='border-slate-300'
                    fullWidth={true}
                    classNames={{
                        "mainWrapper": "flex-1",
                    }}
                    variant={"bordered"}
                />

                <Select
                    className='border-slate-300'
                    variant='bordered'
                    label={"Catégorie"}
                    fullWidth={true}
                    labelPlacement={"outside-left"}>
                    <SelectItem value="1">Hello</SelectItem>
                    <SelectItem value="2">World</SelectItem>
                    <SelectItem value="3">Foo</SelectItem>
                </Select>

                <DatePicker
                    selectorButtonPlacement={"start"}
                    className='border-slate-300'
                    variant='bordered'
                    label={"Date de début"}
                    labelPlacement={"outside-left"}
                    fullWidth={true}

                />

                <DatePicker
                    selectorButtonPlacement={"start"}
                    className='border-slate-300'
                    variant='bordered'
                    label={"Date de fin"}
                    labelPlacement={"outside-left"}
                    fullWidth={true}
                />

                <TimeInput
                    className='border-slate-300'
                    variant='bordered'
                    label={"Heure de début"}
                    labelPlacement={"outside-left"}
                    startContent={<Timer />}
                    fullWidth={true}
                />

                <TimeInput
                    className='border-slate-300'
                    variant='bordered'
                    label={"Heure de fin"}
                    labelPlacement={"outside-left"}
                    startContent={<Timer />}
                    fullWidth={true}
                />

                <Input
                    className='border-slate-300'
                    variant='bordered'
                    label={"Lieu"}
                    placeholder={"Lieu"}
                    labelPlacement={"outside-left"}
                    fullWidth={true}
                    classNames={{
                        "mainWrapper": "flex-1"
                    }}
                />

                <Input
                    className='border-slate-300'
                    variant='bordered'
                    label={"Adresse"}
                    placeholder={"Adresse"}
                    labelPlacement={"outside-left"}
                    fullWidth={true}
                    classNames={{
                        "mainWrapper": "flex-1"

                    }}
                />

                <Input
                    className='border-slate-300'
                    variant='bordered'
                    type={"number"}
                    label={"Nombre de place"}
                    placeholder={"Nombre de place"}
                    labelPlacement={"outside-left"}
                    fullWidth={true}
                    classNames={{
                        "mainWrapper": "flex-1"
                    }}
                />
            </div>
        </div>
    );
}

export default GeneralInforComponent;

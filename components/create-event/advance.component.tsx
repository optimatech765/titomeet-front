import { Button, Select, SelectItem, Textarea } from '@heroui/react';
import React from 'react';
import ImageInputComponent from '../image.input.component';
import { ServiceAddComponent } from './service.add.component';

const AdvanceComponent = () => {
    return (
        <div className={"border rounded-md border-[#00000026] p-6 flex flex-col gap-6 "}>
            <div className="flex-1">
                <Textarea
                    className=" border-slate-300"
                    label="Description"
                    placeholder="Enter your description"
                    variant="bordered"
                    rows={5}
                    fullWidth
                    labelPlacement='outside-left'
                    classNames={{
                        mainWrapper: "flex-1 items-start",
                        base: "flex-1 items-start",

                    }}
                />
            </div>

            <div className='flex flex-wrap gap-4 justify-between'>
                <div>
                    <ImageInputComponent title="Photo de couverture" />
                </div>
                <div>
                    <ImageInputComponent title="Badge" />
                </div>
            </div>
            <div className="">
                <Select label="Type d'accès" className='md:w-1/3' labelPlacement={"outside-left"} >
                    <SelectItem value="1">Gratuit</SelectItem>
                    <SelectItem value="2">Payant</SelectItem>
                </Select>
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <label className="block text-sm font-medium text-gray-700">
                        Services disponibles
                    </label>
                    <Button size='sm' className=' bg-secondary text-white px-14' radius='full'>
                        Ajouter service
                    </Button>
                </div>
            </div>

            <ServiceAddComponent />

            <ServiceAddComponent />

        </div>
    );
}

export default AdvanceComponent;

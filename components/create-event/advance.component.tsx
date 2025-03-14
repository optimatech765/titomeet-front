import { Button, Select, SelectItem, Textarea } from '@heroui/react';
import React from 'react';
import ImageInputComponent from '../image.input.component';
import { ServiceAddComponent } from './service.add.component';
import InputContainerComponent, { InputContainerComponent2 } from './input.container.component';

const AdvanceComponent = () => {
    return (
        <div className={"border rounded-md border-[#00000026] p-6 flex flex-col gap-6 "}>
            <div className="flex-1">
                <InputContainerComponent2 title={"Description"} >
                    <Textarea
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
                    <ImageInputComponent title="Photo de couverture" />
                </div>
                <div>
                    <ImageInputComponent title="Badge" />
                </div>
            </div>

            <div className='w-1/2'>
                <InputContainerComponent title={"Type d'accès"} >
                    <Select className='' labelPlacement={"outside-left"} >
                        <SelectItem value="1">Gratuit</SelectItem>
                        <SelectItem value="2">Payant</SelectItem>
                    </Select>
                </InputContainerComponent>
            </div>


            <div >
                <div className='w-1/2'>
                    <InputContainerComponent title={" Services disponibles"} >
                        <Button size='sm' className=' bg-secondary text-white px-14 w-full' radius='full'>
                            Ajouter service
                        </Button>
                    </InputContainerComponent>
                </div>
            </div>

            <ServiceAddComponent />

            <ServiceAddComponent />

        </div>
    );
}

export default AdvanceComponent;

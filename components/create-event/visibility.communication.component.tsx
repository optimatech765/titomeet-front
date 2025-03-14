import { cn, Switch, Textarea } from '@heroui/react';
import { Select, SelectItem } from '@heroui/select';
import React from 'react';
import InputContainerComponent, { InputContainerComponent2 } from './input.container.component';

const VisibilityCommunicationComponent = () => {
    return (
        <div className={"border rounded-md border-[#00000026] p-6 flex  flex-col gap-6 "}>

            <div className="flex justify-between items-center">
                <div className='w-1/2'>
                    <InputContainerComponent title={"Visibilité de l’évènement"} >
                        <Select labelPlacement={"outside-left"} >
                            <SelectItem value="1">Public</SelectItem>
                            <SelectItem value="2">Privé</SelectItem>
                        </Select>
                    </InputContainerComponent>
                </div>


                <Switch
                    color="success"
                    size='sm'
                    classNames={{
                        base: cn(
                            "inline-flex gap-3 flex-row-reverse w-full max-w-md  items-center",

                        )
                    }}
                    className='md:w-1/3' >Création du groupe
                </Switch>
            </div>

            <div className="flex-1">
                <InputContainerComponent2 title={"Tags de recherche"} >
                    <Textarea
                        className=" border-slate-300"
                        placeholder="Tague"
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

        </div>
    );
}

export default VisibilityCommunicationComponent;

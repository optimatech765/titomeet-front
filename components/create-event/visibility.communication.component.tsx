import { cn, Switch, Textarea } from '@heroui/react';
import { Select, SelectItem } from '@heroui/select';
import React from 'react';

const VisibilityCommunicationComponent = () => {
    return (
        <div className={"border rounded-md border-[#00000026] p-6 flex  flex-col gap-6 "}>

            <div className="flex justify-between items-center">
                <Select label="Visibilité de l’évènement" className='md:w-1/3' labelPlacement={"outside-left"} >
                    <SelectItem value="1">Public</SelectItem>
                    <SelectItem value="2">Privé</SelectItem>
                </Select>

                <Switch
                    color="success"
                    size='sm'
                    classNames={{
                        base: cn(
                            "inline-flex gap-3 flex-row-reverse w-full max-w-md  items-center",

                        )
                    }}
                    className='md:w-1/3' >Création du groupe</Switch>
            </div>

            <div className="flex-1">
                <Textarea
                    className=" border-slate-300"
                    label="Tags de recherche"
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
            </div>

        </div>
    );
}

export default VisibilityCommunicationComponent;

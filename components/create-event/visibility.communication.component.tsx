
import React, { useEffect } from 'react';
import { InputContainerComponent2 } from './input.container.component';
import { useEventsStore } from '@/stores/events.store';
import { InputErrorStore } from '@/stores/input.error.store';
import { TagTextarea } from '../tague.input.component';

const VisibilityCommunicationComponent = () => {
    const { data: eventData, updateEventData } = useEventsStore();
    const { errorField } = InputErrorStore();

    useEffect(() => {
        updateEventData("visibility", "PUBLIC")
    }, [])

    return (
        <div className={"border rounded-md border-[#00000026] p-6 flex  flex-col gap-6 "}>

            {/* <div className="flex justify-between items-center">
                <div className='w-1/2'>
                    <InputContainerComponent title={"Visibilité de l’évènement"} >
                        <Select
                            value={eventData?.visibility}
                            onChange={(e) => updateEventData("visibility", e.target.value)}
                            isInvalid={errorField.field === 'visibility'}
                            errorMessage={errorField?.message}
                            labelPlacement={"outside-left"}
                            selectedKeys={[eventData?.visibility]}
                        >
                            <SelectItem key="PUBLIC">Public</SelectItem>
                            <SelectItem key="PRIVATE">Privé</SelectItem>
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
            </div> */}

            <div className="flex-1">
                <InputContainerComponent2 title={"Tags de recherche"} >
                    <TagTextarea
                        maxTags={20}
                        tags={eventData?.tags || []}
                        onChange={(value) => updateEventData("tags", value)}
                    />
                    {errorField.field === 'tags' && <p className="text-red-500 text-xs">{errorField?.message}</p>}

                </InputContainerComponent2>

            </div>

        </div>
    );
}

export default VisibilityCommunicationComponent;

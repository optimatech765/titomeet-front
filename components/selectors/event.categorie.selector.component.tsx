/* eslint-disable @typescript-eslint/no-explicit-any */
import { EventCategorieStore } from '@/stores/event.categories.store';
import { InputErrorStore } from '@/stores/input.error.store';
import { CategorieDto } from '@/utils/dto/categorie.dto';
import { Select, SelectItem } from '@heroui/react';
import React, { useEffect } from 'react';

type EventCategorieSelectorComponent = {
    value: any;
    onChange: any;
}


const EventCategorieSelectorComponent = ({ value, onChange }: EventCategorieSelectorComponent) => {
    const { errorField } = InputErrorStore();
    const { dataList, fetchCategoriesList, isLoading } = EventCategorieStore()

    useEffect(() => {
        fetchCategoriesList()
    }, []);
    return (
        <div>
            <Select
                isLoading={isLoading}
                selectionMode="multiple"
                isMultiline={true}
                items={dataList.map((item: CategorieDto) => ({ label: item.name, key: item.id }))}
                value={[...value]}
                onChange={(e) => onChange(e.target.value)}
                isInvalid={errorField.field === 'categories'}
                errorMessage={errorField?.message}
                className='border-slate-300'
                variant='bordered'
                // label={"Catégorie"}
                fullWidth={true}
                labelPlacement={"outside-left"}
            >
                {(animal) => <SelectItem>{animal.label}</SelectItem>}

            </Select>
        </div>
    );
}

export default EventCategorieSelectorComponent;

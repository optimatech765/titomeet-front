/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputErrorStore } from '@/stores/input.error.store';
import { Select, SelectItem } from '@heroui/react';
import React, { useEffect } from 'react';

type EventCategorieSelectorComponent = {
    value: any;
    onChange: any;
}


const EventCategorieSelectorComponent = ({ value, onChange }: EventCategorieSelectorComponent) => {
    const { errorField } = InputErrorStore();

    useEffect(() => {

    }, []);
    return (
        <div>
            <Select
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
                <SelectItem key="1">Hello</SelectItem>
                <SelectItem key="2">World</SelectItem>
                <SelectItem key="3">Foo</SelectItem>
            </Select>
        </div>
    );
}

export default EventCategorieSelectorComponent;

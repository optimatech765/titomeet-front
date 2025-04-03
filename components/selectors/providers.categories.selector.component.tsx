/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputErrorStore } from '@/stores/input.error.store';
import { useProvidersStore } from '@/stores/providers.store';
import { CategorieDto } from '@/utils/dto/categorie.dto';
import { Select, SelectItem } from '@heroui/react';
import React, { useEffect } from 'react';

type ProviderCategorieSelectorType = {
    value: any;
    onChange: any;
}


export const ProvidersCategoriesSelectorComponent = ({ value, onChange }: ProviderCategorieSelectorType) => {
    const { errorField } = InputErrorStore();
    const { providersCategoriesList, fetchProvidersCategoriesList, isLoading } = useProvidersStore()

    useEffect(() => {
        fetchProvidersCategoriesList()
    }, []);
    return (
        <div>
            <Select
                isLoading={isLoading}
                selectionMode="multiple"
                isMultiline={true}
                items={providersCategoriesList.map((item: CategorieDto) => ({ label: item.name, key: item.id }))}
                value={[...value]}
                onChange={(e) => onChange(e.target.value)}
                isInvalid={errorField.field === 'categoryId'}
                errorMessage={errorField?.message}
                className='border-slate-300'
                variant='bordered'
                // label={"Catégorie"}
                fullWidth={true}
                labelPlacement={"outside-left"}
                selectedKeys={value}
            >
                {(animal) => <SelectItem>{animal.label}</SelectItem>}

            </Select>
        </div>
    );
}


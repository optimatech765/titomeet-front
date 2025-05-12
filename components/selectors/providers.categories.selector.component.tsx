/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputErrorStore } from '@/stores/input.error.store';
import { useProvidersStore } from '@/stores/providers.store';
import { CategorieDto } from '@/utils/dto/categorie.dto';
import { Select, SelectItem } from '@heroui/react';
import { LayoutGrid } from 'lucide-react';
import React, { useEffect } from 'react';

type ProviderCategorieSelectorType = {
    value: any;
    onChange: any;
    withIcon?: boolean;
    isMultiple?: boolean
}


export const ProvidersCategoriesSelectorComponent = ({ value, onChange, withIcon = false, isMultiple = true }: ProviderCategorieSelectorType) => {
    const { errorField } = InputErrorStore();
    const { providersCategoriesList, fetchProvidersCategoriesList, isLoading } = useProvidersStore()

    useEffect(() => {
        fetchProvidersCategoriesList()
    }, []);

    return (
        <div>
            <Select
        
                startContent={withIcon && <LayoutGrid fill='currentColor' className={"text-primary "} />}
                isLoading={isLoading}
                selectionMode={isMultiple ? "multiple" : "single"}
                isMultiline={isMultiple}
                items={providersCategoriesList.map((item: CategorieDto) => ({ label: item.name, key: item.id }))}
                value={[...value]}
                onChange={(e) => onChange(e.target.value)}
                isInvalid={errorField.field === 'categoryId'}
                errorMessage={errorField?.message}
                variant={withIcon?"flat":"bordered"}
                fullWidth={true}
                labelPlacement={"outside-left"}
                selectedKeys={value}
                className=''
            >
                {(animal) => <SelectItem>{animal.label}</SelectItem>}

            </Select>
        </div>
    );
}


/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputErrorStore } from '@/stores/input.error.store';
import { useProvidersStore } from '@/stores/providers.store';
import { CategorieDto } from '@/utils/dto/categorie.dto';
import { Select, SelectItem } from '@heroui/react';
import { LayoutGrid } from 'lucide-react';
import React, { useEffect } from 'react';

type ProviderSelectorType = {
    value: any;
    onChange: any;
    withIcon?: boolean;
    isMultiple?: boolean
}


export const ProvidersSelectorComponent = ({ value, onChange, withIcon = false, isMultiple = false }: ProviderSelectorType) => {
    const { errorField } = InputErrorStore();
    const { dataList, fetchProvidersList, isLoading } = useProvidersStore()

    useEffect(() => {
        fetchProvidersList()
    }, []);

    return (
        <div>
            <Select

                startContent={withIcon && <LayoutGrid fill='currentColor' className={"text-primary "} />}
                isLoading={isLoading}
                selectionMode={isMultiple ? "multiple" : "single"}
                isMultiline={isMultiple}
                items={dataList.map((item: CategorieDto) => ({ label: item.name, key: item.id }))}
                value={[...value]}
                onChange={(e) => onChange(e.target.value)}
                isInvalid={errorField.field === 'categoryId'}
                errorMessage={errorField?.message}
                // className='border-slate-300'
                // classNames={{
                //     base: "w-full bg-white border-slate-300",
                //     trigger: "w-full bg-white border-slate-300",

                // }}
                // variant='bordered'
                // label={"Catégorie"}
                variant={withIcon ? "flat" : "bordered"}
                fullWidth={true}
                labelPlacement={"outside-left"}
                selectedKeys={value}
            >
                {(animal) => <SelectItem>{animal.label}</SelectItem>}

            </Select>
        </div>
    );
}


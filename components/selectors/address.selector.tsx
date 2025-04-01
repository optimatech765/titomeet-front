/* eslint-disable @typescript-eslint/no-explicit-any */
import { AddressStore } from '@/stores/address.store';
import { InputErrorStore } from '@/stores/input.error.store';
import { Autocomplete, AutocompleteItem } from '@heroui/react';
import React, { useEffect } from 'react';

export const AddressSelector = ({ value, onChange }: { value: string, onChange: (a: any) => void }) => {
    const { errorField } = InputErrorStore();
    const { fetchAddressList, dataList, isLoading } = AddressStore();
    const lieux = dataList.map((item) => ({ key: item.id, label: item.name }));
    const [searchValue, setSearchValue] = React.useState("");
   

    useEffect(() => {
        fetchAddressList(searchValue);
    }, [searchValue]);

   

    return (
        <div>
            <Autocomplete
                items={lieux}
                inputValue={searchValue}
                onInputChange={setSearchValue}
                isInvalid={errorField.field === 'addressId'}
                onSelectionChange={(e) => {
                    console.log(e);
                    onChange(e);
                }}
                errorMessage={errorField?.message}
                isLoading={isLoading}
                className="max-w-xs"
                defaultItems={lieux}
                defaultSelectedKey={value}
                placeholder="Lieu"  
            >
                {(item) => <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>}
            </Autocomplete>
        </div>
    );
}

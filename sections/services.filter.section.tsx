/* eslint-disable @typescript-eslint/no-explicit-any */
import { AddressSelector } from '@/components/selectors/address.selector';
import { ProvidersCategoriesSelectorComponent } from '@/components/selectors/providers.categories.selector.component';
import { Button, Input, Select, SelectItem } from '@heroui/react';
import { Search, Star } from 'lucide-react';
import React, { useState } from 'react';

const ServicesFilterSection = () => {

    const [filterData, setfilterData] = useState({
        searchValue: "",
        categoryId: "",
        addressId: "",
        isFavorite: false,
        accessType: "FREE",
    });

    const handleChange = (key: string, value: any) => {
        setfilterData((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    }

    return (
        <div className='md:flex max-w-4xl mx-auto space-y-2 md:space-y-0 md:flex-row gap-4 items-center min-h-[93px] bg-hero-pattern  rounded-md p-3'>

            <div className='flex-1'>
                <Input
                    startContent={<Search className={"text-primary "} />}
                    placeholder="Rechercher"

                    onChange={(e) => handleChange("searchValue", e.target.value)}
                    value={filterData.searchValue}
                    fullWidth
                />
            </div>

            <div className='flex-1'>
                <ProvidersCategoriesSelectorComponent
                    isMultiple={false}
                    withIcon={true}
                    onChange={(e: any) => handleChange("categoryId", e)}
                    value={filterData?.categoryId ? filterData?.categoryId?.split(",") : []}
                />
            </div>


            <div className='flex-1'>
                <AddressSelector onChange={(e) => handleChange("addressId", e)} value={filterData.addressId} />
            </div>


            <div className='flex-1'>
                <Select

                    placeholder="Note"
                    startContent={<Star className={" text-primary"} fill='#ee3540' />}
                    onChange={(e) => handleChange("isFavorite", e.target.value)}
                    selectedKeys={filterData.isFavorite ? ["all"] : ["events"]}
                >
                    <SelectItem key="all">Mal noté</SelectItem>
                    <SelectItem key="events">Mieux noté</SelectItem>
                    <SelectItem key="places">Bien noté</SelectItem>
                </Select>
            </div>

            <div>
                <Button isIconOnly className="bg-white hidden md:block text-primary p-3 hover:bg-primary hover:text-white">
                    <Search className="w-4 h-4 " />
                    <span className="md:hidden">Rechercher</span>
                </Button>
                <Button className="md:hidden flex w-full text-lg bg-secondary text-white  p-3 hover:bg-primary hover:text-white">
                    <Search className="w-4 h-4 " />
                    <span className="">Rechercher</span>
                </Button>

            </div>


        </div>
    );
}

export default ServicesFilterSection;

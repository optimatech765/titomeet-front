import { Input, Select, SelectItem } from '@heroui/react';
import { LayoutDashboard, LayoutGrid, Search } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export const FilterSection = () => {
    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>

            <Input
                startContent={<Search className={"text-primary "} />}
                placeholder="Rechercher"
                radius='full'
            />

            <Select
                radius='full'
                placeholder="Distance"
                startContent={<Image src={"/icon/distance.png"} height={25} width={25} alt={"distance"} className={"text-primary "} />}
            >
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="events">Évènements</SelectItem>
                <SelectItem value="places">Lieux</SelectItem>
            </Select>

            <Select
                radius='full'
                placeholder="Centre d'intérêt"
                startContent={<LayoutGrid fill='currentColor' className={"text-primary "} />}
            >
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="events">Évènements</SelectItem>
                <SelectItem value="places">Lieux</SelectItem>
            </Select>
        </div>
    );
}



import { Button, Input, Select, SelectItem } from '@heroui/react';
import { LayoutGrid, MapPin, Search, SearchIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export const FilterSection = () => {
    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-5'>

            <Input
                className={"col-span-2"}
                startContent={<Search className={"text-primary "} />}
                placeholder="Rechercher"
                radius='full'
                width={300}
            />

            <Select
                className={"col-span-1"}
                radius='full'
                placeholder="Distance"
                startContent={<Image src={"/icon/distance.png"} height={25} width={25} alt={"distance"} className={"text-primary "} />}
            >
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="events">Évènements</SelectItem>
                <SelectItem value="places">Lieux</SelectItem>
            </Select>

            <Select
                className={"col-span-2"}
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


export const FilterSection2 = () => {
    return (
        <div className='flex mx-auto flex-col md:flex-row gap-4 items-center min-h-[93px] bg-hero-pattern max-w-5xl rounded-md p-3'>

            <Input
                startContent={<Search className={"text-primary "} />}
                placeholder="Rechercher"
                radius='full'
            />
            <Select
                radius='full'
                placeholder="Centre d'intérêt"
                startContent={<LayoutGrid fill='currentColor' className={"text-primary "} />}
            >
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="events">Évènements</SelectItem>
                <SelectItem value="places">Lieux</SelectItem>
            </Select>

            <Input
                startContent={<MapPin className={"text-white "} fill='#ee3540' />}
                placeholder="Lieu"
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

            <Button isIconOnly className="bg-white hidden md:block text-primary rounded-full p-3 ml-2 hover:bg-primary hover:text-white">
                <SearchIcon className="w-4 h-4 " />
                <span className="md:hidden">Rechercher</span>
            </Button>
            <Button className="md:hidden flex w-full text-lg bg-secondary text-white rounded-full p-3 ml-2 hover:bg-primary hover:text-white">
                <SearchIcon className="w-4 h-4 " />
                <span className="">Rechercher</span>
            </Button>

        </div>
    );
}


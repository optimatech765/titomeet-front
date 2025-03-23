import { Button, Input, Select, SelectItem } from '@heroui/react';
import { LayoutGrid, MapPin, Search, Star } from 'lucide-react';
import React from 'react';

const ServicesFilterSection = () => {
    return (
        <div className='flex max-w-4xl mx-auto flex-col md:flex-row gap-4 items-center min-h-[93px] bg-hero-pattern  rounded-md p-3'>

            <Input
                startContent={<Search className={"text-primary "} />}
                placeholder="Rechercher"
                radius='full'
            />
            <Select
                radius='full'
                placeholder="Catégorie"
                startContent={<LayoutGrid fill='currentColor' className={"text-primary "} />}
            >
                <SelectItem key="all">Tous</SelectItem>
                <SelectItem key="events">Évènements</SelectItem>
                <SelectItem key="places">Lieux</SelectItem>
            </Select>

            <Input
                startContent={<MapPin className={"text-white "} fill='#ee3540' />}
                placeholder="Lieu"
                radius='full'
            />

            <Select
                radius='full'
                placeholder="Note"
                startContent={ <Star className={" text-primary"} fill='#ee3540' />}
            >
                <SelectItem key="all">Tous</SelectItem>
                <SelectItem key="events">Évènements</SelectItem>
                <SelectItem key="places">Lieux</SelectItem>
            </Select>

            <Button isIconOnly className="bg-white hidden md:block text-primary rounded-full p-3 ml-2 hover:bg-primary hover:text-white">
                <Search className="w-4 h-4 " />
                <span className="md:hidden">Rechercher</span>
            </Button>
            <Button className="md:hidden flex w-full text-lg bg-secondary text-white rounded-full p-3 ml-2 hover:bg-primary hover:text-white">
                <Search className="w-4 h-4 " />
                <span className="">Rechercher</span>
            </Button>

        </div>
    );
}

export default ServicesFilterSection;

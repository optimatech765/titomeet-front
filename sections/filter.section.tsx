

import { useScopedI18n } from '@/locales/client';
import { EventCategorieStore } from '@/stores/event.categories.store';
import { useEventsStore } from '@/stores/events.store';
import { CategorieDto } from '@/utils/dto/categorie.dto';
import { Button, Input, Select, SelectItem } from '@heroui/react';
import { LayoutGrid, MapPin, Search, SearchIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const distanceList = [
    { key: 1, label: '1 km' },
    { key: 5, label: '5 km' },
    { key: 10, label: '10 km' },
    { key: 15, label: '15 km' },
    { key: 20, label: '20 km' },
    { key: 25, label: '25 km' },
    { key: 30, label: '30 km' },
]
export const FilterSection = () => {

    const { fetchEventList } = useEventsStore();
    const { dataList, fetchCategoriesList, isLoading } = EventCategorieStore()
    const interetT = useScopedI18n('interet');
    const findT = useScopedI18n('find');
    const distanceT = useScopedI18n('distance');

    useEffect(() => {
        fetchCategoriesList()
    }, []);

    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-5'>

            <Input
                className={"col-span-2"}
                startContent={<Search className={"text-primary "} />}
                placeholder={findT("title")}
                radius='full'
                width={300}
                onChange={(e) => {
                    if (e.target.value === "") {
                        fetchEventList({ status: "PUBLISHED", startDate: new Date().toISOString().split("T")[0] })
                    } else {
                        fetchEventList({ search: e.target.value, status: "PUBLISHED" })
                    }
                }}
            />

            <Select
                items={distanceList}
                onChange={(e) => fetchEventList({ distance: e.target.value, status: "PUBLISHED" })}
                className={"col-span-1"}
                radius='full'
                placeholder={distanceT("title")}
                startContent={<Image src={"/icon/distance.png"} height={25} width={25} alt={"distance"} className={"text-primary "} />}
            >
                {(ditance) => <SelectItem>{ditance.label}</SelectItem>}
            </Select>

            <Select
                items={dataList.map((item: CategorieDto) => ({ label: item.name, key: item.id }))}
                onChange={(e) => fetchEventList({ categories: e.target.value, status: "PUBLISHED" })}
                isLoading={isLoading}
                className={"col-span-2"}
                radius='full'
                placeholder={interetT("title")}
                startContent={<LayoutGrid fill='currentColor' className={"text-primary w-6 h-6  "} />}

            >
                {(animal) => <SelectItem>{animal.label}</SelectItem>}
            </Select>
        </div>
    );
}


export const FilterSection2 = () => {

    const { fetchEventList } = useEventsStore();
    const [searchParameter, setSearchParameter] = useState({
        keyWord: "",
        localisation: ""
    });

    const handleFindEvent = () => {
        fetchEventList({ search: searchParameter.keyWord, status: "PUBLISHED" })
    }


    return (
        <div className='flex mx-auto flex-col md:flex-row gap-4 items-center min-h-[93px] bg-hero-pattern max-w-5xl rounded-md p-3'>

            <Input
                onClear={() => {
                    setSearchParameter({ keyWord: "", localisation: "" })
                    fetchEventList({ status: "PUBLISHED", startDate: new Date().toISOString().split("T")[0] })
                }}
                type='search'
                startContent={<Search className={"text-primary "} />}
                placeholder="Rechercher"
                radius='full'
                onChange={(e) => setSearchParameter({ ...searchParameter, keyWord: e.target.value })}
                value={searchParameter?.keyWord}
            />
            <Select
                radius='full'
                placeholder="Centre d'intérêt"
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
                placeholder="Distance"
                startContent={<Image src={"/icon/distance.png"} height={25} width={25} alt={"distance"} className={"text-primary "} />}
            >
                <SelectItem key="all">Tous</SelectItem>
                <SelectItem key="events">Évènements</SelectItem>
                <SelectItem key="places">Lieux</SelectItem>
            </Select>

            <Button name="Rechercher"
                onPress={handleFindEvent}
                isIconOnly className="bg-white hidden md:block text-primary rounded-full p-3 ml-2 hover:bg-primary hover:text-white">
                <SearchIcon className="w-4 h-4 " />
                <span className="md:hidden">Rechercher</span>
            </Button>
            <Button
                name="Rechercher"
                onPress={handleFindEvent}
                className="md:hidden flex w-full text-lg bg-secondary text-white rounded-full p-3 ml-2 hover:bg-primary hover:text-white">
                <SearchIcon className="w-4 h-4 " />
                <span className="">Rechercher</span>
            </Button>

        </div>
    );
}


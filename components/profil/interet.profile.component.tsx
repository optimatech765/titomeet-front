/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppContext } from '@/context';
import { useScopedI18n } from '@/locales/client';
import { EventCategorieStore } from '@/stores/event.categories.store';
import { useUserInfoStore } from '@/stores/userinfo.store';
import { Button } from '@heroui/button';
import { Card, CardBody, Chip } from '@heroui/react';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';


export const InteretProfileComponent = () => {

    const { fetchInterests, interests, isLoading, addInterest } = useUserInfoStore();
    const { dataList, fetchCategoriesList } = EventCategorieStore();

    const [fruits, setFruits] = React.useState(selectedActivities);
    const [selected, setSelected] = useState<any[]>([...interests]);
    const buttonT = useScopedI18n('button');
    const interetT = useScopedI18n('interet');
    const { isAuth } = useAppContext();

    const handleClose = (fruitToRemove: any) => {
        setFruits(fruits.filter((fruit: any) => fruit.id !== fruitToRemove.id));
        if (fruits.length === 1) {
            setFruits(selectedActivities);
        }
    };

    const toggleSelection = (option: any) => {
        setSelected((prev) =>
            prev.some(item => item.id === option.id)
                ? prev.filter((item) => item.id !== option.id)
                : [...prev, option]
        );
    };


    useEffect(() => {
        fetchInterests();
        fetchCategoriesList();
    }, []);

    useEffect(() => {
        setSelected([...interests]);
    }, [interests]);



    return (
        <div className='flex flex-col justify-between h-full'>
            <div>
                <h2 className="text-2xl font-semibold mb-4">{interetT('title')}</h2>
                <div className='space-y-3'>
                    <span className='font-semibold' >{interetT('subtitle')}</span>

                    <Card className='h-[126px]'>
                        <CardBody>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {isLoading ? (
                                    // Affiche 3 skeletons simulant les Chip fermables
                                    Array(3).fill(null).map((_, index) => (
                                        <div
                                            key={index}
                                            className="h-8 w-28 bg-gray-300 animate-pulse rounded-lg flex items-center justify-between px-3"
                                        >
                                            <div className="w-16 h-3 bg-gray-400 rounded" />
                                            <div className="w-3 h-3 bg-gray-400 rounded-full" />
                                        </div>
                                    ))
                                ) : (
                                    selected.map((fruit: any, index: number) => (
                                        <Chip
                                            key={index}
                                            variant="flat"
                                            className="text-primary bg-tertiary"
                                            classNames={{
                                                closeButton: "text-primary bg-tertiary rounded-none shadow-none",
                                            }}
                                            onClose={() => handleClose(fruit)}
                                        >
                                            {fruit.name}
                                        </Chip>
                                    ))
                                )}
                            </div>

                        </CardBody>

                    </Card>

                    <div className="grid space-y-5 md:space-y-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full max-w-5xl">
                        {dataList.map((element, index) => (
                            <>
                                {index < 4 &&
                                    <div
                                        key={element.name}
                                        className={clsx({ "md:border-e-1 pe-2": index + 1 < interests.length },)}
                                    >
                                        <Card className="bg-transparent flex items-center justify-center">

                                            <h2 className="text-lg font-medium flex my-3 items-center">
                                                {element.name}
                                            </h2>

                                        </Card>

                                        <div className="flex gap-2 mt-2">
                                            <div className="flex flex-wrap gap-2 ">
                                                {element.children.map((option: any) => (
                                                    <button
                                                        name={option.name}
                                                        key={option.name}
                                                        className={`px-3 py-1 rounded-full text-xs font-medium border  ${selected.some(item => item.id === option.id)
                                                            ? "bg-tertiary text-primary"
                                                            : "bg-gray-100 text-gray-700"
                                                            }`}
                                                        onClick={() => toggleSelection(option)}
                                                    >
                                                        {option.name}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                }



                            </>


                        ))}
                    </div>
                </div>
            </div>

            {/* Bouton sauvegarder */}
            <div className="mt-6">
                <Button
                    name="Sauvegarder"
                    disabled={isLoading}
                    onPress={() => addInterest({
                        userId: isAuth?.id,
                        interests: selected.map((item: any) => item.id)
                    })} className="bg-red-500 text-white px-6 py-2" radius='full' >
                    {buttonT('save')}
                </Button>
            </div>
        </div>
    );
}

const selectedActivities = [
    "Coding Weekend",
    "Jam Session",
    "Innovation Lab",
    "Innovation Lab",
    "Coding Weekend"
];
import { useScopedI18n } from '@/locales/client';
import { Button } from '@heroui/button';
import { Card, CardBody, Chip } from '@heroui/react';
import React from 'react';

export const InteretProfileComponent = () => {

    const [fruits, setFruits] = React.useState(selectedActivities);
    const buttonT = useScopedI18n('button');
    const interetT = useScopedI18n('interet');

    const handleClose = (fruitToRemove: string) => {
        setFruits(fruits.filter((fruit) => fruit !== fruitToRemove));
        if (fruits.length === 1) {
            setFruits(selectedActivities);
        }
    };

    return (
        <div className='flex flex-col justify-between h-full'>
            <div>
                <h2 className="text-2xl font-semibold mb-4">{interetT('title')}</h2>
                <div className='space-y-3'>
                    <span className='font-semibold' >{interetT('subtitle')}</span>

                    <Card className='h-[126px]'>
                        <CardBody>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {fruits.map((fruit, index) => (
                                    <Chip classNames={{
                                        closeButton: "text-primary bg-tertiary rounded-none shadow-none",
                                    }}
                                        key={index} variant="flat" className='text-primary bg-tertiary' onClose={() => handleClose(fruit)}>
                                        {fruit}
                                    </Chip>
                                ))}
                            </div>
                        </CardBody>

                    </Card>

                    <div className='flex flex-wrap gap-2'>
                        {activities.map((activity, index) => (
                            <Chip key={index + "A"} className='bg-white' variant="bordered">
                                {activity}
                            </Chip>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bouton sauvegarder */}
            <div className="mt-6">
                <Button className="bg-red-500 text-white px-6 py-2" radius='full' >
                    {buttonT('save')}
                </Button>
            </div>
        </div>
    );
}

const activities = [
    "Innovation Lab",
    "Club de lecture",
    "Running Club @ Bord de mer",
    "Yoga",
    "Atelier Cuisine Locale",
    "Blockchain pour débutants",
    "Ciné-débat",
    "Football mixte du dimanche",
    "Dégustation vins & fromages",
    "Food Tour du marché"
];

const selectedActivities = [
    "Coding Weekend",
    "Jam Session",
    "Innovation Lab",
    "Innovation Lab",
    "Coding Weekend"
];
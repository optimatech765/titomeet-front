import { CategoryCard } from '@/components/categorie.card.component';
import { Paintbrush, Users } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export const CategorieSection = () => {
    return (
        <div className={"grid grid-cols-2 gap-5 md:grid-cols-4 space-y-4 md:space-y-0 mt-11"}>
            <CategoryCard index={1} icon={<Image width={50} height={50} src="/svg/Devices.svg" alt="After Work Networking" objectFit="cover" />} title="Tech et innovation" />
            <CategoryCard index={2} icon={<Image width={50} height={50} src="/svg/Design.svg" alt="After Work Networking" objectFit="cover" />} title="Art et culture" />
            <CategoryCard index={3} icon={<Image width={50} height={50} src="/svg/Sport.svg" alt="After Work Networking" objectFit="cover" />} title="Sport et bien-être" />
            <CategoryCard index={4} icon={<Image width={50} height={50} src="/svg/Food.svg" alt="After Work Networking" objectFit="cover" />} title="Cuisine et gastro" />
        </div>
    );
}


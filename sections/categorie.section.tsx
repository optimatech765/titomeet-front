import { CategoryCard } from '@/components/categorie.card.component';
import { useScopedI18n } from '@/locales/client';
import Image from 'next/image';
import React from 'react';

export const CategorieSection = () => {
    const categorieT = useScopedI18n('categorie');
    return (
        <div className={"grid grid-cols-2 gap-5 md:grid-cols-4 space-y-4 md:space-y-0 mt-11"}>
            <CategoryCard index={1}
                icon={<Image width={50}
                    height={50} src="/svg/Devices.svg"
                    alt="After Work Networking"
                    objectFit="cover" />}
                title={categorieT("tech")}
            />
            <CategoryCard
                index={2}
                icon={<Image width={50} height={50} src="/svg/Design.svg"
                    alt="After Work Networking"
                    objectFit="cover" />}
                title={categorieT("art")}
            />
            <CategoryCard
                index={3}
                icon={<Image width={50} height={50} src="/svg/Sport.svg"
                    alt="After Work Networking"
                    objectFit="cover" />}
                title={categorieT("sport")}
            />
            <CategoryCard
                index={4}
                icon={<Image width={50} height={50} src="/svg/Food.svg"
                    alt="After Work Networking"
                    objectFit="cover" />}
                title={categorieT("cuisine")}
            />
        </div>
    );
}


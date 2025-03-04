"use client";

import { Card, CardBody } from "@heroui/react";
import clsx from "clsx";

interface CategoryCardProps {
    icon: React.ReactNode;
    title: string;
    index:number
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title,index }) => {
    return (
        <Card className=" bg-white p-4 text-center shadow-md transition-all hover:shadow-lg">
            <CardBody className=" gap-3">
                {/* Icône */}
                <div className= {clsx({"bg-secondary":index%2===0,"bg-secondary-blue":index%2!==0},"flex items-center justify-center w-20 h-[75px] rounded-lg text-white text-3xl")} >
                    {icon}
                </div>
                {/* Titre */}
                <p className="font-semibold text-gray-800">{title}</p>
            </CardBody>
        </Card>
    );
};


"use client";

import { Select, SelectItem } from "@heroui/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { mois: "Jan", revenu: 80000 },
    { mois: "Fev", revenu: 20000 },
    { mois: "Mar", revenu: 45000 },
    { mois: "Avr", revenu: 25000 },
    { mois: "Mai", revenu: 50000 },
    { mois: "Juin", revenu: 10000 },
    { mois: "Juil", revenu: 75000 },
    { mois: "Aou", revenu: 15000 },
    { mois: "Sep", revenu: 70000 },
    { mois: "Oct", revenu: 65000 },
    { mois: "Nov", revenu: 110000 },
    { mois: "Dec", revenu: 50000 },
];

export const RevenueChart = () => {
    return (
        <div className="">
            <RevenuStatsHeader />
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mois" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenu" fill="#f39c12" barSize={25} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}


const RevenuStatsHeader = () => {

    return (
        <div className="flex items-center">
            {/* Ligne horizontale de 200px */}
            <div className="w-[80px] h-[1px] bg-gray-500 relative">
                {/* Ligne bleue de 50px au début */}
                <div className="absolute left-0 -top-[1px] w-[50px] h-[3px] bg-secondary-blue "></div>
            </div>

            {/* Inclinaison 30° vers la gauche */}
            <div className="w-[23px] h-[1px]  bg-gray-500 -rotate-[30deg] origin-left rounded-ee-md "></div>

            {/* Ligne horizontale de 50px */}
            <div className="w-full relative border-b-1.5 border-gray-500 -translate-y-[9px] -ml-[3px]">
                <div className="absolute w-full flex justify-end items-center gap-3 -top-10 ">
                   
                    <div className="w-1/3">
                        <Select placeholder="Année" size={"sm"} >
                            <SelectItem key={"dd"}>Month</SelectItem>
                            <SelectItem key={"dd"}>Month</SelectItem>
                            <SelectItem key={"dd"}>Month</SelectItem>
                        </Select>
                    </div>


                </div>
            </div>

        </div>
    );
};

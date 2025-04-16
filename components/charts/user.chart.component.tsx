"use client";
import { Select, SelectItem } from "@heroui/react";
import {
    PieChart,
    Pie,
    Cell, ResponsiveContainer
} from "recharts";

export const CustomChart = () => {
    return (
        <div className="">
            <UserStatsHeader />
            <div className="flex items-center ">
                <div className="h-[180px] w-[180px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={pieData}
                                dataKey="value"
                                nameKey="name"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={0}
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="text-sm space-y-1">
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-secondary" />
                        <span>Nouveaux utilisateurs</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-secondary-blue" />
                        <span>Utilisateurs actifs</span>
                    </div>
                </div>
            </div>
            <div className="font-semibold text-sm">
                Total d’utilisateurs : <span className="font-bold">5000</span>
            </div>

        </div >
    );
};




const UserStatsHeader = () => {

    return (
        <div className="flex items-center">
            {/* Ligne horizontale de 200px */}
            <div className="w-[120px] h-[1px] bg-gray-500 relative">
                {/* Ligne bleue de 50px au début */}
                <div className="absolute left-0 -top-[1px] w-[50px] h-[3px] bg-secondary-blue "></div>
            </div>

            {/* Inclinaison 30° vers la gauche */}
            <div className="w-[23px] h-[1px] bg-gray-500 -rotate-[30deg] origin-left rounded-ee-md "></div>

            {/* Ligne horizontale de 50px */}
            <div className="w-full relative border-b-1.5 border-gray-500 -translate-y-2 -ml-[3px]">
                <div className="absolute w-full flex justify-between items-center gap-3 -top-10 ">
                    <div className="flex items-center space-x-1 ">
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        <span className="text-xs font-thin">Inscriptions</span>
                    </div>
                    <div className="flex items-center space-x-1 flex-1">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="text-xs font-thin">Utilisateurs actifs</span>
                    </div>
                    <div className="flex-1">
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

const pieData = [
    { name: "Nouveaux utilisateurs", value: 69 },
    { name: "Utilisateurs actifs", value: 31 },
];

const COLORS = ["#F08621", "#28B0E6"];
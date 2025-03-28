"use client";
import { Select, SelectItem } from "@heroui/react";
import { XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer, AreaChart } from "recharts";

const data = [
    { name: "Jan", inscriptions: 70, actifs: 50 },
    { name: "Fév", inscriptions: 40, actifs: 45 },
    { name: "Mar", inscriptions: 50, actifs: 40 },
    { name: "Avr", inscriptions: 30, actifs: 90 },
    { name: "Mai", inscriptions: 45, actifs: 40 },
    { name: "Juin", inscriptions: 60, actifs: 35 },
    { name: "Juil", inscriptions: 20, actifs: 25 },
    { name: "Août", inscriptions: 50, actifs: 60 },
    { name: "Sep", inscriptions: 30, actifs: 85 },
    { name: "Oct", inscriptions: 90, actifs: 70 },
    { name: "Nov", inscriptions: 80, actifs: 60 },
    { name: "Déc", inscriptions: 40, actifs: 20 },
];

export const CustomChart = () => {
    return (
        <div className="">
            <UserStatsHeader />
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    {/* <Legend /> */}

                    {/* ✅ Courbes avec remplissage */}
                    <Area type="linear" dataKey="inscriptions" stroke="#2ecc71" fill="rgba(46, 204, 113, 0.2)" strokeWidth={2} dot={{ stroke: "#2ecc71", strokeWidth: 2, fill: "white" }} />
                    <Area type="linear" dataKey="actifs" stroke="#e74c3c" fill="rgba(231, 76, 60, 0.2)" strokeWidth={2} dot={{ stroke: "#e74c3c", strokeWidth: 2, fill: "white" }} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
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


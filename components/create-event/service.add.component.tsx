"use client";
import { Input, Select, SelectItem } from "@heroui/react";
import { Star, X } from "lucide-react";
import { useState } from "react";

export const ServiceAddComponent = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="relative p-4 bg-[#F8F8F8] rounded-lg shadow-md w-full">
            {/* Bouton de suppression */}
            <button
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                onClick={() => setIsVisible(false)}
            >
                <X size={16} />
            </button>

            {/* Service ajouté */}
            <div className="my-2">
                <Input
                    variant="bordered"
                    classNames={{
                        "mainWrapper": "flex-1 bg-white",
                        "input": "bg-white",
                        inputWrapper: "bg-white"
                    }}
                    fullWidth
                    labelPlacement="outside-left"
                    label="Service ajouté"
                />
            </div>

            {/* Prestataire ajouté */}
            <div>
                <Select   variant="bordered"
                 label="Prestataire ajouté" 
               classNames={{
                   "mainWrapper": "flex-1 bg-white rounded-md",

               }}
                 labelPlacement={"outside-left"} >
                    <SelectItem value="1">
                        <div className="flex items-center">
                            Nom de prestataire (4.5)
                            <Star className=" text-yellow-500" fill={"currentColor"} size={"15px"} />
                        </div>
                    </SelectItem>
                    <SelectItem value="2">
                        <div className="flex items-center">
                            Nom de prestataire (4.5)
                            <Star className=" text-yellow-500" fill={"currentColor"} size={"15px"} />
                        </div>

                    </SelectItem>
                </Select>

            </div>
        </div>
    );
};

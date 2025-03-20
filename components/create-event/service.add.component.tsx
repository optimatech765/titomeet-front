"use client";
import { Input, Select, SelectItem } from "@heroui/react";
import { Star, X } from "lucide-react";
import { useState } from "react";
import { InputContainerComponent2 } from "./input.container.component";

export const ServiceAddComponent = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="relative px-4 py-6 bg-[#F8F8F8] rounded-lg shadow-md w-full flex flex-col gap-2">
            {/* Bouton de suppression */}
            <button
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                onClick={() => setIsVisible(false)}
            >
                <X size={16} />
            </button>

            {/* Service ajouté */}
            <InputContainerComponent2 title={"Service ajouté"} >
                <Input
                    variant="bordered"
                    classNames={{
                        "mainWrapper": "flex-1 bg-white",
                        "input": "bg-white rounded-md",
                        // inputWrapper: "bg-white"
                    }}
                    fullWidth
                    labelPlacement="outside-left"
                />
            </InputContainerComponent2>

            {/* Prestataire ajouté */}
            <InputContainerComponent2 title={"Prestataire ajouté"} >
                <Select variant="bordered"
                    classNames={{
                        "mainWrapper": "flex-1 bg-white rounded-md",

                    }}
                    labelPlacement={"outside-left"} >
                    <SelectItem key="1">
                        <div className="flex items-center">
                            Nom de prestataire (4.5)
                            <Star className=" text-yellow-500" fill={"currentColor"} size={"15px"} />
                        </div>
                    </SelectItem>
                    <SelectItem key="2">
                        <div className="flex items-center">
                            Nom de prestataire (4.5)
                            <Star className=" text-yellow-500" fill={"currentColor"} size={"15px"} />
                        </div>

                    </SelectItem>
                </Select>

            </InputContainerComponent2>
        </div>
    );
};

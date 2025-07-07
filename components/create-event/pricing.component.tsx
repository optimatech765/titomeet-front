/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Input, } from "@heroui/react";
import { X } from "lucide-react";
import InputContainerComponent from "./input.container.component";
import { useEventsStore } from "@/stores/events.store";

export const PricingComponent = ({ data }: any) => {
    const { setEventData, data: eventData } = useEventsStore();

    const handleRemovePrice = () => {
        setEventData(eventData?.prices?.filter((value: any) => value?.name !== data.name));
    }

    return (
        <div className="relative py-6 bg-[#F8F8F8] rounded-lg shadow-md w-full flex flex-col gap-2">
            {/* Bouton de suppression */}
            <button
                name="Supprimer"
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                onClick={handleRemovePrice}
            >
                <X size={16} />
            </button>

            <div className="flex gap-4 px-4">
                {/* Service ajouté */}
                <InputContainerComponent title={"Nom du ticket"} >
                    <Input
                        disabled={true}
                        value={data.name}
                        variant="bordered"
                        classNames={{
                            "mainWrapper": "flex-1 ",
                            "input": "bg-white rounded-md",
                            // inputWrapper: "bg-white"
                        }}
                        fullWidth
                        labelPlacement="outside-left"
                    />
                </InputContainerComponent>

                {/* Prestataire ajouté */}
                <InputContainerComponent title={"Prix du ticket"} >
                    <Input
                        disabled={true}
                        value={data.amount}
                        variant="bordered"
                        classNames={{
                            "mainWrapper": "flex-1 ",
                            "input": "bg-white rounded-md",
                            // inputWrapper: "bg-white"
                        }}
                        fullWidth
                        labelPlacement="outside-left"
                    />
                </InputContainerComponent>
            </div>

        </div>
    );
};

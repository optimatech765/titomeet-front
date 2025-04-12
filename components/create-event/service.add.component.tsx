/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Input, Textarea } from "@heroui/react";
import { X } from "lucide-react";

import { InputContainerComponent2 } from "./input.container.component";

export const ServiceAddComponent = ({ item, removePass }: { item: any, removePass: () => void }) => {

    return (
        <div className="relative px-4 py-6 bg-[#F8F8F8] rounded-lg shadow-md w-full flex flex-col gap-2">
            {/* Bouton de suppression */}

            <X size={16} className="absolute top-0 cursor-pointer right-1 text-primary" onClick={removePass} />

            {/* Service ajouté */}
            <InputContainerComponent2 title={"Service ajouté"} >
                <Input
                    value={item?.name}
                    variant="bordered"
                    classNames={{
                        "mainWrapper": "flex-1 ",
                        "input": "bg-white rounded-md",
                        // inputWrapper: "bg-white"
                    }}
                    fullWidth
                    labelPlacement="outside-left"
                />
            </InputContainerComponent2>

            {/* Prestataire ajouté */}
            <InputContainerComponent2 title={"Prestataire ajouté"} >
                <Textarea
                    value={item.description}
                    readOnly={true}
                    className=" border-slate-300"
                    variant="bordered"
                    rows={5}
                    fullWidth
                    classNames={{
                        mainWrapper: "flex-1 items-start",
                        base: "flex-1 items-start",

                    }}
                />

            </InputContainerComponent2>
        </div>
    );
};

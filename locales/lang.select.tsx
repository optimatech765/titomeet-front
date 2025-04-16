"use client";
import React from 'react';
import { useChangeLocale, useCurrentLocale } from './client';
import { Select, SelectItem } from '@heroui/select';
import { Avatar } from '@heroui/react';

export const LangSelect = () => {
    const locale = useCurrentLocale();
    const changelOcale = useChangeLocale();
    return (

        <Select
            classNames={{
                listbox: "gap-1 px-1",
                trigger: "px-1",
            }}
            startContent={<Avatar alt="Anglais"
                className="w-7 h-7"
                src={`https://flagcdn.com/${locale == 'en' ? 'gb' : 'fr'}.svg`}
            />}
            aria-label="Sélectionnez une langue"
            onChange={(e) => changelOcale(e.target.value as "fr" || "en")} defaultSelectedKeys={[locale]} className="w-full">

            <SelectItem
                aria-label={"Français"}
                value={"fr"}
                key="fr"
                startContent={<Avatar alt="France" className="w-6 h-6" src="https://flagcdn.com/fr.svg" />}
            >
                <p>
                    Fr
                </p>

            </SelectItem>
            <SelectItem
            className='gap-1'
                aria-label={"Anglais"}
                value={"en"}
                key="en"
                startContent={<Avatar alt="Anglais" className="w-6 h-6" src="https://flagcdn.com/gb.svg" />}
            >
                <p>
                    En
                </p>
            </SelectItem>

        </Select>

    );
}

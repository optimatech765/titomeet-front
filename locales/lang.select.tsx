"use client";
import React from 'react';
import { useChangeLocale, useCurrentLocale } from './client';
import { Select, SelectItem } from '@heroui/select';
import { Avatar } from '@heroui/react';

export const LangSelect = () => {
    const locale = useCurrentLocale();
    const changelOcale = useChangeLocale();
    return (
        <div>
            <Select
                startContent={<Avatar alt="Anglais" className="min-w-6 h-6" src={`https://flagcdn.com/${locale == 'en' ? 'gb' : 'fr'}.svg`} />}
               aria-label="Sélectionnez une langue"
                onChange={(e) => changelOcale(e.target.value as "fr" || "en")} defaultSelectedKeys={[locale]} className="w-full">

                <SelectItem
                    aria-label={"Français"}
                    value={"fr"}
                    key="fr"
                    startContent={<Avatar alt="France" className="w-6 h-6" src="https://flagcdn.com/fr.svg" />}
                >
                    Fr
                </SelectItem>
                <SelectItem
                    aria-label={"Anglais"}
                    value={"en"}
                    key="en"
                    startContent={<Avatar alt="Anglais" className="w-6 h-6" src="https://flagcdn.com/gb.svg" />}
                >
                    En
                </SelectItem>

            </Select>
        </div>
    );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { Select, SelectItem, Button, Card } from "@heroui/react";
import { getMonthWeeks } from "@/utils/functions/date.function";
import { useEventsStore } from "@/stores/events.store";

const date = new Date();
const year = date.getFullYear();
const months = [
    "Jan", "Fév", "Mar", "Avr", "Mai", "Juin",
    "Juil", "Août", "Sep", "Oct", "Nov", "Déc"
];

const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

export const DateSelectComponent = ({ onChange }: { onChange?: any }) => {
    const { fetchEventList, } = useEventsStore();
    const [selectedDate, setSelectedDate] = useState<number>(date.getDate());
    const [selectedYear, setSelectedYear] = useState<number>(year);
    const [selectedMonth, setSelectedMonth] = useState<number>(date.getMonth());
    const [weekDays, setWeekDays] = useState<number[][]>([]);
    const [selectedWeek, setSelectedWeek] = useState<number>(0);

    // Fonction pour mettre à jour les semaines du mois
    const updateWeeks = (year: number, month: number) => {
        const weeks = getMonthWeeks(year, month);
        setWeekDays(weeks);

        // Trouver la semaine où se trouve selectedDate
        const weekIndex = weeks.findIndex(week => week.includes(selectedDate));
        setSelectedWeek(weekIndex >= 0 ? weekIndex : 0);
    };

    useEffect(() => {
        updateWeeks(selectedYear, selectedMonth);
    }, [selectedYear, selectedMonth]);

    const handleMonthChange = (value: number) => {
        setSelectedMonth(value);
        const currentYear = parseInt(months[value].split(" ")[1]);
        setSelectedYear(currentYear);

        const weeks = getMonthWeeks(currentYear, value);
        setWeekDays(weeks);
        setSelectedDate(1);
        setSelectedWeek(0);
    };

    const handleArrowClick = (direction: "left" | "right") => {
        let newMonth = selectedMonth;
        let newYear = selectedYear;
        let newWeek = selectedWeek;

        if (direction === "left") {
            if (newWeek === 0) {
                if (newMonth === 0) {
                    newYear -= 1;
                    newMonth = 11;
                } else {
                    newMonth -= 1;
                }
                const weeks = getMonthWeeks(newYear, newMonth);
                newWeek = weeks.length - 1;
                setWeekDays(weeks);
            } else {
                newWeek -= 1;
            }
        } else {
            if (newWeek === weekDays.length - 1) {
                if (newMonth === 11) {
                    newYear += 1;
                    newMonth = 0;
                } else {
                    newMonth += 1;
                }
                const weeks = getMonthWeeks(newYear, newMonth);
                newWeek = 0;
                setWeekDays(weeks);
            } else {
                newWeek += 1;
            }
        }

        setSelectedYear(newYear);
        setSelectedMonth(newMonth);
        setSelectedWeek(newWeek);
    };

    const daysOfWeek = weekDays[selectedWeek] || [];

    useEffect(() => {
        // create new date from selectedDate, selectedMonth and selectedYear
        const newDate = new Date(selectedYear, selectedMonth, selectedDate);
        if (onChange) {
            onChange(`${newDate.getFullYear()}-${(selectedMonth+1).toString().padStart(2, "0")}-${newDate.getDate()}`)
        } else {
            fetchEventList({
                status:"PUBLISHED",
                startDate: `${newDate.getFullYear()}-${(selectedMonth+1).toString().padStart(2, "0")}-${newDate.getDate()}`,
            })
        }

    }, [selectedDate]);

    return (
        <Card className="p-4 border border-gray-200 rounded-xl shadow-sm w-full">
            {/* Sélecteur de mois */}
            <div className="flex items-center justify-between text-primary">
                <Select
                    aria-label="Sélectionnez un mois"
                    className="w-28 text-primary"
                    selectedKeys={selectedMonth.toString()}
                    onChange={(e) => {
                        const index = parseInt(e.target.value);
                        handleMonthChange(index);
                    }}
                >
                    {months.map((month, index) => (
                        <SelectItem key={index.toString()} aria-label={month}>
                            {month} {year}
                        </SelectItem>
                    ))}
                </Select>


                {/* Flèches de navigation */}
                <div className="flex gap-2">
                    <Button isIconOnly variant="light" size="sm" onPress={() => handleArrowClick("left")}>
                        <ChevronLeft size={16} />
                    </Button>
                    <Button isIconOnly variant="light" size="sm" onPress={() => handleArrowClick("right")}>
                        <ChevronRight size={16} />
                    </Button>
                </div>
            </div>

            {/* Jours de la semaine */}
            <div className="grid grid-cols-7 gap-2 text-center mt-2 text-base font-normal">
                {days.map((day, index) => (
                    <span key={index}>{day}</span>
                ))}
            </div>

            {/* Jours du mois */}
            <div className="grid grid-cols-7 gap-2 text-center mt-2">
                {daysOfWeek.map((day, index) =>
                    day === 0 ? (
                        <div key={index}></div>
                    ) : (
                        <button
                            key={index}
                            className={clsx(
                                "w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium",
                                day === selectedDate
                                    ? "bg-red-200 text-red-600"
                                    : "text-gray-800 hover:bg-gray-100"
                            )}
                            onClick={() => setSelectedDate(day)}
                        >
                            {day}
                        </button>
                    )
                )}
            </div>
        </Card>
    );
};

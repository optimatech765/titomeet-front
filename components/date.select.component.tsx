"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { Select, SelectItem, Button, Card } from "@heroui/react";
import { getMonthWeeks } from "@/utils/functions/date.function";

const date = new Date();
const year = date.getFullYear();
const months = [
    "Jan " + year, "Fév " + year, "Mar " + year, "Avr " + year, "Mai " + year, "Juin " + year,
    "Juil " + year, "Août " + year, "Sep " + year, "Oct " + year, "Nov " + year, "Déc " + year
];

const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];


export const DateSelectComponent = () => {
    const [selectedDate, setSelectedDate] = useState<number>(14);
    const [selectedYear, setSelectedYear] = useState<number>(year);
    const [selectedMonth, setSelectedMonth] = useState<number>(3); // Avril (index 3)
    const [selectedWeek, setSelectedWeek] = useState<number>(0);
    const [weekDays, setWeekDays] = useState<number[][]>(getMonthWeeks(year, selectedMonth));

    const handleMonthChange = (value: number) => {
        const newMonth = months[value];
        const [month, year] = newMonth.split(' ');
        console.log(month, year);
        setSelectedMonth(value);
        setSelectedYear(parseInt(year));

        const weeks = getMonthWeeks(parseInt(year), value);
        console.log(weeks)
        setWeekDays(weeks);
        setSelectedDate(1); // Réinitialiser au premier jour
    };



    const handleArrowClick = (direction: "left" | "right") => {
        console.log([selectedWeek, direction, selectedMonth]);

        // Obtenir le nombre total de semaines dans le mois sélectionné
        const totalWeeksInMonth = weekDays.length;

        if (direction === "left") {
            if (selectedWeek === 0) {
                if (selectedMonth === 0) {
                    // Passer à l'année précédente, dernier mois, dernière semaine
                    setSelectedYear(selectedYear - 1);
                    setSelectedMonth(11);
                    setSelectedWeek(getWeeksInMonth(selectedYear - 1, 11) - 1);
                } else {
                    // Passer au mois précédent, dernière semaine de ce mois
                    setSelectedMonth(selectedMonth - 1);
                    setSelectedWeek(getWeeksInMonth(selectedYear, selectedMonth - 1) - 1);
                }
            } else {
                // Passer à la semaine précédente dans le même mois
                setSelectedWeek(selectedWeek - 1);
            }
        } else { // direction === "right"
            if (selectedWeek === totalWeeksInMonth - 1) {
                if (selectedMonth === 11) {
                    // Passer à l'année suivante, premier mois, première semaine
                    setSelectedYear(selectedYear + 1);
                    setSelectedMonth(0);
                    setSelectedWeek(0);
                } else {
                    // Passer au mois suivant, première semaine
                    setSelectedMonth(selectedMonth + 1);
                    setSelectedWeek(0);
                }
            } else {
                // Passer à la semaine suivante dans le même mois
                setSelectedWeek(selectedWeek + 1);
            }
        }
    };

    // Fonction pour calculer le nombre de semaines dans un mois donné
    const getWeeksInMonth = (year: number, month: number) => {
        const firstDay = new Date(year, month, 1).getDay(); // Jour de début du mois (0 = Dimanche, 6 = Samedi)
        const daysInMonth = new Date(year, month + 1, 0).getDate(); // Nombre total de jours dans le mois

        return Math.ceil((firstDay + daysInMonth) / 7); // Calcul du nombre de semaines
    };

    const daysOfWeek = weekDays[selectedWeek];

    return (
        <Card className="p-4 border border-gray-200 rounded-xl shadow-sm w-full">
            {/* Sélecteur de mois et année */}
            <div className="flex items-center justify-between text-primary">
                <Select

                    aria-label="Sélectionnez un mois"
                    className="w-28 text-primary"
                    selectedKeys={[months[selectedMonth]]}
                    onChange={(e) => {
                        const [month, year] = e.target.value.split(' ');
                        console.log(month, year);
                        setSelectedMonth(months.indexOf(e.target.value));
                        setSelectedYear(parseInt(year));
                        handleMonthChange(months.indexOf(e.target.value))
                    }}

                // onSelectionChange={handleMonthChange}
                >
                    {months.map((month, index) => (
                        <SelectItem key={month} value={index.toString()} aria-label={month}>
                            {month}
                        </SelectItem>
                    ))}
                </Select>

                {/* Flèches de navigation */}
                <div className="flex gap-2">
                    <Button
                        isIconOnly
                        variant="light"
                        size="sm"
                        className=" text-primary"
                        onPress={() => handleArrowClick("left")}
                    >
                        <ChevronLeft size={16} />
                    </Button>
                    <Button
                        isIconOnly
                        variant="light"
                        size="sm"
                        className=" text-primary"
                        onPress={() => handleArrowClick("right")}
                    >
                        <ChevronRight size={16} />
                    </Button>
                </div>
            </div>

            {/* Jours de la semaine */}
            <div className="grid grid-cols-7 gap-2 text-center mt-1 text-base font-normal ">
                {days.map((day, index) => (
                    <span key={index}>{day}</span>
                ))}
            </div>

            {/* Jours du mois */}
            <div className="grid grid-cols-7 gap-2 text-center mt-2">
                {daysOfWeek.map((day) => {
                    <>
                        {day != 0 &&
                            <>
                                {
                                    <button
                                        key={day}
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
                                }
                            </>

                        }

                    </>

                    return (
                        <>
                            {day != 0 ?
                                <>
                                    {
                                        <button
                                            key={day}
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
                                    }
                                </> : <>
                                    <div></div>
                                </>

                            }
                        </>

                    );
                })}
            </div>
        </Card>
    );
};

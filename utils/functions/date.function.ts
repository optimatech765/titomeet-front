/* eslint-disable @typescript-eslint/no-explicit-any */
import {Time} from "@internationalized/date";

export const getMonthWeeks = (year: number, month: number) => {
    console.log(year, month)
    const firstDay = new Date(year, month, 1).getDay(); // Jour de la semaine du 1er jour (0 = Dimanche)
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const weeks: number[][] = [];
    let currentWeek: number[] = new Array(firstDay === 0 ? 6 : firstDay - 1).fill(0); // Décalage si mois ne commence pas un lundi

    for (let day = 1; day <= daysInMonth; day++) {
        currentWeek.push(day);
        if (currentWeek.length === 7) {
            weeks.push(currentWeek);
            currentWeek = [];
        }
    }

    if (currentWeek.length > 0) {
        weeks.push([...currentWeek, ...new Array(7 - currentWeek.length).fill(0)]); // Compléter la dernière semaine
    }

    return weeks;
};

export const GetDate = (value: any) => {
    return `${value.day}-${value.month}-${value.year}`;
}

export const convertToISO = (dateString: string): string => {
    const [day, month, year] = dateString.split("-").map(Number);
    const date = new Date(Date.UTC(year, month - 1, day)); // UTC 0
    return date.toISOString();
  };

  export const DefaultTime=()=>{
    // Récupérer l'heure actuelle
  const now = new Date();
  const defaultTime = new Time(now.getHours(), now.getMinutes(), now.getSeconds());
  return defaultTime;
  }


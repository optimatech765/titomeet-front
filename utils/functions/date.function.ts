/* eslint-disable @typescript-eslint/no-explicit-any */
import { Time } from "@internationalized/date";

export const getMonthWeeks = (years: number, month: number) => {

    const year = new Date().getFullYear();
    const firstDay = new Date(year, month, 1).getDay(); // Jour de la semaine du 1er jour (0 = Dimanche)
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const weeks: number[][] = [];
    let currentWeek: number[] = new Array(firstDay === 0 ? 6 : firstDay - 1).fill(0); // Décalage si mois ne commence pas un lundi

    for (let day = 1; day <= daysInMonth; day++) {
        currentWeek?.push(day);
        if (currentWeek.length === 7) {
            weeks.push(currentWeek);
            currentWeek = [];
        }
    }

    if (currentWeek?.length > 0) {
        weeks.push([...currentWeek, ...new Array(7 - currentWeek.length).fill(0)]); // Compléter la dernière semaine
    }

    return weeks;
};

export const GetDate = (value: any) => {
    return `${value.year.toString().padStart(4, "0")}-${value.month.toString().padStart(2, "0")}-${value.day.toString().padStart(2, "0")}`;
}

export const convertToISO = (dateString: string): string => {
    const [day, month, year] = dateString.split("-").map(Number);
    const date = new Date(Date.UTC(year, month - 1, day)); // UTC 0
    return date.toISOString();
};

export const DefaultTime = () => {
    // Récupérer l'heure actuelle
    const now = new Date();
    const defaultTime = new Time(now.getHours(), now.getMinutes(), now.getSeconds());
    return defaultTime;
}

export const getHourMinute = (time: string): string => {
    const [hour, minute] = time ? time?.split(":") : [0, 0];
    return `${hour}:${minute}`;
}

export const formatDate = (date: string) => {
    const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"];

    const dateObj = new Date(date);

    const day = dateObj.getDate();
    const month = months[dateObj.getMonth()]; // Get the 3-letter month abbreviation
    const year = dateObj.getFullYear();

    return {
        day,
        month,
        year
    };
}

export const formatDateFrench = (date: string) => {
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const daysOfWeek = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    const dateObj = new Date(date);

    const dayOfWeek = daysOfWeek[dateObj.getDay()]; // Jour de la semaine
    const day = dateObj.getDate(); // Jour du mois
    const month = months[dateObj.getMonth()]; // Mois en français
    const year = dateObj.getFullYear(); // Année

    return `${dayOfWeek} ${day} ${month} ${year}`;
}

export const formatDate2 = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Mois commence à 0
    const year = String(date.getUTCFullYear()).slice(-2); // Prend les deux derniers chiffres

    return `${day}/${month}/${year}`;
}


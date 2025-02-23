export const getMonthWeeks = (year: number, month: number) => {
    console.log(year, month)
    const firstDay = new Date(year, month, 1).getDay(); // Jour de la semaine du 1er jour (0 = Dimanche)
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let weeks: number[][] = [];
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


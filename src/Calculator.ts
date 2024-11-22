import TimePoint from "./types/TimePoint";
import weightedMean from "./utils/weightedMean";

function pagesBySemester(data: TimePoint[]) {
    return data
        .map((x, idx, data) => {
            if (idx == 0) return 0;
            return x.pages - data[idx - 1].pages;
        })
        .slice(1);
}

export function calculate(data: TimePoint[]) {
    const pagesBySem = pagesBySemester(data);

    const avg = weightedMean(
        pagesBySem,
        pagesBySem.map((_, idx) => idx / 10),
    );

    const newData = [...data];
    let pages = data[data.length - 1].pages;
    let date = data[data.length - 1].date;
    do {
        pages = Math.round(pages + avg);
        const prev = new Date(newData[newData.length - 2].date);
        date = prev.setFullYear(prev.getFullYear() + 1);
        newData.push({ pages: Math.min(pages, 604), date: date });
    } while (pages < 604);

    return newData;
}

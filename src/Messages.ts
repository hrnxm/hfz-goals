export const en = {
    title: "Hfz Goals",
    endOfSemester: "End of semester",
    numOfPages: "No. of pages",
    endGoal: "You will reach 604 pages by",
    inShaAllah: "In sha Allah",
} as const;

export type Messages = { [K in keyof typeof en]: string };

export const ba: Messages = {
    title: "Put Hifza",
    endOfSemester: "Kraj semestra",
    numOfPages: "Br. stranica",
    endGoal: "Naučit ćeš 604 stranice do",
    inShaAllah: "Inšallah",
};

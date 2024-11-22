import { useState } from "react";
import "./App.css";
import LanguageSwitch, {
    Language,
    readFromStorage,
} from "./components/LanguageSwitch";
import * as Messages from "./Messages";
import Chart from "./components/Chart";
import formatSemester from "./utils/formatSemester";
import TimePoint from "./types/TimePoint";
import { calculate } from "./Calculator";

const initialData: TimePoint[] = [
    { pages: 0, date: new Date(2021, 0, 1).getTime() },
    { pages: 10, date: new Date(2021, 6, 1).getTime() },
    { pages: 27, date: new Date(2022, 0, 1).getTime() },
    { pages: 42, date: new Date(2022, 6, 1).getTime() },
    { pages: 62, date: new Date(2023, 0, 1).getTime() },
    { pages: 82, date: new Date(2023, 6, 1).getTime() },
    { pages: 102, date: new Date(2024, 0, 1).getTime() },
    { pages: 128, date: new Date(2024, 6, 1).getTime() },
];

export default function App() {
    const [lang, setLang] = useState<Language>(readFromStorage);
    const data = calculate(initialData);

    const messages = lang == "en" ? Messages.en : Messages.ba;

    return (
        <main>
            <LanguageSwitch selected={lang} onSelect={setLang} />
            <h1>{messages.title}</h1>

            {data.length && (
                <>
                    <Chart data={data} messages={messages} />
                    <p>
                        {messages.endGoal}:
                        <strong>
                            {" "}
                            {formatSemester(data[data.length - 1].date)}
                        </strong>
                        <br />
                        <strong>{messages.inShaAllah}</strong>
                    </p>
                </>
            )}
        </main>
    );
}

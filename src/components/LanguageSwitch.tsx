const languages = ["en", "ba"] as const;

export type Language = (typeof languages)[number];

type Props = {
    selected: Language;
    onSelect: (lang: Language) => void;
};

const LOCAL_STORAGE_KEY = "language";

export function readFromStorage() {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY) as Language;
    return languages.includes(stored) ? stored : "en";
}

function saveToStorage(lang: Language) {
    localStorage.setItem(LOCAL_STORAGE_KEY, lang);
}

export default function LanguageSwitch({ selected, onSelect }: Props) {
    const changeValue = (lang: Language) => {
        saveToStorage(lang);
        onSelect(lang);
    };

    return (
        <div className="language-switch">
            <input
                type="radio"
                id="lang-en"
                name="language"
                value="EN"
                checked={selected === "en"}
                onChange={() => changeValue("en")}
            />
            <label htmlFor="lang-en">🇬🇧</label>

            <input
                type="radio"
                id="lang-bs"
                name="language"
                value="BS"
                checked={selected === "ba"}
                onChange={() => changeValue("ba")}
            />
            <label htmlFor="lang-bs">🇧🇦</label>

            <div
                className="switch"
                style={{
                    transform:
                        selected === "ba"
                            ? "translateX(100%)"
                            : "translateX(0)",
                }}
            ></div>
        </div>
    );
}

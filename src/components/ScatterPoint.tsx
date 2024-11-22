const now = Date.now();
const today = new Date();
const thisYear = today.getFullYear();
const thisMonth = today.getMonth();
const isFirstHalf = thisMonth < 6;

const semesterStart = isFirstHalf
    ? new Date(thisYear, 0, 1).getDate() // January 1st
    : new Date(thisYear, 6, 1).getDate(); // July 1st

const semesterEnd = isFirstHalf
    ? new Date(thisYear, 6, 1).getDate() // July 1st
    : new Date(thisYear + 1, 0, 1); // January 1st

export default function ScatterPoint(props: any) {
    const { cx, cy, payload } = props;
    const isPast = payload.date < now;
    const isCurrent =
        semesterStart < payload.date && payload.date <= semesterEnd;
    const size = 10;

    return (
        <svg
            x={isCurrent ? cx - size - 5 : cx - size}
            y={isCurrent ? cy - size - 5 : cy - size}
            width={isCurrent ? size * 3 : size * 2}
            height={isCurrent ? size * 3 : size * 2}
        >
            <polygon
                points="5,0 6,3 10,3 7,5 8,9 5,7 2,9 3,5 0,3 4,3"
                fill={
                    isPast
                        ? "black"
                        : isCurrent
                          ? "#f0bf7c"
                          : /* future */ "#AAA"
                }
                transform={
                    isCurrent ? `scale(${size / 4})` : `scale(${size / 6})`
                }
            />
        </svg>
    );
}

import { format } from "date-fns";

export default function formatSemester(tickItem: string | number) {
    return format(new Date(tickItem), "MMM ‛yy");
}

import {
    CartesianGrid,
    ComposedChart,
    Line,
    ResponsiveContainer,
    Scatter,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { Messages } from "../Messages";
import ScatterPoint from "./ScatterPoint";
import formatSemester from "../utils/formatSemester";
import TimePoint from "../types/TimePoint";

type Props = {
    messages: Messages;
    data: TimePoint[];
};

export default function Chart(props: Props) {
    const { messages, data } = props;

    const connectData = [data[0], data[data.length - 1]];
    const scatterData = data.slice(1, data.length - 1);

    return (
        <div className="chart-container">
            <ResponsiveContainer>
                <ComposedChart
                    width={500}
                    height={300}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid />
                    <XAxis
                        dataKey="date"
                        scale="time"
                        type="number"
                        domain={["dataMin", "dataMax"]}
                        tickFormatter={formatSemester}
                    />
                    <YAxis domain={[0, 604]} />
                    <Tooltip
                        labelFormatter={(value) =>
                            `${messages.endOfSemester}: ` +
                            formatSemester(value)
                        }
                        formatter={(value, name) =>
                            name === "growth"
                                ? [value, messages.numOfPages]
                                : []
                        }
                    />
                    <Line
                        name="growth"
                        type="monotone"
                        dataKey="pages"
                        stroke="#0b8ee8"
                        data={connectData}
                    />
                    <Scatter
                        dataKey="pages"
                        data={scatterData}
                        shape={ScatterPoint}
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}

export default function weightedMean(arr: number[], weights: number[]) {
    const sum = arr.reduce((acc, val, i) => acc + val * weights[i], 0);
    const weightSum = weights.reduce((acc, val) => acc + val, 0);
    return sum / weightSum;
}

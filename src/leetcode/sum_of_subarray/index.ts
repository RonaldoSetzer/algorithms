export function sumOfSubarray(arr: number[]): number {
    return arr.reduce((sum, num) => sum + num, 0);
}

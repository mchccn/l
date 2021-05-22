export declare global {
    interface Number {
        times(predicate: (index: number) => unknown | Promise<unknown>): void;
    }
}

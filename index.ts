(function () {
    Object.defineProperty(Number.prototype, "times", {
        configurable: false,
        enumerable: false,
        writable: false,
        value: function times(predicate: (index: number) => unknown | Promise<unknown>) {
            for (let i = 0; i < this; i++) {
                predicate(i);
            }
        },
    });
})();

(function() {
    Object.defineProperty(Number.prototype, "times", {
        comfigurable: false,
        enumerable: false,
        writable: false,
        value: function times(predicate) {
            for (let i = 0; i < this; i++) {
                predicate(i);
            }
        },
    });
})();

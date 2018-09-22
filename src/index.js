class Sorter {
    constructor() {
        this.array = [];
        this.compareFunction = function (a, b) {
            return a - b;
        };
    }

    add(element) {
        this.array.push(element);
    }

    at(index) {
        return this.array[index];
    }

    get length() {
        return this.array.length;
    }

    toArray() {
        return this.array;
    }

    sort(indices) {
        let val = indices.sort((a, b) => a - b);
        let valmap = val.map(value => this.array[value]);
        for (let i = 0; i < val.length; i++) {
            this.array[val[i]] = valmap.sort(this.compareFunction)[i];
        }
    }

    setComparator(compareFunction) {
        this.compareFunction = compareFunction;
    }
}

module.exports = Sorter;
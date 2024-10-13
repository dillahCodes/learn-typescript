"use strict";
class DataStore {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getItem(index) {
        return this.items[index];
    }
    removeItem(index) {
        this.items.splice(index, 1);
    }
    getAllItems() {
        return this.items;
    }
}
const numberStore = new DataStore();
numberStore.addItem(90);
numberStore.addItem(80);
numberStore.addItem(70);
numberStore.addItem(20);
numberStore.removeItem(1);
console.log(numberStore.getAllItems());
const userStore = new DataStore();
userStore.addItem({
    id: 46374376,
    name: "dillah",
    email: "test@gmail.com",
});
userStore.addItem({
    id: 3232134,
    name: "Pablo",
    email: "test123@gmail.com",
});
console.table(userStore.getAllItems());
function getData(key, val1, val2) {
    if (key) {
        return val1;
    }
    return val2;
}
const n1 = 2;
const n2 = 3;
console.log(getData(n1, n2));

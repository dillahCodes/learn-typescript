"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fetchUsersData = (limit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(`https://fakestoreapi.com/users?limit=${limit}`);
        const data = yield res.json();
        return data;
    }
    catch (error) {
        console.log("error fetching Users Data: ", error === null || error === void 0 ? void 0 : error.message);
        return [];
    }
});
const displayUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield fetchUsersData(3);
    console.log(users);
});
displayUsers();

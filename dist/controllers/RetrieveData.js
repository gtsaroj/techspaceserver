var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ConnectFirbaseDB } from "../db/firebase.js";
export const RetrieveData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Database = yield ConnectFirbaseDB();
        const user = yield (Database === null || Database === void 0 ? void 0 : Database.collection("Users").get());
        user === null || user === void 0 ? void 0 : user.forEach((singleUser) => {
            console.log(singleUser.id, '=>', singleUser.data());
        });
    }
    catch (error) {
        console.log(`Error while getting data ${error}`);
    }
});

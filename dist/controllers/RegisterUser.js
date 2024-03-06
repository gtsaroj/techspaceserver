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
const sendinguserData = () => __awaiter(void 0, void 0, void 0, function* () {
    const Database = yield ConnectFirbaseDB();
    try {
        if (Database) {
            const addUser = Database.collection("Users").doc("user");
            yield addUser.set({
                name: "Santosh GT",
                age: "20 years old",
                Idendity: "Nepali",
                passion: "Full stack developer",
            });
            console.log("User Data send successfully");
        }
        console.log("Firebase instance is undefined");
    }
    catch (error) {
        console.log("Failed while adding data " + error);
    }
});
export { sendinguserData };

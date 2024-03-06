var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { initializeApp } from "firebase-admin/app";
import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { config } from "./config.js";
import ServiceAccount from "../techspace-9t9k-firebase-adminsdk-vtagy-708ba868ca.json" assert { type: "json" };
const ConnectFirbaseDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        initializeApp(Object.assign(Object.assign({}, config.firebaseConfig), { credential: admin.credential.cert(ServiceAccount) }));
        getFirestore();
        return;
    }
    catch (error) {
        console.error(`Failed to connect while connecting ${error}`);
    }
});
export { ConnectFirbaseDB };

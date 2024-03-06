var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AsyncHandler } from "../utils/Asynhandler.js";
import { render } from "@react-email/render";
import { transportor } from "../email/email.js";
import QueryForm from "../emails/QueryForm.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
export const SubmitQueryForm = AsyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const responseData = req.body;
    const contactDetails = responseData === null || responseData === void 0 ? void 0 : responseData.find((contact) => contact.fullname);
    const renderHtml = render(QueryForm(contactDetails, responseData));
    const emailForm = {
        from: process.env.EMAIL,
        to: contactDetails.email,
        subject: "QueryForm of User",
        html: renderHtml,
    };
    transportor.sendMail(emailForm, (err, success) => {
        if (!success) {
            console.log(`Error occured while sending : ${err}`);
            return res
                .status(400)
                .json(new ApiError("Your message failed", 400, err === null || err === void 0 ? void 0 : err.message));
        }
        console.log(`Succesfully : ${success}`);
        return res
            .status(200)
            .json(new ApiResponse(200, "message was sent successfully"));
    });
}));

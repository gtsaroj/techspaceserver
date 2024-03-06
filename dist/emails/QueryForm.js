import { Body, Head, Html, Tailwind } from "@react-email/components";
import * as React from "react";
const QueryForm = (contactdetails, responseData) => {
    return (React.createElement(Tailwind, { config: {
            content: ["./index.css", "./*.{js,ts,jsx,tsx}"],
            theme: {
                extend: {},
            },
            plugins: [
                {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            ],
        } },
        React.createElement(Html, null,
            React.createElement(Head, null),
            React.createElement(Body, null,
                React.createElement("div", { className: " flex flex-col items-center w-full " },
                    React.createElement("div", { className: "bg-[var(--primary-color)] flex flex-col w-full mx-5 p-2  bg-slate-400 " },
                        React.createElement("h3", { className: "text-center" }, "Techspace Customer Query services"),
                        React.createElement("div", null,
                            React.createElement("div", { className: "flex flex-col items-baseline justify-center" },
                                React.createElement("h3", null, "Conctact Details"),
                                React.createElement("div", { className: "flex flex-col items-start justify-center gap-0" },
                                    React.createElement("h3", { className: "text-[15px] font-serif" },
                                        "Name: ",
                                        contactdetails.fullname),
                                    React.createElement("h3", { className: "text-[15px] font-serif" },
                                        " ",
                                        "email : ",
                                        contactdetails.email),
                                    React.createElement("h3", { className: "text-[15px] font-serif" },
                                        "contact no: ",
                                        contactdetails.phone),
                                    React.createElement("h3", { className: "text-[15px] font-serif" },
                                        "message : ",
                                        contactdetails.message))),
                            React.createElement("div", null,
                                React.createElement("h3", null, "QueryData of User"),
                                React.createElement("div", null, responseData === null || responseData === void 0 ? void 0 : responseData.map((item, index) => (React.createElement("div", { key: index },
                                    React.createElement("div", null, item.questions),
                                    React.createElement("div", null, item.answer)))))))))))));
};
export default QueryForm;

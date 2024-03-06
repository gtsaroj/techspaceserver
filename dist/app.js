import express from "express";
import cors from "cors";
const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
import queryform from "./routes/querycontact.routes.js";
app.use("/api/v1/user", queryform);
export { app };

import { db } from "../config/firebase.js";
import { DateTime } from "luxon";

export const logRequest = async ({ ip, endpoint, method }) => {
    try {
        const timestamp = DateTime.now().setZone("Asia/Kolkata").toISO();
        const logData = {
            ip,
            endpoint,
            method,
            timestamp,
        };

        await db.collection("codesphere").add(logData);
    } catch (err) {
        console.error("Error logging request:", err);
    }
};

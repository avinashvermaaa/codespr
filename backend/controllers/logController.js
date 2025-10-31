import { logRequest } from "../utils/logger.js";

const logHomeVisit = async (req, res, next) => {
  try {
    await logRequest({
      ip: req.ip,
      endpoint: "/logs", 
      method: "GET",
    });

    // res.status(200).json({ message: "Home visit logged" });
  } catch (error) {
    next(error);
  }
};

export { logHomeVisit };

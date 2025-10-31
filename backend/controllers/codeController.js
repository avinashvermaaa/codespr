import { executeCode } from "../services/executionService.js";
import { logRequest } from '../utils/logger.js';

const compileCode = async (req, res, next) => {
  const { language, code, input } = req.body;
    await logRequest({
      ip: req.ip,
      endpoint: "/compile",
      method: "POST",
    });

  try {
    const result = await executeCode(language, code, input);
    res.json({ output: result });
  } catch (error) {
    next(error);
  }
};

export { compileCode };

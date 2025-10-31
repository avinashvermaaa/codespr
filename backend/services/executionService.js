import { writeFileSync, existsSync, unlinkSync } from "fs";
import { join } from "path";
import { executeCommand } from "../utils/executeCommand.js";
import { getLanguageConfig } from "../models/languageConfig.js";
import { TEMP_DIR } from "../constants/languageConstants.js";
import { OpenAI } from "openai";

const executeCode = async (language, code, input = "") => {
  const languageConfig = getLanguageConfig(language);
  if (!languageConfig) throw new Error("Unsupported language");

  const ext = languageConfig.extension;
  const filename = `temp_code.${ext}`;
  const filepath = join(TEMP_DIR, filename);
  const outputFile = join(TEMP_DIR, "output");

  try {
    writeFileSync(filepath, code);
    const compileCmd = languageConfig.compile ? languageConfig.compile.replace("{file}", filepath).replace("{outfile}", outputFile) : "";
    let runCmd = languageConfig.run.replace("{file}", filepath).replace("{outfile}", outputFile).replace("{dir}", TEMP_DIR);

    if (language === "java") {
      const classNameMatch = code.match(/class\s+([A-Za-z_][A-Za-z0-9_]*)/);
      if (!classNameMatch) throw new Error("Java class name not found.");
      const className = classNameMatch[1];
      runCmd = runCmd.replace("{classname}", className);
    }

    if (compileCmd) {
      await executeCommand(compileCmd);
    }

    const executionResult = await executeCommand(runCmd, input);
    return executionResult;
  } catch (error) {
    throw new Error(error.message);
  } finally {
    // Cleanup
    cleanupFiles(filepath, outputFile);
  }
};

// Helper function to cleanup temporary files
const cleanupFiles = (filepath, outputFile) => {
  if (existsSync(filepath)) unlinkSync(filepath);
  if (existsSync(outputFile)) unlinkSync(outputFile);
};

export { executeCode };

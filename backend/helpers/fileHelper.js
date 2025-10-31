import { writeFileSync } from "fs";

const writeToFile = (path, content) => {
  writeFileSync(path, content);
};

export { writeToFile };

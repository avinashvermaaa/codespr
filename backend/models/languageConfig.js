const languageConfigs = {
  cpp: {
    extension: "cpp",
    compile: "g++ -std=c++17 {file} -o {outfile}",
    run: "{outfile}",
    inputFlag: true,
  },
  c: {
    extension: "c",
    compile: "gcc {file} -o {outfile}",
    run: "{outfile}",
    inputFlag: true,
  },
  python: {
    extension: "py",
    run: "python3 {file}",
    inputFlag: true,
  },
  java: {
    extension: "java",
    compile: "javac {file}",
    run: "java -cp {dir} {classname}",
    inputFlag: true,
  },
  javascript: {
    extension: "js",
    run: "node {file}",
    inputFlag: false,
  },
  rust: {
    extension: "rs",
    compile: "rustc {file} -o {outfile}",
    run: "{outfile}",
    inputFlag: true,
  },
  php: {
    extension: "php",
    run: "php {file}",
    inputFlag: true,
  },
  typescript: {
    extension: "ts",
    compile: "tsc --project tsconfig.json",
    run: "node out/temp_code.js",
    inputFlag: true,
  },

  go: {
    extension: "go",
    run: "cd {dir} && go run temp_code.go", // ✅ No full path after cd
    inputFlag: true,
  },

  // R Language Support (with fallback for testing)
  r: {
    extension: "r",
    run: process.platform === "win32" ? "echo R code would execute here && type {file}" : "Rscript {file}",
    inputFlag: false, // R typically reads from files rather than stdin
    testMode: process.platform === "win32", // Flag to indicate test mode
  },

  // SQL Support (with fallback for testing)
  sql: {
    extension: "sql",
    run: process.platform === "win32" ? "echo SQL code would execute here && type {file}" : "sqlite3 -init {file} :memory: '.quit'",
    inputFlag: false,
    testMode: process.platform === "win32", // Flag to indicate test mode
  },

  // SQL Support for PostgreSQL (alternative)
  postgresql: {
    extension: "sql",
    run: "psql -f {file} -t -A",
    inputFlag: false,
  },

  // SQL Support for MySQL (alternative)
  mysql: {
    extension: "sql",
    run: "mysql -t < {file}",
    inputFlag: false,
  },
};

const getLanguageConfig = (language) => languageConfigs[language];

export { getLanguageConfig };

# Language Support Documentation

## Newly Added Languages

### R Language Support

**Configuration**: 
- Extension: `.r`
- Execution: `Rscript {file}`
- Input: Not supported (R scripts read from files/environment)

**Features**:
- Statistical computing and data analysis
- Built-in data manipulation functions
- Support for data frames, vectors, and lists
- Mathematical and statistical operations

**Example Usage**:
```r
# Basic R script
numbers <- c(1, 2, 3, 4, 5)
cat("Sum:", sum(numbers), "\n")
cat("Mean:", mean(numbers), "\n")

# Data frames
df <- data.frame(
  name = c("Alice", "Bob"),
  age = c(25, 30)
)
print(df)
```

**Docker Dependencies**:
- `r-base` and `r-base-dev` packages
- Common R packages: data.table, dplyr, ggplot2

### SQL Language Support

**Multiple SQL Variants Supported**:

1. **SQLite** (Primary)
   - Extension: `.sql`
   - Execution: `sqlite3 -init {file} {database} '.quit'`
   - Features: In-memory or file-based database operations

2. **PostgreSQL**
   - Extension: `.sql`
   - Execution: `psql -f {file} -t -A`
   - Requires: PostgreSQL client

3. **MySQL**
   - Extension: `.sql`
   - Execution: `mysql -t < {file}`
   - Requires: MySQL client

**Features**:
- Table creation and data manipulation
- Complex queries with JOINs
- Aggregate functions and grouping
- Schema operations

**Example Usage**:
```sql
-- Create table
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER
);

-- Insert data
INSERT INTO users (name, age) VALUES ('Alice', 25);

-- Query data
SELECT name, age FROM users WHERE age > 20;
```

## Execution Flow Analysis

### Current Architecture

1. **Language Validation**: Check if language exists in `languageConfigs`
2. **File Creation**: Write code to `temp_code.{extension}`
3. **Compilation**: If `compile` command exists, run it first
4. **Execution**: Run the `run` command with parameter substitution
5. **Cleanup**: Remove temporary files and generated outputs

### Parameter Substitution System

- `{file}` → Full path to temporary code file
- `{outfile}` → Path for compiled output (for compiled languages)
- `{dir}` → Temporary directory path
- `{classname}` → Java class name (Java-specific)

### Special Handling

**Java**: Extracts class name from code using regex
**SQL**: Sets up temporary SQLite database with sample schema
**R**: Changes working directory for proper script execution
**Go**: Uses `cd {dir} && go run` pattern

## Adding New Languages

To add support for a new language:

1. **Add to languageConfigs**:
```javascript
newlang: {
  extension: "ext",
  compile: "optional_compile_command", // optional
  run: "execution_command {file}",
  inputFlag: true/false,
}
```

2. **Update Dockerfile** (if new dependencies needed):
```dockerfile
RUN apt-get install -y new-language-runtime
```

3. **Add Frontend Support** (in CompilerPage.js):
```javascript
// Import language mode if available
import { newlang } from '@codemirror/lang-newlang';

// Add to languageModes
const languageModes = {
  // existing languages...
  newlang: newlang(),
};

// Add to languageExtensions
const languageExtensions = {
  // existing extensions...
  newlang: "ext",
};
```

4. **Add Special Handling** (if needed):
```javascript
if (language === "newlang") {
  // Special setup or processing
}
```

## Security Considerations

- All code execution happens in isolated temporary directory
- Files are automatically cleaned up after execution
- 5-second timeout prevents infinite loops
- Docker containerization provides additional isolation
- Database operations use temporary/in-memory databases when possible

## Performance Notes

- R scripts may take longer due to package loading
- SQL operations are limited to lightweight operations
- Large datasets should be avoided in the web environment
- File I/O operations are restricted to temp directory
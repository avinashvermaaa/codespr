# Example R script for testing
cat("Hello from R!\n")

# Basic data manipulation
numbers <- c(1, 2, 3, 4, 5)
cat("Numbers:", numbers, "\n")
cat("Sum:", sum(numbers), "\n")
cat("Mean:", mean(numbers), "\n")

# Simple plot (would save to file in Docker environment)
# plot(numbers, main="Test Plot")

# Working with data frames
df <- data.frame(
  name = c("Alice", "Bob", "Charlie"),
  age = c(25, 30, 35),
  score = c(85, 92, 78)
)

cat("Data frame:\n")
print(df)
cat("Average age:", mean(df$age), "\n")
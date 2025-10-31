-- Example SQL script for testing
-- Create sample tables and data

CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER,
    email TEXT
);

CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    product TEXT,
    amount DECIMAL(10,2),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Insert sample data
INSERT OR REPLACE INTO users (id, name, age, email) VALUES 
(1, 'Alice Johnson', 28, 'alice@example.com'),
(2, 'Bob Smith', 34, 'bob@example.com'),
(3, 'Charlie Brown', 22, 'charlie@example.com');

INSERT OR REPLACE INTO orders (id, user_id, product, amount) VALUES
(1, 1, 'Laptop', 999.99),
(2, 1, 'Mouse', 25.50),
(3, 2, 'Keyboard', 75.00),
(4, 3, 'Monitor', 299.99);

-- Queries to display results
.mode column
.headers on

SELECT 'Users Table:' as Info;
SELECT * FROM users;

SELECT 'Orders Table:' as Info;
SELECT * FROM orders;

SELECT 'User Orders Summary:' as Info;
SELECT 
    u.name, 
    u.age, 
    COUNT(o.id) as order_count, 
    SUM(o.amount) as total_spent
FROM users u 
LEFT JOIN orders o ON u.id = o.user_id 
GROUP BY u.id, u.name, u.age
ORDER BY total_spent DESC;
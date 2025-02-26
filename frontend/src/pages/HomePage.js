import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

// Language-icon mapping
const languageIcons = {
  Python: <i className="fab fa-python" style={{ color: "#306998" }}></i>,
  HTML: <i className="fab fa-html5" style={{ color: "#E34F26" }}></i>,
  CPP: <i className="fab fa-code" style={{ color: "#00599C" }}></i>,
  Java: <i className="fab fa-java" style={{ color: "#5382a1" }}></i>,
  MySQL: <i className="fas fa-database" style={{ color: "#00758F" }}></i>,
  JavaScript: <i className="fab fa-js-square" style={{ color: "#F7DF1E" }}></i>,
  PHP: <i className="fab fa-php" style={{ color: "#8892BF" }}></i>,
  MongoDB: <i className="fas fa-leaf" style={{ color: "#47A248" }}></i>,
  NodeJS: <i className="fab fa-node" style={{ color: "#43853D" }}></i>,
  Ruby: <i className="fas fa-gem" style={{ color: "#CC342D" }}></i>,
  Bash: <i className="fas fa-terminal" style={{ color: "#4EAA25" }}></i>,
  SQLite: <i className="fas fa-database" style={{ color: "#003B57" }}></i>,
  Redis: <i className="fas fa-database" style={{ color: "#DC382D" }}></i>,
};

// Fallback icon if no specific icon is found
const defaultIcon = (
  <i className="fas fa-code" style={{ color: "#808080" }}></i>
);

function HomePage() {
  const navigate = useNavigate();
  const languages = [
    {
      category: "POPULAR",
      items: [
        "C", "Python", "Cpp", "Java", "MySQL", "HTML", "JavaScript", "PHP", "Assembly", "C#", "Lua", "PL/SQL",
        "NodeJS", "MongoDB", "Groovy", "Ruby",
      ],
    },
    {
      category: "PROGRAMMING",
      items: [
        "Java", "Python", "C", "Cpp", "Go", "NodeJS", "JavaScript", "Scala", "PHP", "Ruby", "R", "Perl", "C#",
        "Kotlin", "Pascal", "Cobol", "Lua", "Fortran", "Assembly", "Groovy", "Bash", "Clojure",
        "TypeScript", "Prolog", "Rust", "Swift", "Objective-C", "CoffeeScript", "EJS",
      ],
    },
    {
      category: "WEB",
      items: [
        "HTML", "Materialize", "Bootstrap", "JQuery", "JavaScript", "CSS", "Foundation", "Bulma", "Uikit",
        "Semantic UI", "Skeleton", "Milligram", "React (Beta)", "Angular (Beta)", "Vue (Beta)", "Vue3 (Beta)",
        "BackboneJS",
      ],
    },
    {
      category: "DATABASES",
      items: [
        "MySQL", "Oracle", "PostgreSQL", "MongoDB", "SQLite", "Redis", "MariaDB", "PL/SQL", "SQL Server",
        "MySQL", "Oracle", "PostgreSQL", "MongoDB", "SQLite", "Redis", "MariaDB", "PL/SQL", "SQL Server",
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("POPULAR");

  const openCompiler = (language) => {
    // const languagePath = language.toLowerCase().replace("+", "p");
    const languagePath = language.toLowerCase();
    // const languagePath = language;
    navigate(`/compiler/${languagePath}`);
  };

  return (
    <div className="homepage-container">
      <header className="header">
        <h1>
          Code online with <span className="highlight">CodeSphere.</span>
        </h1>
        <p>Code Sphere is here to help you Write & Compile your Code online.</p>
        <input
          type="text"
          className="search-bar"
          placeholder="Search by Language/DB/Template etc."
        />
      </header>

      <div className="category-buttons">
        {languages.map((category, index) => (
          <button
            key={index}
            className={`category-button ${
              selectedCategory === category.category ? "active" : ""
            }`}
            onClick={() =>
              setSelectedCategory(
                selectedCategory === category.category
                  ? null
                  : category.category
              )
            }
          >
            {category.category}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="category-box">
          {languages
            .find((cat) => cat.category === selectedCategory)
            .items.map((item, idx) => (
              <button
                key={idx}
                className="language-item"
                onClick={() => openCompiler(item)}
              >
                {languageIcons[item] || defaultIcon} {item}
              </button>
            ))}
        </div>
      )}

      <footer className="footer">
        <a href="https://www.linkedin.com/">LinkedIn</a>
        <a href="https://twitter.com/">Twitter</a>
        <a href="https://www.instagram.com/">Instagram</a>
        <a href="mailto:example@example.com">Mail</a>
        <a href="https://github.com">GitHub</a>
      </footer>
    </div>
  );
}

export default HomePage;

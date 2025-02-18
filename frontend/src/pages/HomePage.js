import React, { useState } from "react";
import "./HomePage.css";

function HomePage() {
  const languages = [
    {
      category: "POPULAR",
      items: [
        "HTML",
        "Python",
        "C++",
        "Java",
        "MySQL",
        "JavaScript",
        "PHP",
        "Assembly",
        "C",
        "C#",
        "Lua",
        "PL/SQL",
        "NodeJS",
        "MongoDB",
        "Groovy",
        "Ruby",
      ],
    },
    {
      category: "PROGRAMMING",
      items: [
        "Java",
        "Python",
        "C",
        "C++",
        "Go",
        "NodeJS",
        "JavaScript",
        "Scala",
        "PHP",
        "Ruby",
        "R",
        "Perl",
        "C#",
        "Kotlin",
        "Pascal",
        "Cobol",
        "Lua",
        "Fortran",
        "Assembly",
        "Python2",
        "Groovy",
        "Bash",
        "Clojure",
        "TypeScript",
        "Prolog",
        "Rust",
        "Swift",
        "Objective-C",
        "CoffeeScript",
        "EJS",
      ],
    },
    {
      category: "WEB",
      items: [
        "HTML",
        "Materialize",
        "Bootstrap",
        "JQuery",
        "JavaScript",
        "CSS",
        "Foundation",
        "Bulma",
        "Uikit",
        "Semantic UI",
        "Skeleton",
        "Milligram",
        "React (Beta)",
        "Angular (Beta)",
        "Vue (Beta)",
        "Vue3 (Beta)",
        "BackboneJS",
      ],
    },
    {
      category: "DATABASES",
      items: [
        "MySQL",
        "Oracle",
        "PostgreSQL",
        "MongoDB",
        "SQLite",
        "Redis",
        "MariaDB",
        "PL/SQL",
        "SQL Server",
      ],
    },
  ];

  // Default category set to "POPULAR"
  const [selectedCategory, setSelectedCategory] = useState("POPULAR");

  const openCompiler = (language) => {
    window.location.href = `/compiler?lang=${language}`;
  };

  return (
    <div className="homepage-container">
      <header className="header">
        <h1>
          Code online with <span className="highlight">Code Sphere.</span>
        </h1>
        <p>Code Sphere is here to help you write code online.</p>
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
                {item}
              </button>
            ))}
        </div>
      )}

      <footer className="footer">
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
        <a href="#">Mail</a>
        <a href="#">GitHub</a>
      </footer>
    </div>
  );
}

export default HomePage;

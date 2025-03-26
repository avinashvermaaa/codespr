import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaInstagram, FaXTwitter, FaLinkedin, FaGithub, FaSnapchat, FaPython, FaHtml5, FaCode, FaJava, FaDatabase, FaJs, FaPhp, FaLeaf, FaNode, FaGem, FaTerminal } from "react-icons/fa6";
import "./HomePage.css";

// Language-icon mapping using react-icons/fa6
const languageIcons = {
  Python: <FaPython style={{ color: "#306998" }} />,
  HTML: <FaHtml5 style={{ color: "#E34F26" }} />,
  CPP: <FaCode style={{ color: "#00599C" }} />,
  Java: <FaJava style={{ color: "#5382a1" }} />,
  MySQL: <FaDatabase style={{ color: "#00758F" }} />,
  JavaScript: <FaJs style={{ color: "#F7DF1E" }} />,
  PHP: <FaPhp style={{ color: "#8892BF" }} />,
  MongoDB: <FaLeaf style={{ color: "#47A248" }} />,
  NodeJS: <FaNode style={{ color: "#43853D" }} />,
  Ruby: <FaGem style={{ color: "#CC342D" }} />,
  Bash: <FaTerminal style={{ color: "#4EAA25" }} />,
  SQLite: <FaDatabase style={{ color: "#003B57" }} />,
  Redis: <FaDatabase style={{ color: "#DC382D" }} />,
};

const defaultIcon = <FaCode style={{ color: "#808080" }} />;

function HomePage() {
  const navigate = useNavigate();
  const [hoveredIcon, setHoveredIcon] = useState(null);
  
  const socialIcons = [
    { component: FaLinkedin, link: "https://www.linkedin.com/in/avinash-verma-20946b21b/" },
    { component: FaXTwitter, link: "https://x.com/im_ak47_" },
    { component: FaInstagram, link: "https://www.instagram.com/avinash_vermaa" },
    { component: FaGithub, link: "https://github.com" },
    { component: FaEnvelope, link: "mailto:example@example.com" },
    { component: FaSnapchat, link: "mailto:example@example.com" },
  ];

  const languages = [
    {
      category: "POPULAR",
      items: [
        "C", "Python", "Cpp", "Java", "MySQL", "HTML", "JavaScript", "PHP", "Assembly", "C#", "Lua", "SQL",
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
        "MySQL", "Oracle", "PostgreSQL", "MongoDB", "SQLite", "Redis", "MariaDB", "SQL", "SQL Server",
        "MySQL", "Oracle", "PostgreSQL", "MongoDB", "SQLite", "Redis", "MariaDB", "SQL", "SQL Server",
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("POPULAR");
  const [searchQuery, setSearchQuery] = useState("");

  const openCompiler = (language) => {
    // const languagePath = language.toLowerCase().replace("+", "p");
    const languagePath = language.toLowerCase();
    // const languagePath = language;
    navigate(`/compiler/${languagePath}`);
  };

  const filteredLanguages = searchQuery
    ? languages
        .flatMap((category) => category.items)
        .filter((lang) =>
          lang.toLowerCase().includes(searchQuery.toLowerCase())
        )
    : languages.find((cat) => cat.category === selectedCategory)?.items || [];

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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </header>

      <div className="category-buttons">
        {languages.map((category, index) => (
          <button
            key={index}
            className={`category-button ${
              selectedCategory === category.category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category.category)} // category son't collapse on double click
          >
            {category.category}
          </button>
        ))}
      </div>

      <div className="category-box">
        {filteredLanguages.map((item, idx) => (
          <button
            key={idx}
            className="language-item"
            onClick={() => openCompiler(item)}
          >
            {languageIcons[item] || defaultIcon} {item}
          </button>
        ))}
      </div>

      <footer style={styles.footer}>
        {socialIcons.map(({ component: Icon, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredIcon(index)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <Icon
              style={{
                ...styles.icon,
                color: hoveredIcon === index ? "#ffcc00" : "white",
              }}
            />
          </a>
        ))}
      </footer>
    </div>
  );
}

const styles = {
  footer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
    backgroundColor: "#007bff",
  },
  icon: {
    fontSize: "24px",
    color: "white",
    transition: "color 0.3s",
    cursor: "pointer",
  },
};

export default HomePage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaInstagram, FaXTwitter, FaLinkedin, FaGithub, FaSnapchat, FaPython, FaHtml5, FaCode, FaJava, FaDatabase, FaJs, FaPhp, FaNode, FaGem, FaTerminal, FaC, FaCss3Alt, FaReact, FaAngular, FaVuejs, FaBootstrap, FaDocker } from "react-icons/fa6";
import { SiCplusplus, SiMysql, SiSqlite ,SiOracle ,SiMongodb, SiPostgresql, SiMariadb, SiTypescript, SiKotlin, SiLua, SiGo, SiR, SiPerl, SiScala, SiFortran, SiHaskell, SiFsharp, SiClojure, SiDart, SiElixir, SiErlang, SiRust,  SiSwift } from "react-icons/si";

import "./HomePage.css";

// Language-icon mapping using react-icons/fa6
const languageIcons = {
  Python: <FaPython style={{ color: "#306998" }} />,
  HTML: <FaHtml5 style={{ color: "#E34F26" }} />,
  C: <FaC style={{ color: "#00599C" }} />,
  Cpp: <SiCplusplus style={{ color: "#00599C" }} />,
  Java: <FaJava style={{ color: "#5382a1" }} />,
  MySQL: <SiMysql style={{ color: "#00758F" }} />,
  JavaScript: <FaJs style={{ color: "#F7DF1E" }} />,
  PHP: <FaPhp style={{ color: "#8892BF" }} />,
  MongoDB: <SiMongodb style={{ color: "#47A248" }} />,
  NodeJS: <FaNode style={{ color: "#43853D" }} />,
  Ruby: <FaGem style={{ color: "#CC342D" }} />,
  Bash: <FaTerminal style={{ color: "#4EAA25" }} />,
  SQL: <FaDatabase style={{ color: "#003B57" }} />,
  SQLite: <SiSqlite style={{ color: "#003B57" }} />,
  Oracle: <SiOracle style={{ color: "DC382D" }} />,
  SQLServer: <FaDatabase style={{ color: "#003B57" }} />,
  Redis: <FaDatabase style={{ color: "#DC382D" }} />,
  Go: <SiGo style={{ color: "#00ADD8" }} />,
  Rust: <SiRust style={{ color: "#DEA584" }} />,
  Swift: <SiSwift style={{ color: "#FA7343" }} />,
  CSS: <FaCss3Alt style={{ color: "#1572B6" }} />,
  React: <FaReact style={{ color: "#61DAFB" }} />,
  Angular: <FaAngular style={{ color: "#DD0031" }} />,
  Vue: <FaVuejs style={{ color: "#42B883" }} />,
  Vue3: <FaVuejs style={{ color: "#42B883" }} />,
  Bootstrap: <FaBootstrap style={{ color: "#7952B3" }} />,
  TypeScript: <SiTypescript style={{ color: "#007ACC" }} />,
  PostgreSQL: <SiPostgresql style={{ color: "#336791" }} />,
  MariaDB: <SiMariadb style={{ color: "#003545" }} />,
  Kotlin: <SiKotlin style={{ color: "#0095D5" }} />,
  Lua: <SiLua style={{ color: "#000080" }} />,
  R: <SiR style={{ color: "#276DC3" }} />,
  Perl: <SiPerl style={{ color: "#39457E" }} />,
  Scala: <SiScala style={{ color: "#DC322F" }} />,
  Fortran: <SiFortran style={{ color: "#734F96" }} />,
  Haskell: <SiHaskell style={{ color: "#5D4F85" }} />,
  FSharp: <SiFsharp style={{ color: "#378BBA" }} />,
  Clojure: <SiClojure style={{ color: "#5881D8" }} />,
  Dart: <SiDart style={{ color: "#0175C2" }} />,
  Elixir: <SiElixir style={{ color: "#4B275F" }} />,
  Erlang: <SiErlang style={{ color: "#A90533" }} />,
  yaml : <FaDocker  style={{ color: "skyblue" }} />, // Using generic code icon for YAML
  // ObjectiveC: <SiObjectivec style={{ color: "#43853D" }} />,
};

const defaultIcon = <FaCode style={{ color: "#808080" }} />;

function HomePage() {
  const navigate = useNavigate();
  const [hoveredIcon, setHoveredIcon] = useState(null);
  
  const socialIcons = [
    { component: FaLinkedin, link: "https://www.linkedin.com/in/avinash-verma-20946b21b/" },
    { component: FaEnvelope, link: "mailto:code6969nation@gmail.com" },
    { component: FaInstagram, link: "https://www.instagram.com/avinash_vermaa" },
    { component: FaGithub, link: "https://github.com" },
    { component: FaXTwitter, link: "https://x.com" },
    { component: FaSnapchat, link: "mailto:example@example.com" },
  ];

  const languages = [
    {
      category: "Working",
      items: [
        "Java", "C", "Python", "Cpp", "JavaScript", "PHP", "Rust",
      ],
    },
    {
      category: "POPULAR",
      items: [
        "C", "Python", "Cpp", "Java", "MySQL", "HTML", "JavaScript", "TypeScript", "Perl", "Fortran", "PHP", "SQL",
        "NodeJS", "MongoDB", "Kotlin", "Ruby", "Rust", "Swift", "Bash", "Redis",
      ],
    },
    {
      category: "PROGRAMMING",
      items: [
        "Java", "Python", "C", "Cpp", "Go", "Rust", "PHP", "JavaScript", "NodeJS", "Scala", "Ruby", "R", 
        "Kotlin", "Pascal", "Cobol", "Lua", "Fortran", "Assembly", "Groovy", "Bash", "Clojure", "Perl", "C#",
        "TypeScript", "Prolog", "Swift", "Objective-C", "CoffeeScript", "EJS",
      ],
    },
    {
      category: "WEB",
      items: [
        "HTML", "CSS", "JavaScript", "JSON", "XML", "Angular", "Vue", "yaml",  
        "markdown", "Vue3", "Materialize", "Bootstrap", "JQuery",  "Foundation", "Bulma", "Uikit",
        "Semantic UI", "Skeleton", "Milligram", "React", "BackboneJS", 
      ],
    },
    {
      category: "DATABASES",
      items: [
        "MySQL", "Oracle", "PostgreSQL", "SQL", "MongoDB", "SQLite", "Redis", "MariaDB",  "SQLServer",
        "MySQL", "Oracle", "PostgreSQL", "SQL", "MongoDB", "SQLite", "Redis", "MariaDB",  "SQLServer",
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Working");
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
            <span className="saffron">Code</span>{' '}
            <span className="white">online</span>{' '} 
            <span className="green">with</span>{' '} 
            <span className="highlight-blue">CodeSphere.</span>
          </h1>

        <p>CodeSphere is here to help you Write & Compile your Codes online.</p>
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
            onClick={() => setSelectedCategory(category.category)} // category shouldn't collapse on double click
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
      
<h1> Choose from a vast collection of languages</h1>

{/* Marquee Section :- web Animation 1*/}
<div id="moving-animation">
    <div className="marque-wrapper">
        <div className="marque">
          {/* Dynamically load images from the public/marque folder */}
            {["angular","bootstrap","coffeescript","css","django","git","github","html","javascript","jquery","json","nodejs","npm","reactjs","redis","typescript","yarn"].map((imgName, index) => (
              <img
              key={index}
              src={`./marque/web/${imgName}.png`} 
              alt={imgName}
              className="logo"
              />
            ))}
        </div>
        {/* for infinite repeat */}
        <div className="marque">
            {["angular","bootstrap","coffeescript","css","django","git","github","html","javascript","jquery","json","nodejs","npm","reactjs","redis","typescript","yarn"].map((imgName, index) => (
              <img
                key={index}
                src={`./marque/web/${imgName}.png`} 
                alt={imgName}
                className="logo"
              />
            ))}
        </div>
    </div>
</div>

{/* Marquee Section :- db Animation 2*/}
<div id="moving-animation">
    <div className="marque-wrapper">
        <div className="marque">
          {/* Dynamically load images from the public/marque folder */}
            {["apache","cassandra","docker","graphql","magento","mariadb","mongodb","mysql","neo4j","oracle","postgresql","redis","sql","sqlserver"].map((imgName, index) => (
              <img
              key={index}
              src={`./marque/db/${imgName}.png`} 
              alt={imgName}
              className="logo"
              />
            ))}
        </div>
        {/* for infinite repeat */}
        <div className="marque">
            {["apache","cassandra","docker","graphql","magento","mariadb","mongodb","mysql","neo4j","oracle","postgresql","redis","sql","sqlserver"].map((imgName, index) => (
              <img
                key={index}
                src={`./marque/db/${imgName}.png`} 
                alt={imgName}
                className="logo"
              />
            ))}
        </div>
    </div>
</div>

<h1> Trusted and Used by Global Leaders</h1>

{/* Marquee Section :- Company Animation 3*/}
<div id="moving-animation">
    <div className="marque-wrapper">
        <div className="marque">
          {/* Dynamically load images from the public/marque folder */}
            {["aws","fb","google","insta","meta","snap","whs","x","yt"].map((imgName, index) => (
              <img
              key={index}
              src={`./marque/company/${imgName}.png`} 
              alt={imgName}
              className="logo"
              />
            ))}
        </div>
        {/* for infinite repeat */}
        <div className="marque">
            {["aws","fb","google","insta","meta","snap","whs","x","yt"].map((imgName, index) => (
              <img
                key={index}
                src={`./marque/company/${imgName}.png`} 
                alt={imgName}
                className="logo"
              />
            ))}
        </div>
    </div>
</div>

{/* Footer Section */}
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
                color: hoveredIcon === index ? "red" : "#007bff",
              }}
            />
          </a>
        ))}
        <p style={styles.footerText}>| Made with 💙 in India.</p>
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
    backgroundColor: "transparent",
  },
  icon: {
    fontSize: "36px",
    color: "white",
    transition: "color 0.3s",
    cursor: "pointer",
  },
  footerText: {
  margin: 0,
  alignSelf: "center",
  fontSize: "16px",
  color: "white", // or any other color you prefer
  },

};

export default HomePage;

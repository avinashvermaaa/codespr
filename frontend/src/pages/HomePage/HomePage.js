import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPython, FaHtml5, FaCode, FaJava, FaDatabase, FaJs, FaPhp, FaNode, FaGem, FaTerminal, FaC, FaCss3Alt, FaReact, FaAngular, FaVuejs, FaBootstrap, FaDocker } from "react-icons/fa6";
import { SiCplusplus, SiMysql, SiSqlite, SiOracle, SiMongodb, SiPostgresql, SiMariadb, SiTypescript, SiKotlin, SiLua, SiGo, SiR, SiPerl, SiScala, SiFortran, SiHaskell, SiFsharp, SiClojure, SiDart, SiElixir, SiErlang, SiRust, SiSwift } from "react-icons/si";

import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import Stats from '../../components/Stats/Stats';
import Footer from '../../components/footer/Footer'; 
import Mq from '../../components/Mq/Mq';

import LaserFlow from '../../components/Laserflow/LaserFlow';

// Language Icon Mapping
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
  Oracle: <SiOracle style={{ color: "#DC382D" }} />,
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
  yaml: <FaDocker style={{ color: "skyblue" }} />,
};

const defaultIcon = <FaCode style={{ color: "#808080" }} />;

function HomePage() {
  const navigate = useNavigate();

  const languages = [
    {
      category: "Working",
      items: [
        "Java", "C", "Python", "Cpp", "JavaScript", "PHP", "Rust","R","SQL",
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
        "markdown", "Vue3", "Materialize", "Bootstrap", "JQuery", "Foundation", "Bulma", "Uikit",
        "Semantic UI", "Skeleton", "Milligram", "React", "BackboneJS",
      ],
    },
    {
      category: "DATABASES",
      items: [
        "MySQL", "Oracle", "PostgreSQL", "SQL", "MongoDB", "SQLite", "Redis", "MariaDB", "SQLServer"
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Working");
  const [searchQuery, setSearchQuery] = useState("");

  const openCompiler = (language) => {
    const languagePath = language.toLowerCase();
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
    <div className="homepage-container" id="home">
      <Navbar />
      <header className="header">

        <h1>
          <span className="saffron">An</span>{' '}
          <span className="white">Ai</span>{' '}
          <span className="green">Integrated</span>{' '}
          <span className="highlight-blue">IDE</span>{' '}
          <span className="gradient">for Faster Development.</span>
        </h1>
        <div className="banner">
          <h1 className="banner-text">Code <span className="gradient">online with</span> <span className="gradient"> CodeSphere.</span></h1>
        </div>


        <input
          id="compiler"
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
            className={`category-button ${selectedCategory === category.category ? "active" : ""
              }`}
            onClick={() => setSelectedCategory(category.category)} 
          >
            {category.category}
          </button>
        ))}
      </div>

        <LaserFlow horizontalBeamOffset={0.435} verticalBeamOffset={0.2} color="#c0b0b9ff" />

      <div className="category-box">
        {filteredLanguages.map((item, idx) => (
          <button
            key={idx}
            className="language-item"
            onClick={() => openCompiler(item)}
          >
            {item} {languageIcons[item] || defaultIcon}
          </button>
        ))}
      </div>



      <Stats />
      <Mq id="collection"/>
      <Footer id="connect" />
    </div>
  );
}

export default HomePage;
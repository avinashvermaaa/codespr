import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaInstagram, FaXTwitter, FaLinkedin, FaGithub, FaSnapchat, FaPython, FaHtml5, FaCode, FaJava, FaDatabase, FaJs, FaPhp, FaNode, FaGem, FaTerminal, FaC, FaCss3Alt, FaReact, FaAngular, FaVuejs, FaBootstrap, FaDocker } from "react-icons/fa6";
import { SiCplusplus, SiMysql, SiSqlite ,SiOracle ,SiMongodb, SiPostgresql, SiMariadb, SiTypescript, SiKotlin, SiLua, SiGo, SiR, SiPerl, SiScala, SiFortran, SiHaskell, SiFsharp, SiClojure, SiDart, SiElixir, SiErlang, SiRust,  SiSwift } from "react-icons/si";

import "./HomePage.css";
import Navbar from "../components/Navbar";
// import "./components/Navbar.css";
import Stats from '../components/Stats'; // Adjust path if needed



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
  yaml : <FaDocker  style={{ color: "skyblue" }} />, 
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
      <Navbar /> 
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
      
<Stats />
<h1 class="trusted-heading"> Choose from an extensive library of languages</h1>

{/* Marquee Section :- web Animation 1*/}
<div id="moving-animation">
    <div className="marque-wrapper">
        <div className="marque-left">
          {/* Dynamically load images from the public/marque folder */}
            {["html","css","javascript","reactjs","nodejs","expressjs","nextjs","typescript","angular","bootstrap","coffeescript","django","git","github","npm","redis","yarn"].map((imgName, index) => (
              <img
              key={index}
              src={`./marque/web/${imgName}.png`} 
              alt={imgName}
              className="logo"
              />
            ))}
        </div>
        {/* for infinite repeat */}
        <div className="marque-left">
            {["html","css","javascript","reactjs","nodejs","expressjs","nextjs","typescript","angular","bootstrap","coffeescript","django","git","github","npm","redis","yarn"].map((imgName, index) => (
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

{/* Marquee Section :- db & devops Animation 2*/}
<div id="moving-animation-db-devops">
    <div className="marque-wrapper-db-devops">
        <div className="marque-right">
          {/* Dynamically load images from the public/marque folder */}
            {["aws","gcp","docker","kubernetes","mongodb","apache","cassandra","graphql","magento","mariadb","mysql","neo4j","oracle","postgresql","redis","sql","sqlserver"].map((imgName, index) => (
              <img
              key={index}
              src={`./marque/db/${imgName}.png`} 
              alt={imgName}
              className="logo-db-devops"
              />
            ))}
        </div>
        {/* for infinite repeat */}
        <div className="marque-right">
            {["aws","gcp","docker","kubernetes","mongodb","apache","cassandra","graphql","magento","mariadb","mysql","neo4j","oracle","postgresql","redis","sql","sqlserver"].map((imgName, index) => (
              <img
                key={index}
                src={`./marque/db/${imgName}.png`} 
                alt={imgName}
                className="logo-db-devops"
              />
            ))}
        </div>
    </div>
</div>

{/* Marquee Section :- Progamming Animation 3*/}
<div id="moving-animation">
    <div className="marque-wrapper">
        <div className="marque-left">
          {/* Dynamically load images from the public/marque folder */}
            {["java","cpp","python","php","rust","javascript","typescript",].map((imgName, index) => (
              <img
              key={index}
              src={`./marque/prog/${imgName}.png`} 
              alt={imgName}
              className="logo"
              />
            ))}
        </div>
        {/* for infinite repeat */}
        <div className="marque-left">
            {["java","cpp","python","php","rust","javascript","typescript",].map((imgName, index) => (
              <img
                key={index}
                src={`./marque/prog/${imgName}.png`} 
                alt={imgName}
                className="logo"
              />
            ))}
        </div>
    </div>
</div>

<h1 class="trusted-heading">Trusted and used by employees of global leaders</h1>

{/* Marquee Section :- Company Animation 4*/}
<div id="moving-animation-db-devops">
    <div className="marque-wrapper-db-devops">
        <div className="marque-right">
          {/* Dynamically load images from the public/marque folder */}
            {["aws","gcp","fb","google","insta","meta","snap","whs","x","yt"].map((imgName, index) => (
              <img
              key={index}
              src={`./marque/company/${imgName}.png`} 
              alt={imgName}
              className="logo-db-devops"
              />
            ))}
        </div>
        {/* for infinite repeat */}
        <div className="marque-right">
            {["aws","gcp","fb","google","insta","meta","snap","whs","x","yt"].map((imgName, index) => (
              <img
                key={index}
                src={`./marque/company/${imgName}.png`} 
                alt={imgName}
                className="logo-db-devops"
              />
            ))}
        </div>
    </div>
</div>


<footer class="footer-container">
  <div class="footer-grid">
    {/* <!-- Column 1: Codesphere --> */}
    <div class="footer-column">
      <h4 class="footer-title">CodeSphere</h4>
      <ul class="footer-list">
        <li><a href="https://codespr.netlify.app">CodeSphere</a></li>
        <li><a href="https://codespr.netlify.app">About</a></li>
        <li><a href="https://codespr.netlify.app">Use Cases</a></li>
        <li><a href="https://codespr.netlify.app">Contact</a></li>
      </ul>

      <h4 class="footer-title">Users</h4>
      <ul class="footer-list">
        <li><a href="https://codespr.netlify.app">Status</a></li>
        <li><a href="https://codespr.netlify.app">Pricing</a></li>
        <li><a href="https://codespr.netlify.app">Refund Policy</a></li>
      </ul>
    </div>

    {/* <!-- Column 2: Languages --> */}
    <div class="footer-column">
      <h4 class="footer-title">Languages</h4>
      <ul class="footer-list two-column">
        <li><a href="https://codespr.netlify.app">Java</a></li>
        <li><a href="https://codespr.netlify.app">Python</a></li>
        <li><a href="https://codespr.netlify.app">C</a></li>
        <li><a href="https://codespr.netlify.app">C++</a></li>
        <li><a href="https://codespr.netlify.app">NodeJS</a></li>
        <li><a href="https://codespr.netlify.app">JavaScript</a></li>
        <li><a href="https://codespr.netlify.app">Groovy</a></li>
        <li><a href="https://codespr.netlify.app">JShell</a></li>
        <li><a href="https://codespr.netlify.app">Haskell</a></li>
        <li><a href="https://codespr.netlify.app">Tcl</a></li>
        <li><a href="https://codespr.netlify.app">Lua</a></li>
        <li><a href="https://codespr.netlify.app">Ada</a></li>
        <li><a href="https://codespr.netlify.app">CommonLisp</a></li>
        <li><a href="https://codespr.netlify.app">D</a></li>
        <li><a href="https://codespr.netlify.app">Elixir</a></li>
        <li><a href="https://codespr.netlify.app">Erlang</a></li>
        <li><a href="https://codespr.netlify.app">F#</a></li>
        <li><a href="https://codespr.netlify.app">Fortran</a></li>
        <li><a href="https://codespr.netlify.app">Assembly</a></li>
        <li><a href="https://codespr.netlify.app">Scala</a></li>
        <li><a href="https://codespr.netlify.app">PHP</a></li>
        <li><a href="https://codespr.netlify.app">Python2</a></li>
        <li><a href="https://codespr.netlify.app">C#</a></li>
        <li><a href="https://codespr.netlify.app">Perl</a></li>
        <li><a href="https://codespr.netlify.app">Ruby</a></li>
        <li><a href="https://codespr.netlify.app">Go</a></li>
        <li><a href="https://codespr.netlify.app">R</a></li>
        <li><a href="https://codespr.netlify.app">Racket</a></li>
        <li><a href="https://codespr.netlify.app">OCaml</a></li>
        <li><a href="https://codespr.netlify.app">Visual Basic</a></li>
        <li><a href="https://codespr.netlify.app">Basic</a></li>
        <li><a href="https://codespr.netlify.app">HTML</a></li>
        <li><a href="https://codespr.netlify.app">Materialize</a></li>
        <li><a href="https://codespr.netlify.app">Bootstrap</a></li>
        <li><a href="https://codespr.netlify.app">JQuery</a></li>
        <li><a href="https://codespr.netlify.app">Foundation</a></li>
        <li><a href="https://codespr.netlify.app">Bulma</a></li>
        <li><a href="https://codespr.netlify.app">Uikit</a></li>
        <li><a href="https://codespr.netlify.app">Semantic UI</a></li>
        <li><a href="https://codespr.netlify.app">Skeleton</a></li>
        <li><a href="https://codespr.netlify.app">Milligram</a></li>
        <li><a href="https://codespr.netlify.app">PaperCSS</a></li>
        <li><a href="https://codespr.netlify.app">BackboneJS</a></li>
        <li><a href="https://codespr.netlify.app">React</a></li>
        <li><a href="https://codespr.netlify.app">Vue</a></li>
        <li><a href="https://codespr.netlify.app">Angular</a></li>
        <li><a href="https://codespr.netlify.app">Bash</a></li>
        <li><a href="https://codespr.netlify.app">Clojure</a></li>
        <li><a href="https://codespr.netlify.app">TypeScript</a></li>
        <li><a href="https://codespr.netlify.app">Cobol</a></li>
        <li><a href="https://codespr.netlify.app">Kotlin</a></li>
        <li><a href="https://codespr.netlify.app">Pascal</a></li>
        <li><a href="https://codespr.netlify.app">Prolog</a></li>
        <li><a href="https://codespr.netlify.app">Rust</a></li>
        <li><a href="https://codespr.netlify.app">Swift</a></li>
        <li><a href="https://codespr.netlify.app">Objective-C</a></li>
        <li><a href="https://codespr.netlify.app">Octave</a></li>
        <li><a href="https://codespr.netlify.app">Text</a></li>
        <li><a href="https://codespr.netlify.app">BrainFK</a></li>
        <li><a href="https://codespr.netlify.app">CoffeeScript</a></li>
        <li><a href="https://codespr.netlify.app">EJS</a></li>
        <li><a href="https://codespr.netlify.app">Dart</a></li>
        <li><a href="https://codespr.netlify.app">Deno</a></li>
        <li><a href="https://codespr.netlify.app">Bun</a></li>
        <li><a href="https://codespr.netlify.app">MySQL</a></li>
        <li><a href="https://codespr.netlify.app">Oracle Db</a></li>
        <li><a href="https://codespr.netlify.app">PostgreSQL</a></li>
        <li><a href="https://codespr.netlify.app">MongoDB</a></li>
        <li><a href="https://codespr.netlify.app">SQLite</a></li>
        <li><a href="https://codespr.netlify.app">Redis</a></li>
        <li><a href="https://codespr.netlify.app">MariaDB</a></li>
        <li><a href="https://codespr.netlify.app">Cassandra</a></li>
        <li><a href="https://codespr.netlify.app">PL/SQL</a></li>
        <li><a href="https://codespr.netlify.app">SQL Server</a></li>
      </ul>
    </div>

    {/* <!-- Column 3: More --> */}
    <div class="footer-column">
      <h4 class="footer-title">More</h4>
      <ul class="footer-list">
        <li><a href="https://codespr.netlify.app">Orgs</a></li>
        <li><a href="https://codespr.netlify.app">API</a></li>
        <li><a href="https://codespr.netlify.app">Pricing</a></li>
      </ul>

      <ul class="footer-list">
        <li><a href="https://codespr.netlify.app">Cheatsheets</a></li>
        <li><a href="https://codespr.netlify.app">Tutorials</a></li>
        <li><a href="https://codespr.netlify.app">Tools</a></li>
        <li><a href="https://codespr.netlify.app">Stats</a></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    © 2025 CodeSphere Pvt. Ltd. | <a href="https://codespr.netlify.app">Privacy Policy</a> | <a href="https://codespr.netlify.app">Terms & Conditions</a>
  </div>
  
  </footer>

  <div>
      <div className="footers"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "35px",
          padding: "20px",
          backgroundColor: "transparent",
          flexWrap: "wrap",  
          alignItems: "center",
        }}
      >
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
                fontSize: "32px",
                color: hoveredIcon === index ? "#138808" : "#FF9933",
                transition: "color 0.3s",
                cursor: "pointer",
              }}
            />
          </a>
        ))}
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            margin: 0,
            fontSize: "24px",
            color: "#FF9933",
            flexWrap: "wrap",  
            justifyContent: "center",  
            width: "100%",  
            textAlign: "center",  
          }}
        >
          <span> Made with 💙 in India.</span>
        </p>
      </div>
    </div>
  
</div> 


  );
}

export default HomePage;

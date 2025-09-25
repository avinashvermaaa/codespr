import React, { useState } from 'react';
import './Footer.css'; 
import { FaLinkedin, FaEnvelope, FaInstagram, FaGithub, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

  const socialIcons = [
    { component: FaLinkedin, link: "https://www.linkedin.com/in/avinash-verma-20946b21b/" },
    { component: FaEnvelope, link: "mailto:code6969nation@gmail.com" },
    { component: FaInstagram, link: "https://www.instagram.com/avinash_vermaa" },
    { component: FaGithub, link: "https://github.com" },
    { component: FaXTwitter, link: "https://x.com" },
  ];

const Languages = [
  "Java","Python","C","C++", "NodeJs", "JavaScript", "Groovy", "JShell", 
  "Haskell", "Tcl", "Lua", "Ada", "CommonLisp", "D", "Elixir", "Erlang", 
  "F#", "Fortran", "Assembly", "Scala", "PHP", "Python2", "C#", "Perl", 
  "Ruby", "Go", "R", "Racket", "OCaml", "Visual Basic", "Basic", "HTML", 
  "Materialize", "Bootstrap", "JQuery", "Foundation", "Bulma", "Uikit", "Semantic UI", "Skeleton", 
  "Milligram", "PaperCSS", "BackboneJS", "React", "Vue", "Angular", "Bash", "Clojure", 
  "TypeScript", "Cobol", "Kotlin", "Pascal", "Prolog", "Rust", "Swift", "Objective-C", 
  "Octave", "Text", "BrainFK", "CoffeeScript", "EJS", "Dart", "Deno", "Bun", 
  "MySQL", "Oracle Db", "PostgreSQL", "MongoDB", "SQLite", "Redis", "MariaDB", "Cassandra", 
  "PL/SQL", "SQL Server"
];

const slugify = (str) =>
str
  .toLowerCase()
  // Remove spaces
  .replace(/\s+/g, '')          
  // Remove non-alphanumerics
  .replace(/[^a-z0-9]/g, '');   


const Footer = ({id}) => {
  const [openSections, setOpenSections] = useState({
    codesphere: false,
    users: false,
    languages: false,
    more: false,
    cheatsheets: false,
  });

  const [hoveredIcon, setHoveredIcon] = useState(null);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div id={id}>
      <footer className="footer-container">
        <div className="footer-grid">
          {/* Codesphere Section */}
          <div className="footer-column">
            <h4 className="footer-title" onClick={() => toggleSection('codesphere')}>CodeSphere {openSections.codesphere ? '▼' : '▶'}</h4>
            <ul className={`footer-list ${openSections.codesphere ? 'active' : ''}`}>
              <li><a href="https://codespr.netlify.app">CodeSphere</a></li>
              <li><a href="https://codespr.netlify.app">About</a></li>
              <li><a href="https://codespr.netlify.app">Use Cases</a></li>
              <li><a href="https://codespr.netlify.app">Contact</a></li>
            </ul>

            <h4 className="footer-title" onClick={() => toggleSection('users')}>Users {openSections.users ? '▼' : '▶'}</h4>
            <ul className={`footer-list ${openSections.users ? 'active' : ''}`}>
              <li><a href="https://codespr.netlify.app">Status</a></li>
              <li><a href="https://codespr.netlify.app">Pricing</a></li>
              <li><a href="https://codespr.netlify.app">Refund Policy</a></li>
            </ul>
          </div>


          {/* Languages Section */}
          <div className="footer-column">
            <h4 className="footer-title" onClick={() => toggleSection('languages')}>Languages {openSections.languages ? '▼' : '▶'}</h4>
            <ul className={`footer-list two-column ${openSections.languages ? 'active' : ''}`}>
              
              {Languages.map((tool, idx) => (
                <li key={idx}>
                  <Link to={`/compiler/${slugify(tool)}`}>{tool}</Link>
                </li>
              ))}

            </ul>
          </div>

          {/* More Section */}
          <div className="footer-column">
            <h4 className="footer-title" onClick={() => toggleSection('more')}>More {openSections.more ? '▼' : '▶'}</h4>
            <ul className={`footer-list ${openSections.more ? 'active' : ''}`}>
              <li><a href="https://codespr.netlify.app">Orgs</a></li>
              <li><a href="https://codespr.netlify.app">API</a></li>
              <li><a href="https://codespr.netlify.app">Pricing</a></li>
            </ul>

            <h4 className="footer-title" onClick={() => toggleSection('cheatsheets')}>Cheatsheets {openSections.cheatsheets ? '▼' : '▶'}</h4>
            <ul className={`footer-list ${openSections.cheatsheets ? 'active' : ''}`}>
              <li><a href="https://codespr.netlify.app">Cheatsheets</a></li>
              <li><a href="https://codespr.netlify.app">Tutorials</a></li>
              <li><a href="https://codespr.netlify.app">Tools</a></li>
              <li><a href="https://codespr.netlify.app">Stats</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 CodeSphere Pvt. Ltd. |{' '}
          <a href="https://codespr.netlify.app">Privacy Policy</a> |{' '}
          <a href="https://codespr.netlify.app">Terms & Conditions</a>
        </div>
      </footer>

      {/* Social Icons and Footer Text */}
      <div className="footers"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "35px",
          padding: "20px",
          backgroundColor: "black",
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
                color: hoveredIcon === index ? "#007bff" : "white",
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
            color: "white",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
            textAlign: "center",
          }}
        >
          <span>Made with 💙 in India.</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;

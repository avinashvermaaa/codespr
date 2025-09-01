import React, { useState } from 'react';
import './Footer.css'; // You’ll create this next
// import React from 'react';
import { FaLinkedin, FaEnvelope, FaInstagram, FaGithub, FaXTwitter, FaSnapchat } from 'react-icons/fa6';

  const socialIcons = [
    { component: FaLinkedin, link: "https://www.linkedin.com/in/avinash-verma-20946b21b/" },
    { component: FaEnvelope, link: "mailto:code6969nation@gmail.com" },
    { component: FaInstagram, link: "https://www.instagram.com/avinash_vermaa" },
    { component: FaGithub, link: "https://github.com" },
    { component: FaXTwitter, link: "https://x.com" },
    { component: FaSnapchat, link: "mailto:example@example.com" },
  ];


const Footer = () => {
  const [openSections, setOpenSections] = useState({
    codesphere: false,
    languages: false,
    more: false,
  });

  const [hoveredIcon, setHoveredIcon] = useState(null);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      <footer className="footer-container">
        <div className="footer-grid">
          {/* Codesphere Section */}
          <div className="footer-column">
            <h4 className="footer-title" onClick={() => toggleSection('codesphere')}>CodeSphere</h4>
            <ul className={`footer-list ${openSections.codesphere ? 'active' : ''}`}>
              <li><a href="https://codespr.netlify.app">CodeSphere</a></li>
              <li><a href="https://codespr.netlify.app">About</a></li>
              <li><a href="https://codespr.netlify.app">Use Cases</a></li>
              <li><a href="https://codespr.netlify.app">Contact</a></li>
            </ul>

            <h4 className="footer-title" onClick={() => toggleSection('users')}>Users</h4>
            <ul className={`footer-list ${openSections.users ? 'active' : ''}`}>
              <li><a href="https://codespr.netlify.app">Status</a></li>
              <li><a href="https://codespr.netlify.app">Pricing</a></li>
              <li><a href="https://codespr.netlify.app">Refund Policy</a></li>
            </ul>
          </div>


          {/* Languages Section */}
          <div className="footer-column">
            <h4 className="footer-title" onClick={() => toggleSection('languages')}>Languages</h4>
            <ul className={`footer-list two-column ${openSections.languages ? 'active' : ''}`}>
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

          {/* More Section */}
          <div className="footer-column">
            <h4 className="footer-title" onClick={() => toggleSection('more')}>More</h4>
            <ul className={`footer-list ${openSections.more ? 'active' : ''}`}>
              <li><a href="https://codespr.netlify.app">Orgs</a></li>
              <li><a href="https://codespr.netlify.app">API</a></li>
              <li><a href="https://codespr.netlify.app">Pricing</a></li>
            </ul>

            <h4 className="footer-title" onClick={() => toggleSection('cheatsheets')}>Cheatsheets</h4>
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
                color: hoveredIcon === index ? "#007bff" : "red",
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
            color: "#007bff",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
            textAlign: "center",
          }}
        >
          <span>Made with 💙 in India.</span>
        </p>
      </div>
    </>
  );
};

export default Footer;

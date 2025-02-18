import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      <header>
        <h1>
          Code online with <span className="brand-name">CodeSpr</span>.
        </h1>
        <p>CodeSpr is here to help you write and compile your code online.</p>
        <input
          type="text"
          placeholder="Search by Language/DB/Template etc."
          className="search-bar"
        />
      </header>

      <div className="categories">
        <div className="category">
          <h3>Popular</h3>
          <Link to="/compiler/html">HTML</Link>
          <Link to="/compiler/mysql">MySQL</Link>
          <Link to="/compiler/c">C</Link>
          <Link to="/compiler/nodejs">NodeJS</Link>
        </div>
        <div className="category">
          <h3>Programming</h3>
          <Link to="/compiler/python">Python</Link>
          <Link to="/compiler/cpp">C++</Link>
          <Link to="/compiler/javascript">JavaScript</Link>
          <Link to="/compiler/csharp">C#</Link>
        </div>
        <div className="category">
          <h3>Web</h3>
          <Link to="/compiler/php">PHP</Link>
          <Link to="/compiler/lua">Lua</Link>
          <Link to="/compiler/groovy">Groovy</Link>
        </div>
        <div className="category">
          <h3>Databases</h3>
          <Link to="/compiler/sql">SQL</Link>
          <Link to="/compiler/oracle">Oracle</Link>
          <Link to="/compiler/mongodb">MongoDB</Link>
        </div>
      </div>

      <footer>
        <p>Follow us on:</p>
        <div className="social-links">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;

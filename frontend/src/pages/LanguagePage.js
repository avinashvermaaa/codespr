import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Welcome to CodeSpr</h1>
      <h2>Categories</h2>
      <div>
        <h3>Programming Languages</h3>
        <ul>
          <li>
            <Link to="/compiler/cpp">C++</Link>
          </li>
          <li>
            <Link to="/compiler/python">Python</Link>
          </li>
          <li>
            <Link to="/compiler/java">Java</Link>
          </li>
        </ul>

        <h3>Web Development</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>

        <h3>Databases</h3>
        <ul>
          <li>SQL</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;

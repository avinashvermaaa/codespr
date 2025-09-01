import React from 'react';
import "./Mq.css";

const Mq = () => {
    return (
        <>
            {/* Banner Heading */}
            <div className="banner">
                <h2 className="banner-text">
                    <span className="gradient">Choose from an extensive</span>{' '}
                    <span className="gradient">library of languages</span>
                </h2>
            </div>

            {/* Animation Section 1: Web */}
            <div id="moving-animation">
                <div className="marque-wrapper">
                    <div className="marque-left">
                        {[
                            "html", "css", "javascript", "reactjs", "nodejs", "expressjs",
                            "nextjs", "typescript", "angular", "bootstrap", "coffeescript",
                            "django", "git", "github", "npm", "redis", "yarn"
                        ].map((imgName, index) => (
                            <img
                                key={index}
                                src={`./img/web/${imgName}.png`}
                                alt={imgName}
                                className="logo"
                            />
                        ))}
                    </div>
                    <div className="marque-left">
                        {[
                            "html", "css", "javascript", "reactjs", "nodejs", "expressjs",
                            "nextjs", "typescript", "angular", "bootstrap", "coffeescript",
                            "django", "git", "github", "npm", "redis", "yarn"
                        ].map((imgName, index) => (
                            <img
                                key={index}
                                src={`./img/web/${imgName}.png`}
                                alt={imgName}
                                className="logo"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Animation Section 2: DB & DevOps */}
            <div id="moving-animation-db-devops">
                <div className="marque-wrapper-db-devops">
                    <div className="marque-right">
                        {[
                            "aws", "gcp", "docker", "kubernetes", "mongodb", "apache",
                            "cassandra", "graphql", "magento", "mariadb", "mysql", "neo4j",
                            "oracle", "postgresql", "redis", "sql", "sqlserver"
                        ].map((imgName, index) => (
                            <img
                                key={index}
                                src={`./img/db/${imgName}.png`}
                                alt={imgName}
                                className="logo-db-devops"
                            />
                        ))}
                    </div>
                    <div className="marque-right">
                        {[
                            "aws", "gcp", "docker", "kubernetes", "mongodb", "apache",
                            "cassandra", "graphql", "magento", "mariadb", "mysql", "neo4j",
                            "docker", "oracle", "postgresql", "redis", "sql", "sqlserver"
                        ].map((imgName, index) => (
                            <img
                                key={index}
                                src={`./img/db/${imgName}.png`}
                                alt={imgName}
                                className="logo-db-devops"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Animation Section 3: Programming Languages */}
            <div id="moving-animation">
                <div className="marque-wrapper">
                    <div className="marque-left">
                        {[
                            "java", "cpp", "c", "python", "php", "rust", "swift", "ruby",
                            "go", "kotlin", "javascript", "perl", "r", "csharp", "typescript", "dart"
                        ].map((imgName, index) => (
                            <img
                                key={index}
                                src={`./img/prog/${imgName}.png`}
                                alt={imgName}
                                className="logo"
                            />
                        ))}
                    </div>
                    <div className="marque-left">
                        {[
                            "java", "cpp", "c", "python", "php", "rust", "swift", "ruby",
                            "go", "kotlin", "javascript", "perl", "r", "csharp", "typescript", "dart"
                        ].map((imgName, index) => (
                            <img
                                key={index}
                                src={`./img/prog/${imgName}.png`}
                                alt={imgName}
                                className="logo"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Banner Heading */}
            <div className="banner">
                <h2 className="banner-text">
                    <span className="gradient">Trusted and used by</span>{' '}
                    <span className="gradient">employees of global leaders</span>
                </h2>
            </div>

            {/* Animation Section 4: Company Logos */}
            <div id="moving-animation-db-devops">
                <div className="marque-wrapper-company">
                    <div className="marque-right">
                        {["aws", "gcp", "fb", "google", "insta", "meta", "snap", "whs", "x", "yt"].map((imgName, index) => (
                            <img
                                key={index}
                                src={`./img/company/${imgName}.png`}
                                alt={imgName}
                                className="logo-db-devops"
                            />
                        ))}
                    </div>
                    <div className="marque-right">
                        {["aws", "gcp", "fb", "google", "insta", "meta", "snap", "whs", "x", "yt"].map((imgName, index) => (
                            <img
                                key={index}
                                src={`./img/company/${imgName}.png`}
                                alt={imgName}
                                className="logo-db-devops"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mq;

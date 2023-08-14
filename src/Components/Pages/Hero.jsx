import symbols from "../../images/symbols";

import "../../styling/hero.css";

function Hero() {
  return (
    <section className="intro-container">
      <div className="svg-wrapper">
        <svg className="svg-container" xmlns="http://www.w3.org/2000/svg">
          <rect className="shape" />
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="text"
          >
            TROY CASELLI
          </text>
        </svg>
      </div>
      <div className="tools-wrapper">
        <img className="tool-image tool-1" src={symbols.cImage} alt="c"></img>
        <img
          className="tool-image tool-2"
          src={symbols.css3Image}
          alt="css3"
        ></img>
        <img
          className="tool-image tool-3"
          src={symbols.cypressImage}
          alt="cypress"
        ></img>
        <img
          className="tool-image tool-4"
          src={symbols.reduxImage}
          alt="express"
        ></img>
        <img
          className="tool-image tool-5"
          src={symbols.githubImage}
          alt="github"
        ></img>
        <img
          className="tool-image tool-6"
          src={symbols.gitlabImage}
          alt="gitlab"
        ></img>
        <img
          className="tool-image tool-7"
          src={symbols.html5Image}
          alt="html5"
        ></img>
        <img
          className="tool-image tool-8"
          src={symbols.javaScriptImage}
          alt="javascript"
        ></img>
        <img
          className="tool-image tool-9"
          src={symbols.lessImage}
          alt="less"
        ></img>
        <img
          className="tool-image tool-10"
          src={symbols.nodeImage}
          alt="node"
        ></img>
        <img
          className="tool-image tool-11"
          src={symbols.reactImage}
          alt="react"
        ></img>
        <img
          className="tool-image tool-12"
          src={symbols.expressImage}
          alt="redux"
        ></img>
        <img
          className="tool-image tool-13"
          src={symbols.slackImage}
          alt="slack"
        ></img>
        <img
          className="tool-image tool-14"
          src={symbols.sqlite3Image}
          alt="sqlite3"
        ></img>
        <img
          className="tool-image tool-15"
          src={symbols.typescriptImage}
          alt="typescript"
        ></img>
        <img
          className="tool-image tool-16"
          src={symbols.vscodeImage}
          alt="vscode"
        ></img>
      </div>
      <div className="titles-wrapper">
        <div className="titles-container">
          <text className="title-names">
            {
              "const profession = [ \n\t Full-Stack Engineer, \n\t JavaScript Developer, \n\t React Developer \n];"
            }
          </text>
        </div>
      </div>
    </section>
  );
}

export default Hero;

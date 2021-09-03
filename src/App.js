import React, { useState } from "react";
import { projects } from "./data";
import ProjecList from "./ProjectList";
import headerImg from "./header__img.svg";
import { AiOutlineHeart, AiFillHeart, AiOutlineGithub } from "react-icons/ai";

const App = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <header className="container">
        <div className="header__text">
          <h1>React Bytes</h1>
          <p>This is series of mini bytes of projects built using React Js for learning and practising purpose</p>
          <div className="btn-container">
            <button className="btn" onClick={() => setIsClicked(true)}>
              {!isClicked ? <AiOutlineHeart /> : <AiFillHeart />}
              {isClicked && <span className="likes__count">Thank you for your love</span>}
            </button>
            <a target="_blank" rel="noreferrer" href="https://github.com/aaraamuthan" className="github-link">
              <AiOutlineGithub />
            </a>
          </div>
        </div>
        <div className="header__img">
          <img src={headerImg} alt="headerImg" />
        </div>
      </header>
      <section className="container project-container">
        <ProjecList projects={projects} />
        <h2 style={{ justifyItems: "center", textAlign: "center", color: "#00A19D" }}>More Bytes to come...</h2>
      </section>
    </>
  );
};

export default App;

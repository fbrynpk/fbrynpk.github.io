import { Link } from "react-scroll";
import React from "react";
import { useState } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import * as FaIcons from "react-icons/fa";

import {
  Container,
  Div1,
  Div2,
  Div3,
  MargList,
  NavLink,
  SocialIcons
} from "./HeaderStyles";

const Header = () => {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Container className={`${theme}`}>
        <Div1>
          <Link
            activeClass="active"
            to="home"
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20px"
            }}
          >
            <SocialIcons className={`${theme}`}>
              <FaIcons.FaHome size="4rem" />
            </SocialIcons>
          </Link>
        </Div1>
        <Div2>
          <MargList>
            <Link activeClass="active" to="about">
              <NavLink className={`${theme}`}>About</NavLink>
            </Link>
          </MargList>
          <MargList>
            <Link activeClass="active" to="projects">
              <NavLink className={`${theme}`}>Projects</NavLink>
            </Link>
          </MargList>
          <MargList>
            <Link activeClass="active" to="tech">
              <NavLink className={`${theme}`}>Experiences</NavLink>
            </Link>
          </MargList>
          <MargList>
            <Link activeClass="active" to="certificates">
              <NavLink className={`${theme}`}>Certificates</NavLink>
            </Link>
          </MargList>
          <MargList>
            <Link activeClass="active" to="awards">
              <NavLink className={`${theme}`}>Awards</NavLink>
            </Link>
          </MargList>
          <MargList>
            <Link activeClass="active" to="contact">
              <NavLink className={`${theme}`}>Contact</NavLink>
            </Link>
          </MargList>
        </Div2>
        <Div3>
          <SocialIcons className={`${theme}`} href="https://github.com/fbrynpk">
            <FaIcons.FaGithub size="4rem" />
          </SocialIcons>
          <SocialIcons
            className={`${theme}`}
            href="https://www.linkedin.com/in/febryan-putra-kartika-592934207/"
          >
            <FaIcons.FaLinkedin size="4rem" />
          </SocialIcons>
          <SocialIcons
            className={`${theme}`}
            href="https://www.instagram.com/fbrynpk/"
          >
            <FaIcons.FaInstagram size="4rem" />
          </SocialIcons>
          <input
            className="toggle-btn__input"
            type="checkbox"
            name="checkbox"
            onChange={handleThemeChange}
            checked={theme === "light"}
          />
        </Div3>
      </Container>
    </ThemeContext.Provider>
  );
};

export default Header;

import { Link } from "react-scroll";
import React from "react";
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

const Header = () => (
  <Container>
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
        <SocialIcons>
          <FaIcons.FaHome size="4rem" />
        </SocialIcons>
      </Link>
    </Div1>
    <Div2>
      <MargList>
        <Link activeClass="active" to="about">
          <NavLink>About</NavLink>
        </Link>
      </MargList>
      <MargList>
        <Link activeClass="active" to="projects">
          <NavLink>Projects</NavLink>
        </Link>
      </MargList>
      <MargList>
        <Link activeClass="active" to="tech">
          <NavLink>Experiences</NavLink>
        </Link>
      </MargList>
      <MargList>
        <Link activeClass="active" to="certificates">
          <NavLink>Certificates</NavLink>
        </Link>
      </MargList>
      <MargList>
        <Link activeClass="active" to="awards">
          <NavLink>Awards</NavLink>
        </Link>
      </MargList>
      <MargList>
        <Link activeClass="active" to="contact">
          <NavLink>Contact</NavLink>
        </Link>
      </MargList>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/fbrynpk">
        <FaIcons.FaGithub size="4rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/febryan-putra-kartika-592934207/">
        <FaIcons.FaLinkedin size="4rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/fbrynpk/">
        <FaIcons.FaInstagram size="4rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

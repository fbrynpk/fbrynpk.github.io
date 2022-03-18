import Link from 'next/link';
import React from 'react';
import * as FaIcons from 'react-icons/fa';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display:'flex', alignItems:'center', color:'white', marginBottom: '20px'}}>
          <FaIcons.FaBars size="2rem"/> <Span>Home</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Project</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Experiences</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/fbrynpk">
        <FaIcons.FaGithub size="4rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/febryan-putra-kartika-592934207/">
        <FaIcons.FaLinkedin size="4rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/febryanpk/">
        <FaIcons.FaInstagram size="4rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

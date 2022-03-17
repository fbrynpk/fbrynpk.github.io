import React from 'react';
import * as FaIcons from 'react-icons/fa';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: +886973114752">+886973114752</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:fbrynpk@gmail.com">fbrynpk@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Always be learning!</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/fbrynpk">
          <FaIcons.FaGithub size="2rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/febryan-putra-kartika-592934207/">
          <FaIcons.FaLinkedin size="2rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/febryanpk/">
          <FaIcons.FaInstagram size="2rem"/>
        </SocialIcons> 
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

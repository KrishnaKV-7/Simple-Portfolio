import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:+1 940-331-4294">+1 940-331-4294</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:karthickkrish0711@gmail.com">karthickkrish0711@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one Project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/Krish0711">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/krishna-kumar711/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

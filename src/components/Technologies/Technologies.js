import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Experiences</SectionTitle>
    <SectionText>
      Worked with a lot of languages from front-end, back-end and machine learning world.
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js and Markup Languages
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Machine Learning</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Python and Tensorflow
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem"/>
        <ListContainer>
          <ListTitle>UI/UX Designer</ListTitle>
          <ListParagraph>
            Starting to get familiar with <br/>
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

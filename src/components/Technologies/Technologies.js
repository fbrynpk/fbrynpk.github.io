import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Experiences</SectionTitle>
    <SectionText>
      Worked on several machine learning projects, including object detection,
      intent classifications, text generation, medical detection and paper
      replications
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Machine Learning</ListTitle>
          <ListParagraph>
            Experienced with Machine Learning algorithms (Linear and Logistic
            Regression, Decision Tree, Random Forest, Naive Bayes, SVM, KNN) and
            library such as PyTorch and Tensorflow
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Natrual Language Processing</ListTitle>
          <ListParagraph>
            Experienced with NLP theory such as Tokenizations, Vectorization,
            Bag of Words model, Lemmatization and Stemming, markov models also
            experimented with transformer models and how to fine-tune LLM.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>Healthcare</ListTitle>
          <ListParagraph>
            Interested in how healthcare quality could be improved with the help
            of machine learning from early detection, diagnosis, treatment, and
            monitoring of diseases.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

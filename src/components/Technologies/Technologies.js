import React from "react";
import {
  FaPython,
  FaBriefcaseMedical,
  FaSpellCheck,
  FaEye,
} from "react-icons/fa";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
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
        <ListContainer>
          <ListTitle>
            <FaPython size="2rem" /> Machine Learning
          </ListTitle>
          <ListParagraph>
            Familiar with Machine Learning algorithms (Linear and Logistic
            Regression, Decision Tree, Random Forest, Naive Bayes, SVM, KNN) and
            library such as PyTorch and Tensorflow
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>
            <FaBriefcaseMedical size="2rem" />
            &nbsp;Healthcare
          </ListTitle>
          <ListParagraph>
            Interested in how healthcare quality could be improved with the help
            of innovative machine learning solutions and AI powered tools from
            early detection, diagnosis, treatment, and monitoring of diseases.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>
            <FaSpellCheck size="2rem" />
            &nbsp;Natural Language Processing
          </ListTitle>
          <ListParagraph>
            Experienced with NLP theory such as Tokenizations, Vectorization,
            Bag of Words model, Lemmatization and Stemming, markov models also
            experimented with transformer models and how to fine-tune LLM such
            as BERT, T5, etc. Currently understanding more about NLP and Speech
            Technologies to facilitate more natural conversations between
            machines and humans, ultimately bridging the gap, enabling seamless
            and natural interactions between machines and users.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>
            <FaEye size="2rem" />
            &nbsp;Computer Vision
          </ListTitle>
          <ListParagraph>
            Proficient in CV, including image preprocessing, deep learning
            architectures like CNNs, and implementing object detection and image
            segmentation algorithms. Utilized state-of-the-art models such as
            YOLO, and Vision Transformers (ViT) for various tasks. Fine-tuned
            pre-trained models such as ResNet and VGG. Interested in learning
            more about CV for Biomedical Image Analysis
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

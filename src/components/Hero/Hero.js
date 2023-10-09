import React from "react";

import {
  SectionNoPadding,
  SectionText,
  SectionTitle
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <div>
    <SectionNoPadding row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello,
          <br />
          My name is
          <br />
          Febryan Putra Kartika
        </SectionTitle>
        <SectionText>
          Fresh Graduate Student majored in Electrical Engineering and Computer
          Science at National Taipei University of Technology passionate about
          learning Machine Learning particulary on Natural Language Processing
          and Computer Vision and how it can be applied to solve real life
          problems specifically for healthcare.
        </SectionText>
        <form method="get" action="cv.pdf">
          <Button type="submit">Curriculum Vitae</Button>
        </form>
      </LeftSection>
    </SectionNoPadding>
  </div>
);

export default Hero;

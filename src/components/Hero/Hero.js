import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello,
          <br />
          My name is
          <br />
          Febryan Putra Kartika
        </SectionTitle>
        <SectionText>
          A third year student majoring in Electrical Engineering and Computer
          Science in National Taipei University of Technology passionate about
          learning technology and developing program.
        </SectionText>
        <form method="get" action="cv.pdf">
          <Button type="submit">Curriculum Vitae</Button>
        </form>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;

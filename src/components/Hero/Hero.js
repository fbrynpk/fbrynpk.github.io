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
          Welcome,
          <br />
          to my digital
          <br />
          creative space
        </SectionTitle>
        <SectionText>
          I'm Febryan Putra Kartika, Here, you'll find a curated collection of
          my projects, reflecting my dedication to machine learning.
        </SectionText>
        <form method="get" action="cv.pdf">
          <Button type="submit">Curriculum Vitae</Button>
        </form>
      </LeftSection>
    </SectionNoPadding>
  </div>
);

export default Hero;

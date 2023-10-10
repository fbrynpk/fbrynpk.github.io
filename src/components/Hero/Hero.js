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
          Welcome to my site! Where you can learn more about me!
        </SectionText>
        <form method="get" action="cv.pdf">
          <Button type="submit">Curriculum Vitae</Button>
        </form>
      </LeftSection>
    </SectionNoPadding>
  </div>
);

export default Hero;

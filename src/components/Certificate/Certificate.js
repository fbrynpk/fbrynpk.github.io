import React from "react";

import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText, Imgs } from "./CertificateStyles";
import { certif } from "../../constants/constants";

const Certificate = () => (
  <Section>
    <SectionTitle>Certifications</SectionTitle>
    <Boxes>
      {certif.map((card, index) => (
        <Box key={index}>
          <BoxNum>
            <Imgs src={card.image} />
          </BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Certificate;

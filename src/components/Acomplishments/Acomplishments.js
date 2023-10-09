import React from "react";

import {
  SectionDivider,
  SectionNoPadding,
  SectionTitle
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText, Imgs } from "./AcomplishmentsStyles";
import { data } from "../../constants/constants";

const Acomplishments = () => (
  <SectionNoPadding>
    <SectionDivider />
    <br />
    <SectionTitle>Awards</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>
            <Imgs src={card.image} />
          </BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </SectionNoPadding>
);

export default Acomplishments;

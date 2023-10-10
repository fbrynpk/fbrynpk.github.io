import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  padding-top: 100px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    padding-bottom: 140px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 95px;
  }
`;

import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
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
    padding-top: 0px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

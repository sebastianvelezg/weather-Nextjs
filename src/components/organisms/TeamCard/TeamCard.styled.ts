import styled from "styled-components";

type TeamCardWrapperT = {};

type TeamCardWrapperProps = {
  backgroundColor: string;
  width: number;
  height: number;
  gap: number;
  alignItems: string;
  justifyItems: string;
  display: string;
  flexDirection: string;
  borderRadius: number;
  padding: number;
  margin: number;
};

export const TeamCardWrapper = styled.div<TeamCardWrapperProps>`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyItems};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;
  border-radius: ${(props) => props.borderRadius}rem;
  padding: ${(props) => props.padding}rem;
  margin: ${(props) => props.margin}rem;
  background-color: ${(props) => props.backgroundColor};
  gap: ${(props) => props.gap}rem;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
`;

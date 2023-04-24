import styled from "styled-components";

type ButtonIconPropsT = {
  borderColor: string;
  backgroundColor: string;
  hoverColor: string;
  hoverBGColor: string;
  hoverBorderColor: string;
};

export const ButtonIconWrapper = styled.button<ButtonIconPropsT>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2.2rem;
  //column-gap: 1rem;
  border-radius: 5rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 0.1rem solid ${({ borderColor }) => borderColor};
  color: ${({ color }) => color};
  //min-width: 17rem;
  width: fit-content;
  //min-height: 5.2rem;
  height: fit-content;
  gap: 1.2rem;
  transition: all 0.5s ease-in-out;

  :hover {
    color: ${({ hoverColor }) => hoverColor};
    background-color: ${({ hoverBGColor }) => hoverBGColor};
    border: 0.1rem solid ${({ hoverBorderColor }) => hoverBorderColor};

    & svg.ButtonIconSVG > path {
      fill: ${({ hoverColor }) => hoverColor};
    }
  }
`;

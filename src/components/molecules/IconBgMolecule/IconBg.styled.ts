import styled from "styled-components";

type IconBgV2MoleculeT = {
  bgColor?: string;
  color?: string;
  padding?: string;
  size?: string;
  textColor?: string;
  hoverBgColor?: string;
  wrapPadding?: string;
  wrapBgColor?: string;
  wrapBorder?: string;
  wrapHoverBgColor?: string;
  wrapHoverBorder?: string;
  isHover?: boolean;
  hoverColor?: string;
};

export const IconBgWrap = styled.div<IconBgV2MoleculeT>`
  background-color: ${({ wrapBgColor }) => wrapBgColor};
  padding: ${({ wrapPadding }) => wrapPadding};
  border-radius: 5rem;
  transition: all 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    transform: ${({ isHover }) => (isHover ? `translate(0,-6px)` : "none")};
    background-color: ${({ wrapHoverBgColor }) => wrapHoverBgColor};
  }
`;
export const IconBgSubWrap = styled.div<IconBgV2MoleculeT>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 5rem;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  //width: max-content;
  //height: max-content;
  padding: ${({ padding }) => padding};
  transition: all 0.5s ease-in-out;

  :hover {
    background-color: ${({ hoverBgColor }: IconBgV2MoleculeT) => hoverBgColor};

    & svg.ButtonIconSVG > path {
      fill: ${({ hoverColor }) => hoverColor};
    }
  }

  & > p {
    color: ${({ textColor }: IconBgV2MoleculeT) => textColor};
    font-weight: bold;
  }
`;

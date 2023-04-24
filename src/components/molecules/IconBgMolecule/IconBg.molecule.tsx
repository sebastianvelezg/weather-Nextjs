import Image from "next/image";
import { IconBgSubWrap, IconBgWrap } from "./IconBg.styled";
import {IconT} from "@/types/icon.type";

type IconBgMoleculeT = {
  bgColor?: string;
  color?: string;
  isHover?: true;
  padding?: string;
  size: string;
  srcIMG?: string;
  srcSVG?: JSX.Element;
  styleClass?: string;
  textColor?: string;
  title?: string;
  hoverBgColor?: string;
  wrapPadding?: string;
  wrapBgColor?: string;
  wrapBorder?: string;
  wrapHoverBgColor?: string;
  wrapHoverBorder?: string;
  hoverColor?: string;
};

export const IconBgMolecule = (props: IconBgMoleculeT) => {
  const {
    bgColor = "",
    color = "",
    isHover = false,
    padding = "0.7rem",
    size,
    srcIMG,
    srcSVG,
    styleClass,
    textColor = "",
    title,
    hoverBgColor,
    wrapPadding = "0.5rem",
    wrapBgColor = "transparent",
    wrapBorder = "none",
    wrapHoverBgColor = "transparent",
    wrapHoverBorder = "none",
    hoverColor = "white",
  } = props;
  return (
    <IconBgWrap
      isHover={isHover}
      wrapPadding={wrapPadding}
      wrapBgColor={wrapBgColor}
      wrapBorder={wrapBorder}
      wrapHoverBgColor={wrapHoverBgColor}
      wrapHoverBorder={wrapHoverBorder}
    >
      <IconBgSubWrap
        size={size}
        bgColor={bgColor}
        className={`${styleClass}`}
        padding={padding}
        textColor={textColor}
        color={color}
        hoverBgColor={hoverBgColor}
        hoverColor={hoverColor}
      >
        {srcSVG && srcSVG}
        {srcIMG && (
          <Image
            className="icon"
            src={`${srcIMG}`}
            alt="Technology logo"
            width={45}
            height={45}
          />
        )}
        {title && <p>{title}</p>}
      </IconBgSubWrap>
    </IconBgWrap>
  );
};

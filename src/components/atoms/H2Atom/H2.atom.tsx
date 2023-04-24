import { H2Wrapper } from "./H2.styled";
import { SpanAtom } from "../SpanAtom/Span.atom";
import { theme } from "@/styles/theme.styled";

interface Props {
  text: string;
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  margin?: string;
  padding?: string;
  fontFamily?: string;
  fontSizeTablet?: string;
  marginTablet?: string;
  marginMobile?: string;
  fontSizeMobile?: string;
  boldText?: string;
  textAlign?: string;
  isSpanText?: boolean;
  spanText?: string;
  spanTextColor?: string;
  fontBG?: string;
}

const H2Atom = (props: Props) => {
  const {
    text,
    fontSize = "3rem",
    color,
    fontWeight,
    margin,
    padding,
    fontFamily,
    fontSizeTablet,
    marginTablet,
    fontSizeMobile,
    marginMobile,
    boldText,
    textAlign,
    isSpanText = false,
    spanText = "",
    spanTextColor = "",
    fontBG = theme.TOKENS.T3.i600,
  } = props;

  return (
    <H2Wrapper
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      margin={margin}
      padding={padding}
      fontFamily={fontFamily}
      fontSizeTablet={fontSizeTablet}
      marginTablet={marginTablet}
      fontSizeMobile={fontSizeMobile}
      marginMobile={marginMobile}
      textAlign={textAlign}
      fontBG={fontBG}
    >
      {text}
      <b>
        {boldText}
        {isSpanText && <SpanAtom color={spanTextColor} text={spanText} />}
      </b>
    </H2Wrapper>
  );
};

export default H2Atom;

import Slider from "@mui/material/Slider";
import { ChangeEvent, useState } from "react";
import { TeamCardOrganism } from "../TeamCard/TeamCard.organism";
import {
  CardCodeBlock,
  CardCodeBlockCopy,
  CardCodeCopyButton,
  CardCodes,
  CardContainer,
  CardOptionsButton,
  CardOptionsButtonsContainer,
  CardOptionsContainer,
  CardOptionsInput,
  CardOptionsInputText,
  CardOptionsTitle,
  CardSectionWrapper,
  MainOrganismWrapper,
} from "./Main.styled";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierLakesideDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export const MainOrganism = () => {
  const [backgroundColor, setBackgroundColor] = useState("#2eff00"); // Set initial state for background color
  const handleBackgroundColorChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBackgroundColor(e.target.value); // Handle the background color change on input
  };
  const [width, setWidth] = useState(40); // Set initial state for width
  const handleWidthChange = (event: any, value: number | number[]) => {
    setWidth(value as number); // Handle the width change on input
  };
  const [height, setHeight] = useState(65); // Set initial state for height
  const handleHeightChange = (event: any, value: number | number[]) => {
    setHeight(value as number); // Handle the height change on input
  };
  const [gap, setGap] = useState(1.5); // Set initial state for gap
  const handleGapChange = (event: any, value: number | number[]) => {
    setGap(value as number); // Handle the gap change on input
  };
  const [alignItems, setAlignItems] = useState("center"); // Set initial state for alignItems
  const handleAlignItemsChange = (value: string) => {
    setAlignItems(value); // Handle the alignItems change on input
  };
  const [justifyItems, setJustifyItems] = useState("center"); // Set initial state for justifyItems
  const handleJustifyItemsChange = (value: string) => {
    setJustifyItems(value); // Handle the justifyItems change on input
  };
  const [display, setDisplay] = useState("flex"); // Set initial state for display
  const handleDisplayChange = (value: string) => {
    setDisplay(value); // Handle the display change on input
  };
  const [flexDirection, setFlexDirection] = useState("column"); // Set initial state for flexDirection
  const handleFlexDirectionChange = (value: string) => {
    setFlexDirection(value); // Handle the flexDirection change on input
  };
  const [borderRadius, setBorderRadius] = useState(5); // Set initial state for borderRadius
  const handleBorderRadiusChange = (event: any, value: number | number[]) => {
    setBorderRadius(value as number); // Handle the borderRadius change on input
  };
  const [padding, setPadding] = useState(1); // Set initial state for padding
  const handlePaddingChange = (event: any, value: number | number[]) => {
    setPadding(value as number); // Handle the padding change on input
  };
  const [margin, setMargin] = useState(1); // Set initial state for margin
  const handleMarginChange = (event: any, value: number | number[]) => {
    setMargin(value as number); // Handle the margin change on input
  };
  const [title, setTitle] = useState("Titulo"); // Set initial state for title
  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value); // Handle the title change on input
  };
  const [paragraph, setParagraph] = useState("Paragraph"); // Set initial state for paragraph
  const handleParagraphChange = (event: ChangeEvent<HTMLInputElement>) => {
    setParagraph(event.target.value); // Handle the paragraph change on input
  };

  const [copy, setCopy] = useState(false);
  const [copy2, setCopy2] = useState(false);

  const codeString = `
  export const CardWrapper = styled.div\`
      display: ${display};
      flex-direction: ${flexDirection};
      justify-content: ${justifyItems};
      align-items: ${alignItems};
      width: ${width}rem;
      height: ${height}rem;
      border-radius: ${borderRadius}rem;
    padding: ${padding}rem;
    margin: ${margin}rem;
    background-color: ${backgroundColor};
    gap: ${gap}rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  \`;
`;
  const codeString2 = `
  import { CardWrapper } from "./Card.styled";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

  type CardProps = {};
  
  export const Card = (props: CardProps) => {
    
    const {} = props;
  
    return (
      <TeamCardWrapper>
        <h1>${title}</h1>
        <p>${paragraph}</p>
        <button>enviar</button>
      </TeamCardWrapper>
    );
  };
  
`;

  return (
    <MainOrganismWrapper>
      <h1>SC Card Generator</h1>
      <CardSectionWrapper>
        <CardOptionsContainer>
          <CardOptionsTitle>Background Color</CardOptionsTitle>
          <input
            type="color"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
          />
          <CardOptionsTitle>width</CardOptionsTitle>
          <Slider
            value={width}
            min={0}
            max={100}
            step={0.1}
            onChange={handleWidthChange}
          />
          <CardOptionsInput type="text" value={width} onChange={() => {}} />
          <CardOptionsTitle>height</CardOptionsTitle>
          <Slider
            value={height}
            min={0}
            max={100}
            step={0.1}
            onChange={handleHeightChange}
          />
          <CardOptionsInput type="text" value={height} onChange={() => {}} />
          <CardOptionsTitle>Gap</CardOptionsTitle>
          <Slider
            value={gap}
            min={0}
            max={20}
            step={0.1}
            onChange={handleGapChange}
          />
          <CardOptionsInput type="text" value={gap} onChange={() => {}} />
          <CardOptionsTitle>Margin</CardOptionsTitle>
          <Slider
            value={margin}
            min={0}
            max={20}
            step={0.1}
            onChange={handleMarginChange}
          />
          <CardOptionsInput type="text" value={margin} onChange={() => {}} />
          <CardOptionsTitle>Padding</CardOptionsTitle>
          <Slider
            value={padding}
            min={0}
            max={20}
            step={0.1}
            onChange={handlePaddingChange}
          />
          <CardOptionsInput type="text" value={padding} onChange={() => {}} />
          <CardOptionsTitle>Border Radius</CardOptionsTitle>
          <Slider
            value={borderRadius}
            min={0}
            max={50}
            step={0.1}
            onChange={handleBorderRadiusChange}
            color="secondary"
          />
          <CardOptionsInput
            type="text"
            value={borderRadius}
            onChange={() => {}}
          />
        </CardOptionsContainer>

        <CardContainer>
          <TeamCardOrganism
            backgroundColor={backgroundColor}
            width={width}
            height={height}
            gap={gap}
            alignItems={alignItems}
            justifyItems={justifyItems}
            display={display}
            flexDirection={flexDirection}
            borderRadius={borderRadius}
            padding={padding}
            margin={margin}
            title={title}
            paragraph={paragraph}
          />
        </CardContainer>
        <CardOptionsContainer>
          <CardOptionsTitle>Align Items</CardOptionsTitle>
          <CardOptionsButtonsContainer>
            <CardOptionsButton
              onClick={() => handleAlignItemsChange("flex-start")}
            >
              flex-start
            </CardOptionsButton>
            <CardOptionsButton onClick={() => handleAlignItemsChange("center")}>
              center
            </CardOptionsButton>
            <CardOptionsButton
              onClick={() => handleAlignItemsChange("flex-end")}
            >
              flex-end
            </CardOptionsButton>
          </CardOptionsButtonsContainer>
          <CardOptionsTitle>Justify Content</CardOptionsTitle>
          <CardOptionsButtonsContainer>
            <CardOptionsButton
              onClick={() => handleJustifyItemsChange("flex-start")}
            >
              flex-start
            </CardOptionsButton>
            <CardOptionsButton
              onClick={() => handleJustifyItemsChange("center")}
            >
              center
            </CardOptionsButton>
            <CardOptionsButton
              onClick={() => handleJustifyItemsChange("flex-end")}
            >
              flex-end
            </CardOptionsButton>
          </CardOptionsButtonsContainer>
          <CardOptionsTitle>Display</CardOptionsTitle>
          <CardOptionsButtonsContainer>
            <CardOptionsButton onClick={() => handleDisplayChange("flex")}>
              Flex
            </CardOptionsButton>
            <CardOptionsButton onClick={() => handleDisplayChange("grid")}>
              Grid
            </CardOptionsButton>
            <CardOptionsButton onClick={() => handleDisplayChange("block")}>
              Block
            </CardOptionsButton>
          </CardOptionsButtonsContainer>
          <CardOptionsTitle>Flex Direction</CardOptionsTitle>
          <CardOptionsButtonsContainer>
            <CardOptionsButton onClick={() => handleFlexDirectionChange("row")}>
              Row
            </CardOptionsButton>
            <CardOptionsButton
              onClick={() => handleFlexDirectionChange("column")}
            >
              Column
            </CardOptionsButton>
          </CardOptionsButtonsContainer>
          <CardOptionsTitle>Title</CardOptionsTitle>
          <CardOptionsInputText
            type="text"
            id="text-input"
            value={title}
            onChange={handleTitleChange}
          />
          <CardOptionsTitle>Paragraph</CardOptionsTitle>
          <CardOptionsInputText
            type="text"
            id="text-input"
            value={paragraph}
            onChange={handleParagraphChange}
          />
        </CardOptionsContainer>
      </CardSectionWrapper>
      <CardCodes>
        <CardCodeBlock>
          <CardCodeBlockCopy>
            <CardOptionsTitle>Example code</CardOptionsTitle>
            {copy ? (
              <CardCodeCopyButton>Code Copied!</CardCodeCopyButton>
            ) : (
              <CardCodeCopyButton
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  setCopy(true);
                  setTimeout(() => {}, 3000);
                }}
              >
                Copy Code
              </CardCodeCopyButton>
            )}
          </CardCodeBlockCopy>
          <SyntaxHighlighter
            wrapLines={true}
            showLineNumbers
            language="typescript"
            style={atelierLakesideDark}
            cop
            lineProps={(lineNumber) => ({
              style: { wordWrap: "break-word", whiteSpace: "pre-wrap" },
            })}
          >
            {codeString}
          </SyntaxHighlighter>
        </CardCodeBlock>
        <CardCodeBlock>
          <CardCodeBlockCopy>
            <CardOptionsTitle>Example code</CardOptionsTitle>
            {copy2 ? (
              <CardCodeCopyButton>Code Copied!</CardCodeCopyButton>
            ) : (
              <CardCodeCopyButton
                onClick={() => {
                  navigator.clipboard.writeText(codeString2);
                  setCopy2(true);
                  setTimeout(() => {}, 3000);
                }}
              >
                Copy Code
              </CardCodeCopyButton>
            )}
          </CardCodeBlockCopy>
          <SyntaxHighlighter
            wrapLines={true}
            showLineNumbers
            language="typescript"
            style={atelierLakesideDark}
            cop
            lineProps={(lineNumber) => ({
              style: { wordWrap: "break-word", whiteSpace: "pre-wrap" },
            })}
          >
            {codeString2}
          </SyntaxHighlighter>
        </CardCodeBlock>
      </CardCodes>
    </MainOrganismWrapper>
  );
};

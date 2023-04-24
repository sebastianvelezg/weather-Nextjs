import { TeamCardWrapper } from "./TeamCard.styled";

type TeamCardOrganismProps = {
  backgroundColor: string; // Define a prop for the background color
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
  title: string;
  paragraph: string;
};

export const TeamCardOrganism = (props: TeamCardOrganismProps) => {
  const {
    backgroundColor,
    width,
    height,
    gap,
    alignItems,
    justifyItems,
    display,
    flexDirection,
    borderRadius,
    padding,
    margin,
    title,
    paragraph,
  } = props;

  return (
    <TeamCardWrapper
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
    >
      <h1>{title}</h1>
      <p>{paragraph}</p>
      <button>enviar</button>
    </TeamCardWrapper>
  );
};

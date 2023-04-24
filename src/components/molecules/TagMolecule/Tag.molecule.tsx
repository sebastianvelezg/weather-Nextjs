import { TagTitle, TagWrapper } from "./Tag.styled";

interface Props {title : string}

export const TagMolecule = (props: Props) => {
  const {title} = props;

  return (
    <TagWrapper>
      <TagTitle>{title}</TagTitle>
    </TagWrapper>
  );
};

import styled from "styled-components";

type TagPropsT = {};

export const TagWrapper = styled.div<TagPropsT>`
  display: flex;
  padding: 0.5rem 1rem;
  gap: 1rem;
  width: fit-content;
  height: 2.7rem;
  background-color: #006EB8;
  border-radius: 2rem 5rem 5rem 2rem;
`;

export const TagTitle = styled.p<TagPropsT>`
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: #ffffff;
`;

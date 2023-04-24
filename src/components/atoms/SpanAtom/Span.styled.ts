import styled from "styled-components";

interface SpanProps {
  color?: string;
  paddingR?: string;
  paddingL?: string;
}

export const SpanWrapper = styled.span<SpanProps>`
  color: ${({ color }) => color};
  padding-left: ${({ paddingL }) => paddingL};
  padding-right: ${({ paddingR }) => paddingR};
`;

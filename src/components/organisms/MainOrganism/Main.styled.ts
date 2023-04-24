import styled from "styled-components";

export const MainOrganismWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 2rem;
`;

export const CardOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  align-items: center;
  padding: 2rem;
  background-color: #f0f0f0;
  border-radius: 1.5rem;
`;

export const CardSectionWrapper = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100rem;
  height: 100rem;
  align-items: center;
  justify-content: center;
`;
export const CardCodeBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  height: fit-content;
  background-color: #3a404d;
`;
export const CardCodeBlockCopy = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
`;
export const CardCodeCopyButton = styled.button`
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
export const CardCodes = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  background-color: transparent;
  border: none;
`;

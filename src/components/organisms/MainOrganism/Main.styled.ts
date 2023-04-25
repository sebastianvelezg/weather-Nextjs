import styled from "styled-components";

export const MainOrganismWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: black;
  border-right: 2px solid #2eff00;
  border-left: 2px solid #2eff00;
  border-bottom: 2px solid #2eff00;
`;

export const CardOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 80rem;
  align-items: center;
  padding: 2rem;
  background-color: black;
  border-radius: 1.5rem;
  gap: 0.5rem;
  border: solid 2px #2eff00;
`;

export const CardSectionWrapper = styled.div`
  display: flex;
  width: fit-content;
  height: 90rem;
  gap: 1rem;
  justify-content: center;
  align-items: center;
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
  border-radius: 1.5rem;
`;
export const CardCodeBlockCopy = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  padding: 1rem;
`;
export const CardCodeCopyButton = styled.button`
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: #3a404d;
  border: none;
  color: #ffffff;
`;
export const CardCodes = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  background-color: transparent;
`;
export const CardOptionsButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
export const CardOptionsButton = styled.button`
  width: 8rem;
  height: 4rem;
  background-color: black;
  color: white;
  border: solid 1px #2eff00;
`;
export const CardOptionsInput = styled.input`
  width: 4rem;
  height: 4rem;
  text-align: center;
  background-color: black;
  color: white;
  border: solid 1px #2eff00;
`;
export const CardOptionsInputText = styled.input`
  width: 25rem;
  height: 4rem;
  background-color: black;
  color: white;
  border: solid 1px #2eff00;
`;
export const CardOptionsTitle = styled.p`
  color: white;
  font-size: 18px;
`;

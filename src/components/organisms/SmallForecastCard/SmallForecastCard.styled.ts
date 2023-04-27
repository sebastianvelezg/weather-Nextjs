import styled, { css } from "styled-components";

export const SmallForecastSingleContainer = styled.div`
  width: 500px;
  height: 150px;
  background: #fff;
  padding: 1rem;
  overflow: hidden;
  border-radius: 18px;
  font-family: "Roboto", sans-serif;
  transition: 0.6s ease-out;
  flex-direction: row;
  display: flex;

  box-shadow: 0px 10px 10px -4px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: space-between;
`;

export const SmallForecastTemp = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SmallForecastTempTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.1rem;

  p {
    color: #054f7e;
    font-size: 25px;
    font-weight: 500;
  }
`;
export const SmallForecastTempIcon = styled.div`
  width: 10rem;
  height: 8rem;
  position: relative;
`;
export const SmallForecastTempText = styled.p`
  color: #054f7e;
  font-size: 5rem;
  font-weight: 800;
`;
export const SmallForecastContainerRight = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SmallForecastChanceRain = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const SmallForecastChanceRainText = styled.p`
  color: #054f7e;
  font-size: 2rem;
  font-weight: 100;
`;
export const SmallForecastChanceRainNumber = styled.p`
  color: #054f7e;
  font-size: 2rem;
  font-weight: 800;
`;

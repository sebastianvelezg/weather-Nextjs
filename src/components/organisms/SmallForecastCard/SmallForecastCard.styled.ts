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
  justify-content: center;
  @media screen and (max-width: 560px) {
    width: 36rem;
    height: 30rem;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SmallForecastTemp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 16rem;
  @media screen and (max-width: 560px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
`;
export const SmallForecastChanceOfRain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  @media screen and (max-width: 560px) {
    flex-direction: row;
    width: 100%;
    justify-content: center;
    gap: 10rem;
  }
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
  @media screen and (max-width: 560px) {
    justify-content: center;
    text-align: left;
    padding-left: 1rem;
  }
`;
export const SmallForecastTempIcon = styled.div`
  width: 10rem;
  height: 8rem;
  position: relative;
  @media screen and (max-width: 560px) {
    align-items: flex-start;
    padding-left: 1rem;
  }
`;
export const SmallForecastTempText = styled.p`
  color: #054f7e;
  font-size: 5rem;
  font-weight: 800;
`;
export const SmallForecastContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 16rem;
  @media screen and (max-width: 560px) {
    padding-top: 2rem;
    flex-direction: row;
    width: 100%;
    gap: 11rem;
  }
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

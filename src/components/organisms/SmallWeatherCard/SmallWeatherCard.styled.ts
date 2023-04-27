import styled, { css } from "styled-components";
import Image from "next/image";

interface SmallWeatherNotFoundProps {
  // other props...
  showError?: boolean;
  showWeather?: boolean;
}

export const SmallWeatherCardBody = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  min-height: 100vh;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #054f7e;
  gap: 3rem;
  @media screen and (max-width: 980px) {
    flex-direction: column;
  }
`;

export const SmallWeatherContainer = styled.div<SmallWeatherNotFoundProps>`
  position: relative;
  width: 400px;
  height: 105px;
  background: #fff;
  padding: 28px 25px;
  overflow: hidden;
  border-radius: 18px;
  font-family: "Roboto", sans-serif;
  transition: 0.6s ease-out;

  ${(props) =>
    props.showError &&
    css`
      height: 425px;
    `}
  ${(props) =>
    props.showWeather &&
    css`
      height: 650px;
    `}
`;

export const SmallWeatherSearchBox = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  i {
    position: absolute;
    color: #054f7e;
    font-size: 28px;
  }
`;
export const SmallWeatherSearchBoxIcon = styled.div`
  width: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const SmallWeatherSearchInput = styled.input`
  color: #054f7e;
  width: 80%;
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  padding-left: 32px;
  border: none;
  border-radius: 1.5rem;
  box-shadow: 0px 10px 10px -4px rgba(0, 0, 0, 0.1);

  :focus {
    outline: none;
  }

  &::placeholder {
    font-size: 20px;
    font-weight: 500;
    color: #054f7e;
    text-transform: capitalize;
  }
`;

export const SmallWeatherSearchButton = styled.button`
  cursor: pointer;
  width: 50px;
  height: 50px;
  color: #054f7e;
  background: #dff6ff;
  border-radius: 50%;
  font-size: 22px;
  transition: 0.4s ease;
  border: none;

  &:hover {
    color: #fff;
    background: #054f7e;
  }
`;

export const SmallWeatherButtonIcon = styled.div`
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const SmallWeatherNotFound = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 50px;
  scale: 0;
  opacity: 0;
  display: none;
  flex-direction: column;
  align-items: center;
`;

export const SmallWeatherNotFoundImage = styled.img`
  width: 70%;
`;

export const SmallWeatherNotFoundP = styled.p`
  color: #054f7e;
  font-size: 22px;
  font-weight: 500;
  margin-top: 12px;
`;

export const SmallWeatherBox = styled.div`
  text-align: center;
`;

export const SmallWeatherWeatherImage = styled.img`
  width: 60%;
  margin-top: 30px;
`;

export const SmallWeatherTemperature = styled.p`
  position: relative;
  color: #054f7e;
  font-size: 5rem;
  font-weight: 800;
  margin-top: 10px;

  & span {
    position: absolute;
    margin-left: 4px;
    font-size: 1.5rem;
  }
`;

export const SmallWeatherDescription = styled.p`
  color: #054f7e;
  font-size: 22px;
  font-weight: 500;
  text-transform: capitalize;
`;

export const SmallWeatherWeatherDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const SmallWeatherDetailsHumidity = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100px;
  justify-content: flex-start;
  gap: 0.5rem;
`;

export const SmallWeatherDetailsWind = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100px;
  justify-content: flex-end;
  gap: 0.5rem;
`;
export const SmallWeatherDetailsIcon = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 5rem;
  height: 5rem;
`;
export const SmallWeatherDetailsSpan = styled.span`
  color: #054f7e;
  font-size: 22px;
  font-weight: 500;
`;
export const SmallWeatherDetailsP = styled.p`
  color: #054f7e;
  font-size: 20px;
  font-weight: 500;
`;
export const SmallWeatherDetailsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const SmallForecastButton = styled.button`
  cursor: pointer;
  padding-left: 2.5rem;
  width: 175px;
  height: 50px;
  color: #054f7e;
  background: #dff6ff;
  border-radius: 5rem;
  font-size: 22px;
  transition: 0.4s ease;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 2rem;
  box-shadow: 5px 5px 10px -4px rgba(0, 0, 0, 0.1);

  &:hover {
    color: #fff;
    background: #054f7e;
  }
`;

export const SmallForecastButtonIcon = styled.div`
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const SmallForecastContainer = styled.div`
  position: relative;
  width: 550px;
  height: 650px;
  background: #fff;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-family: "Roboto", sans-serif;
  transition: 0.6s ease-out;
  flex-direction: column;
  display: flex;
  @media screen and (max-width: 560px) {
    width: 40rem;
    height: fit-content;
  }
`;

export const SmallForecastContainerMap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SmallForecastTitle = styled.p`
  color: #054f7e;
  font-size: 50px;
  font-weight: 800;
`;

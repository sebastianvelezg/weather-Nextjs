import Image from "next/image";

import {
  SmallForecastChanceOfRain,
  SmallForecastChanceRain,
  SmallForecastChanceRainNumber,
  SmallForecastChanceRainText,
  SmallForecastContainerRight,
  SmallForecastSingleContainer,
  SmallForecastTemp,
  SmallForecastTempIcon,
  SmallForecastTempText,
  SmallForecastTempTop,
} from "./SmallForecastCard.styled";

interface SmallWeatherCardProps {
  icon: string;
  condition: string;
  temperature: number;
  chanceOfRain: number;
  date: string;
  maxTemp: number;
  minTemp: number;
}

export const SmallForecastCardOrganism = (props: SmallWeatherCardProps) => {
  const { icon, condition, temperature, chanceOfRain, date, maxTemp, minTemp } =
    props;

  return (
    <SmallForecastSingleContainer>
      <SmallForecastTemp>
        <SmallForecastTempTop>
          <p>{condition}</p>
        </SmallForecastTempTop>
        <SmallForecastTempText>{temperature}°</SmallForecastTempText>
      </SmallForecastTemp>
      <SmallForecastChanceOfRain>
        <SmallForecastTempIcon>
          <Image
            alt=""
            src={`https:${icon}`}
            quality={100}
            fill
            objectFit="cover"
            style={{
              margin: "auto",
            }}
          />
        </SmallForecastTempIcon>
        <SmallForecastChanceRain>
          <SmallForecastChanceRainText>
            chance of rain
          </SmallForecastChanceRainText>
          <SmallForecastChanceRainNumber>
            {chanceOfRain}%
          </SmallForecastChanceRainNumber>
        </SmallForecastChanceRain>
      </SmallForecastChanceOfRain>
      <SmallForecastContainerRight>
        <div>
          <p>{date}</p>
        </div>
        <div>
          <p>wind speeds</p>
          <p>
            max: {maxTemp} min {minTemp}
          </p>
        </div>
      </SmallForecastContainerRight>
    </SmallForecastSingleContainer>
  );
};

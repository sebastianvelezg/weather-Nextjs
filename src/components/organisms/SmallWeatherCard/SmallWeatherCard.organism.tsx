import { useState } from "react";
import {
  SmallForecastButton,
  SmallForecastButtonIcon,
  SmallForecastContainer,
  SmallForecastContainerMap,
  SmallForecastTitle,
  SmallWeatherBox,
  SmallWeatherButtonIcon,
  SmallWeatherCardBody,
  SmallWeatherContainer,
  SmallWeatherDescription,
  SmallWeatherDetailsHumidity,
  SmallWeatherDetailsIcon,
  SmallWeatherDetailsP,
  SmallWeatherDetailsSpan,
  SmallWeatherDetailsTextContainer,
  SmallWeatherDetailsWind,
  SmallWeatherNotFound,
  SmallWeatherNotFoundP,
  SmallWeatherSearchBox,
  SmallWeatherSearchBoxIcon,
  SmallWeatherSearchButton,
  SmallWeatherSearchInput,
  SmallWeatherTemperature,
  SmallWeatherWeatherDetails,
} from "./SmallWeatherCard.styled";
import axios from "axios";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRainbow,
  faLocationDot,
  faMagnifyingGlass,
  faWater,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { SmallForecastCardOrganism } from "../SmallForecastCard/SmallForecastCard.organism";

interface SmallWeatherCardProps {}

interface WeatherData {
  location: {
    name: string;
    country: string;
    region: string;
    lat: string;
    lon: string;
    localtime: string;
  };
  current: {
    last_updated: string;
    temp_c: number;
    temp_f: number;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  forecast: {
    forecastday: [
      {
        date: string;
        day: {
          maxtemp_c: number;
          maxtemp_f: number;
          mintemp_c: number;
          mintemp_f: number;
          avgtemp_c: number;
          avgtemp_f: number;
          maxwind_mph: number;
          maxwind_kph: number;
          totalprecip_mm: number;
          totalprecip_in: number;
          totalsnow_cm: number;
          avgvis_km: number;
          avgvis_miles: number;
          avghumidity: number;
          daily_will_it_rain: number;
          daily_chance_of_rain: number;
          daily_will_it_snow: number;
          daily_chance_of_snow: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          uv: number;
        };
      }
    ];
  };
}

export const SmallWeatherCardOrganism = (props: SmallWeatherCardProps) => {
  const {} = props;

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [location, setLocation] = useState("");
  const [showError, setShowError] = useState(false);
  const [showWeather, setShowWeather] = useState(false);
  const [showForecast, setShowForecast] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get<WeatherData>(
        // `https://api.weatherapi.com/v1/current.json?key=969ebdf30efc4c9784d151802232604&q=${location}`
        `http://api.weatherapi.com/v1/forecast.json?key=969ebdf30efc4c9784d151802232604&q=${location}&days=3`
        // `http://api.weatherapi.com/v1/forecast.json?key=969ebdf30efc4c9784d151802232604&q=medellin&days=1`
      );
      setWeatherData(response.data);
      setLoading(false);
      setShowError(false);
      setShowWeather(true);
      console.log(setShowError);
    } catch (err) {
      console.error(err);
      setError("Error fetching weather data.");
      setLoading(false);
      setShowError(true);
      setShowWeather(false);
      console.log(error);
      console.log(setShowError);
    }
  };

  return (
    <SmallWeatherCardBody>
      <SmallWeatherContainer showError={showError} showWeather={showWeather}>
        <SmallWeatherSearchBox>
          <SmallWeatherSearchBoxIcon>
            <FontAwesomeIcon icon={faLocationDot} size="1x" />
          </SmallWeatherSearchBoxIcon>
          <SmallWeatherSearchInput
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <SmallWeatherSearchButton onClick={handleSearch}>
            <SmallWeatherButtonIcon>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </SmallWeatherButtonIcon>
          </SmallWeatherSearchButton>
        </SmallWeatherSearchBox>
        {loading && <p>Loading...</p>}
        {showError && (
          <SmallWeatherNotFound
            style={{ display: "flex", opacity: 1, scale: "1" }}
          >
            <Image
              alt=""
              src="/404.png"
              width={280}
              height={200}
              quality={100}
            />
            <SmallWeatherNotFoundP>
              Oops! Invalid location :/
            </SmallWeatherNotFoundP>
          </SmallWeatherNotFound>
        )}
        {showWeather && (
          <>
            <SmallWeatherBox>
              <Image
                alt=""
                src={`https:${weatherData!.current.condition.icon}`}
                width={280}
                height={200}
                quality={100}
                style={{
                  margin: "auto",
                }}
              />

              <SmallWeatherTemperature>
                {weatherData!.current.temp_c}°
              </SmallWeatherTemperature>
              <SmallWeatherDescription>
                {weatherData!.current.condition.text}
              </SmallWeatherDescription>
            </SmallWeatherBox>

            <SmallWeatherWeatherDetails>
              <SmallWeatherDetailsHumidity>
                <SmallWeatherDetailsIcon>
                  <FontAwesomeIcon icon={faWater} />
                </SmallWeatherDetailsIcon>
                <SmallWeatherDetailsTextContainer>
                  <SmallWeatherDetailsSpan>
                    {weatherData!.current.humidity}%
                  </SmallWeatherDetailsSpan>
                  <SmallWeatherDetailsP>Humidity</SmallWeatherDetailsP>
                </SmallWeatherDetailsTextContainer>
              </SmallWeatherDetailsHumidity>
              <SmallWeatherDetailsWind>
                <SmallWeatherDetailsIcon>
                  <FontAwesomeIcon
                    icon={faWind}
                    style={{
                      color: "#06283D",
                      fontSize: "26px",
                      marginRight: "10px",
                      marginTop: "6px",
                    }}
                  />
                </SmallWeatherDetailsIcon>
                <SmallWeatherDetailsTextContainer>
                  <SmallWeatherDetailsSpan>
                    {weatherData!.current.wind_kph} Km/h <br />
                  </SmallWeatherDetailsSpan>
                  <SmallWeatherDetailsP>Wind Speed</SmallWeatherDetailsP>
                </SmallWeatherDetailsTextContainer>
              </SmallWeatherDetailsWind>
            </SmallWeatherWeatherDetails>
            <SmallForecastButton onClick={() => setShowForecast(!showForecast)}>
              <p>Forecast</p>
              <SmallForecastButtonIcon>
                <FontAwesomeIcon icon={faRainbow} />
              </SmallForecastButtonIcon>
            </SmallForecastButton>
          </>
        )}
      </SmallWeatherContainer>
      {showForecast && (
        <SmallForecastContainer>
          <SmallForecastTitle>Forecast</SmallForecastTitle>
          {weatherData!.forecast && weatherData!.forecast.forecastday && (
            <SmallForecastContainerMap>
              {weatherData!.forecast.forecastday.map((day) => (
                <SmallForecastCardOrganism
                  key={day.date}
                  temperature={day.day.avgtemp_c}
                  icon={day.day.condition.icon}
                  condition={day.day.condition.text}
                  chanceOfRain={day.day.daily_chance_of_rain}
                  date={day.date}
                  maxTemp={day.day.maxtemp_c}
                  minTemp={day.day.mintemp_c}
                />
              ))}
            </SmallForecastContainerMap>
          )}
        </SmallForecastContainer>
      )}
    </SmallWeatherCardBody>
  );
};

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function MainPage({ city, cities }: any) {
  // data from api
  const [data, setData] = useState({});
  // if api send error
  const [error, setError] = useState(null);
  // Get day
  const day = new Date().getDate();
  const dayName = new Date().getDay();
  const days = [
    "Yakshanba",
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba",
  ];
  const month = new Date().getMonth();
  const months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];

  // create variable for city image url
  let urlImage = "";
  for (const every of cities) {
    if (every[2].city === city) {
      urlImage = every[2].url;
    }
  }

  // Get data from api
  const getData = useCallback(async () => {
    await axios({
      method: "get",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city},uz&APPID=99637f0768a8fd6a66f385fe217aaed2&units=metric`,
    })
      .then((response: any) => {
        setData(response);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      });
  }, [city]);

  // get data every change city name
  useEffect(() => {
    getData();
  }, [getData, city]);

  if (error) {
    return <div>Hech narsa topilmadi</div>
  } else {
    return (
      <div>
        <Box
          className={
            window.innerWidth > 600 ? "text-right pr-24" : "text-center"
          }
        >
          <img src={urlImage} alt={city} className="w-[20rem] h-[12rem]" />
        </Box>
        <Box className="flex justify-start">
          <p className="text-[1.2rem] font-semibold text-slate-200">
            Ob-havo ma'lumotlari
          </p>{" "}
          <LocationOnIcon className="mt-5 ml-8 text-slate-200" />{" "}
          <p className="pt-[0.4rem] pl-4 text-slate-200 font-semibold">
            {city}
          </p>
        </Box>
        <Grid container>
          <Grid
            item
            xs={window.innerWidth > 991 ? 4 : 12}
            className="flex lg:block"
          >
            <img
              //@ts-ignore: Unreachable code error
              src={`https://openweathermap.org/img/wn/${data?.data?.weather[0]?.icon}@2x.png`}
              alt=""
            />
            <p className="text-[1.2rem] font-medium pl-4 text-slate-200">
              {/* @ts-ignore: Unreachable code error */}
              {data?.data?.weather[0]?.main}
            </p>
          </Grid>
          <Grid item xs={window.innerWidth > 991 ? 4 : 12}>
            <p className="text-[1.2rem] font-medium text-slate-200">
              {days[dayName]} {day} - {months[month]}
            </p>
            <p className="text-[3rem] font-bold text-[#fab200] my-0">
              {/* @ts-ignore: Unreachable code error */}
              {data?.data?.main?.temp} &#8451;
            </p>
            <p className="text-[1.2rem] font-medium text-slate-200">
              {/* @ts-ignore: Unreachable code error */}
              {data?.data?.main?.feels_like} &#8451; dek sezilmoqda
            </p>
          </Grid>
          <Grid item xs={window.innerWidth > 991 ? 4 : 12}>
            <p className="text-[1.2rem] font-medium text-slate-200">
              Ko'proq ma'lumot
            </p>

            <p className="text-[1.1rem] font-medium text-slate-200">
              {/* @ts-ignore: Unreachable code error */}
              Shamol tezligi {data?.data?.wind?.speed}m/s
            </p>
            <p className="text-[1.1rem] font-medium text-slate-200">
              {/* @ts-ignore: Unreachable code error */}
              Havo namligi {data?.data?.main?.humidity}%
            </p>

            <p className="text-[1.1rem] font-medium text-slate-200">
              {/* @ts-ignore: Unreachable code error */}
              Atosfera bosimi {data?.data?.main?.pressure} mm.sim.ust
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MainPage;

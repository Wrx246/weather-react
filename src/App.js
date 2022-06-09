import './App.scss';
import Moment from 'moment';
import { AiFillCloud } from 'react-icons/ai';
import { BsFillSunFill } from 'react-icons/bs';
import { FiWind } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const api = {
    key: 'ec3ce23b9a71994fb4dc391b4ae673d6',
    base: 'https://api.openweathermap.org/data/2.5/',
  }

  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState({});
  const [week, setWeek] = useState([]);
  const [fetching, setFetching] = useState(true)

  // Current position
  const lat = navigator.geolocation.getCurrentPosition((position) => {
    setLatitude(position.coords.latitude)
  })

  const lon = navigator.geolocation.getCurrentPosition((position) => {
    setLongitude(position.coords.longitude)
  })

  const [latitude, setLatitude] = useState(lat);
  const [longitude, setLongitude] = useState(lon);


  useEffect(() => {
    axios(`${api.base}weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api.key}`)
      .then(res => {
        setWeather(res.data)
        setFetching(false)
      })
    axios(`${api.base}forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${api.key}`)
      .then(res => {
        const filter = res.data.list.filter((f) => f.dt_txt.includes('15:00:00'))
        setWeek(filter)
      })
  }, [latitude, longitude])


  const fetchWeather = (e) => {
    if (e.key === 'Enter') {
      axios(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`)
        .then(res => {
          setSearch('')
          setWeather(res.data)
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August',
      'September', 'October', 'November', 'December'];
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    let day = days[d.getDay() -1];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  if (fetching !== false) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className='app'>
      <main>
        <div className='search-box'>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyDown={fetchWeather}
            type='search'
            className='search-body'
            placeholder='Search...' />
        </div>
        <div className='app-wrapper'>
          <div className='location-box'>
            <h1>{weather.name}</h1>
            <h3>{dateBuilder(new Date())}</h3>
          </div>
          <div className='weather-box'>
            <div className='weather-main'>
              <div className='weather-main__cloud'>
                {/* {(weather.weather[0].description) !== 'clear sky' ?
                  <AiFillCloud size={50} /> : <BsFillSunFill size={50} />} */}
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt='weather icon' />
                <span>{weather.weather[0].description}</span>
              </div>
              <div className='weather-main__wind'>
                <FiWind size={50} />
                <span>{Math.round(weather.wind.speed)}km/s</span>
              </div>
              <span className='weather-main__temp'>{Math.round(weather.main.temp)}℃</span>
            </div>
            <div className='weather-description'>
              <span>Feels like: {Math.round(weather.main.feels_like)}℃</span>
              <span>Max: {Math.round(weather.main.temp_max)}℃ Min: {Math.round(weather.main.temp_min)}℃</span>
            </div>
          </div>
          <div className='weather-week'>
            {week.map((item) => {
              return (
                <div key={item.dt} className='weather-week__item'>
                  <div className='week-item__day'>
                    {Moment(item.dt_txt).format('dddd')}
                  </div>
                  <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt='weather icon' />
                  <span>{item.weather[0].main}</span>
                  <span>{Math.round(item.main.temp)}℃</span>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

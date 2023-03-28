import { useEffect, useState } from 'react';
import { useLocation } from './hooks/useLocation';
import { getWeather, searchWeather } from './api/apiRequests';
import Loader from './components/Loader/Loader';
import Input from './components/Input/Input';
import WeekBar from './components/WeekBar/WeekBar';
import WeatherBar from './components/WeatherBar/WeatherBar';
import Location from './components/Location/Location';
import Layout from './components/Layout/Layout';
import Chart from './components/Chart/Chart';
import './App.scss';

const App = () => {

  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState({});
  const [week, setWeek] = useState([]);
  const [weekChart, setWeekChart] = useState([]);
  const [fetching, setFetching] = useState(true);

  // Current position
  const [latitude, longitude] = useLocation();

  useEffect(() => {
    if (latitude !== undefined && longitude !== undefined) {
      getWeather(latitude, longitude, 'weather')
        .then(res => {
          setWeather(res.data)
          setFetching(false)
        })
      getWeather(latitude, longitude, 'forecast')
        .then(res => {
          const filter = res.data.list.filter((f) => f.dt_txt.includes('15:00:00'))
          setWeek(filter)
          setWeekChart(res.data.list)
        })
    }
  }, [latitude, longitude])

  const fetchWeather = (e) => {
    if (e.key === 'Enter') {
      searchWeather(search)
        .then(res => {
          setSearch('')
          setWeather(res.data)
        })
    }
  }

  if (fetching !== false) {
    return (
      <Layout>
        <Loader />
      </Layout>
    )
  }

  return (
    <Layout>
      <header className='search-box'>
        <Input
          search={search}
          setSearch={setSearch}
          fetchWeather={fetchWeather} />
      </header>
      <main className='app-wrapper'>
        <Location weather={weather} />
        <WeatherBar weather={weather} />
        <WeekBar week={week} />
      </main>
      <footer>
        <Chart week={week} weekChart={weekChart} />
      </footer>
    </Layout>
  );
}

export default App;

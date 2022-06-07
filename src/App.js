import './App.scss';
import { AiFillCloud } from 'react-icons/ai';
import { FiWind } from 'react-icons/fi';

const App = () => {


  const dateBuilder = (d) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August',
      'September', 'October', 'November', 'December'];
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }


  return (
    <div className='app'>
      <main>
        <div className='search-box'>
          <input type='search' className='search-body' placeholder='Serach...' />
        </div>
        <div className='app-wrapper'>
          <div className='location-box'>
            <h1>Minsk</h1>
            <h3>{dateBuilder(new Date())}</h3>
          </div>
          <div className='weather-box'>
            <div className='weather-main'>
              <div className='weather-main__cloud'>
                <AiFillCloud size={50} />
                <span>Cloud</span>
              </div>
              <div className='weather-main__wind'>
                <FiWind size={50} />
                <span>Wind</span>
              </div>
              <span className='weather-main__temp'>25℃</span>
            </div>
            <div className='weather-description'>
              <span>Feels like: 25 ℃</span>
              <span>Max: 27 ℃ Min: 20 ℃</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

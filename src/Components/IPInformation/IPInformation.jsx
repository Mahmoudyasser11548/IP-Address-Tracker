import './IPInformation.css'
import searchIcon from '../../assets/imgs/search-eye-line.png'
import Container from '../Container/Container'
import { useEffect, useState } from 'react';
import Map from '../MapContainer/MapContainer';

const IPInformation = () => {
  const [ipValue, setIpValue] = useState('');
  const [address, setAddress] = useState(null);

  const checkIpAddress = 
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi
  
  const checkDomain = 
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z])+/
  
  useEffect(() => { 
    try {
      const getInitialData = async () => { 
        const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=
        at_NRVtqEBMr3BaIgZ09Wa7RzkxCJeY7&ipAddress=8.8.8.8`);
        
        const data = await res.json();
        setAddress(data)
      }

      getInitialData()

    } catch(err) { 
      console.trace(err);
    }
  }, [])


  const getAddedData = async () => { 
    const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=
    at_NRVtqEBMr3BaIgZ09Wa7RzkxCJeY7 & ${
      checkIpAddress.test(ipValue) ? `ipAddress=${ipValue}` : checkDomain.test(ipValue) ?
      `domain=${ipValue}`: ''
    }`);
    const data = await res.json();
    setAddress(data)
  }

  const handleSubmit = (e) => { 
    e.preventDefault();
    getAddedData();
    setAddress('')
  }

  return (  
    <>
      <div className="info-map">
        <Container>
          <h2 className='title'>IP Address Tracker</h2>

          <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text"
              value={ipValue}
              placeholder='Search for any IP Address or Domain'
              onChange={(e) => setIpValue(e.target.value)}
              required
            />
            <button type="submit" className='search-btn'>
              <img src={ searchIcon } alt="" />
            </button>
          </form>
        </Container>
      </div>
      {address && (
        <>
          <Container>
            <div className="box-info">
              <div className="box">
                <h6>ip address</h6>
                <span>{ address.ip}</span>
              </div>
              <div className="box">
                <h6>location</h6>
                <span>{address.location.city}, {address.location.region}</span>
              </div>
              <div className="box">
                <h6>time zone</h6>
                <span>{address.location.timezone}</span>
              </div>
              <div className="box">
                <h6>isp</h6>
                <span>{address.isp}</span>
              </div>
            </div>
          </Container>

          <div className="map">
            <Map lat={address.location.lat} lng={address.location.lng} />
          </div>
        </>
      )}
    </>
  );
}

export default IPInformation;
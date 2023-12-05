import React,{useState} from 'react'
import getData from './Weather';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [apiData, setApiData]= useState(null);

  const handleKeyDown =(e)=>{
    if (e.key==='Enter'){
        handleInput();
    }
  }

  async function handleInput(){
    try{
      const data = await getData(inputValue);
      setApiData(data);
    } catch(error){
      console.error('정보 가져오기 에러',error);
    }
  }


  return (
    <div className="App">
      <div className="App-container">
          <input id="search" placeholder="도시를 입력하세요" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}>
          </input>
       
      {apiData &&(
        <div className="weather-container">
          <div className='cityName'>
            {apiData.name}
          </div>
          <div className='temperature'>
            {Math.round(((apiData.main.temp-273.15)*10))/10} °C
          </div>
          <div className='weatherMain'>
            {apiData.weather[0].main}
          </div>      
        </div>
      )}
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import TextClock from './time';

function updateTimeColor(elementId){
  const timeTextElement = document.getElementsByClassName(elementId);
  console.log(timeTextElement)
  for (let i = 0; i < timeTextElement.length; i++) {
    timeTextElement[i].style.color = '#999';
  }
}

function App() {
  const textTime = new TextClock();
  const currentTime = textTime.formatTimeAsText();
  updateTimeColor(currentTime[3]);
  updateTimeColor(currentTime[2]);
  updateTimeColor(currentTime[1]);
  updateTimeColor(currentTime[0]);
  console.log(currentTime)
  

  return (
    <div className="App">
      <header className="App-header">
        <div className="text-container">
          <div className="lineOne">
            <div className="itis">IT</div>
            <div className="letter">L</div>
            <div className="itis">IS</div>
            <div className="letter">ASOKMN</div>
          </div>

          <div className="lineTwo">
            <div className="aquarter">A</div>
            <div className="letter">C</div>
            <div className="aquarter">QUARTER</div>
            <div className="letter">DC</div>
          </div>

          <div className="lineThree">
            <div className="twenty">TWENTY</div>
            <div className="five">FIVE</div>
            <div className="letter">X</div>
          </div>

          <div className="lineFour">
            <div className="half">HALF</div>
            <div className="letter">S</div>
            <div className="ten">TEN</div>
            <div className="letter">F</div>
            <div className="to">TO</div>
          </div>

          <div className="lineFive">
            <div className="past">PAST</div>
            <div className="letter">ERU</div>
            <div className="nineNumber">NINE</div>
          </div>

          <div className="lineSix">
            <div className="oneNumber">ONE</div>
            <div className="sixNumber">SIX</div>
            <div className="threeNumber">THREE</div>
          </div>

          <div className="lineSeven">
            <div className="fourNumber">FOUR</div>
            <div className="fiveNumber">FIVE</div>
            <div className="twoNumber">TWO</div>
          </div>

          <div className="lineEight">
            <div className="eightNumber">EIGHT</div>
            <div className="elevenNumber">ELEVEN</div>
          </div>

          <div className="lineNine">
            <div className="sevenNumber">SEVEN</div>
            <div className="twelveNumber">TWELVE</div>
          </div>

          <div className="lineTen">
            <div className="tenNumber">TEN</div>
            <div className="letter">SE</div>
            <div className="oclock">OCLOCK</div>
          </div>

          <div className="lineEleven">
            <div className="letter">SEKLOPM</div>
            <div className="am">AM</div>
            <div className="pm">PM</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

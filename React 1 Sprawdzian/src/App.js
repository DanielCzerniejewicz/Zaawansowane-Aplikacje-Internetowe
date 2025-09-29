import logo from './logo.svg';
import './App.css';
import kwadrat from './kwadrat.png';

function Pole()
{
  let a = prompt("Podaj długość boku kwadratu:");
  if(a >= 1)
  {
    let pole = a * a;
    return (
      <div>
        <p id="Pole">Pole kwadratu o boku {a} wynosi {pole}</p>
      </div>
    );
  }
  else
  {
    return (
      <div>
        <p id="Pole">Błąd: Długość boku musi być liczbą dodatnią.</p>
      </div>
    );
  }
  
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={kwadrat} alt="logo" />
        <p id="SwiatGeometrii">
          Witaj w świecie geometrii!
        </p>
        <Pole />
      </header>
    </div>
  );
}

export default App;

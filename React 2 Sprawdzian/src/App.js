import './App.css';

const tab = [
  {
    Lp:1,
    Roslina:"Kwiaty",
    Rodzaj:"Polne",
    podtyp:{
      typ1:"Mak",
      typ2:"Rumianek"
    },
    Obrazek: "polne.png"
  },
  {
    Lp:2,
    Roslina:"Drzewa",
    Rodzaj:"Lisciaste",
    podtyp:{
      typ1:"Dąb",
      typ2:"Buk"
    },
    Obrazek: "lisciaste.png"
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 id="MR">Moje Rośliny</h2>
        <table border="1">
          <tr>
            <td>Lp</td>
            <td>Roślina</td>
            <td>Rodzaj</td>
            <td>Obrazek</td>
          </tr>
          {tab.map((el)=>
            <tr>
              <td width={"100px"}>{el.Lp}</td>
              <td width={"150px"}>{el.Roslina}</td>
              <td width={"100px"}>{el.Rodzaj}
                <ul style={{textAlign: "left"}} >
                  <li>{el.podtyp.typ1}</li>
                  <li>{el.podtyp.typ2}</li>
                </ul>
              </td>
              <td width={"200px"}><img src={require(`./img/${el.Obrazek}`)} alt={el.Roslina} width="200px"/></td>
            </tr>
          )}
        </table>
      </header>
    </div>
  );
}

export default App;

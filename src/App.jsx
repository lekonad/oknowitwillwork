import { useState } from 'react'
import './App.css'


function App() {

  const API_URL = "https://www.johanovsti.eu/RestAPI/api.php/filmy";

  const [data, setData] = useState([]);

  const [hledJmeno, setHledJmeno] = useState("");
  const [hledZanr, setHledZanr] = useState("");

  const [uniqZanry, setUniqZanry] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then((response) => response.json())
    .then((date) => {
      setData(data);


      //mam vsechna data -> vyfiltrujeme zanry
      const zanry = [... new Set(data.map((item) => item.zanr))];
    })
    .catch((error) => console.error(error))
  }, []);

  //funkce která vytáhne vyfiltrovaná data z těch všech
  const getFilteredData = () => {
    return data.filter((item) => {
      //filtrování názvu filmu podle txt pole
      const obsahujeNazev = item.nazev.toLoweCase().includes(hledJmeno.toLowerCase());

      //filtrování podle žánru
      let maZanr = true;

      if (hledZanr != "") {
        maZanr = (item.zanr == hledZanr);
      }

      return (obsahujeNazev && maZanr);
    })
  };


    return(
      <div>
        <h1>React Filter Filmy</h1>
      </div>
    )
}

export default App
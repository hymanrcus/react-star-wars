import './App.css';
import Header from './components/NavBar/NavBar';
import Starshiplist from './pages/StarshipsList/StarshipsList';
import StarShipDetails from './pages/StarshipPage/StarshipPage';
import {Route, Routes} from 'react-router-dom';



function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Starshiplist/>} />
      <Route path='/starship' element={<StarShipDetails/>} />
    </Routes>
    </>
  );
}

export default App;
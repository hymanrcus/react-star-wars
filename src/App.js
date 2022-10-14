import './App.css';
import NavBar from './components/NavBar/NavBar';
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipPage from './pages/StarshipPage/StarshipPage';
import {Route, Routes} from 'react-router-dom';



function App() {
  return (
    <>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<StarshipList/>} />
      <Route path='/starship' element={<StarshipPage/>} />
    </Routes>
    </>
  );
}

export default App;
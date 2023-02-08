import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailMovies from './pages/DetailMovies/DetailMovie';
import Home from './pages/Home/Home';
import Person from './pages/Person/Person';
import Search from './pages/Search/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/:person' element={<Person />} />
        <Route path='/search' element={<Search />} />
        <Route path='/detail-movie' element={<DetailMovies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

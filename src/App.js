import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/HomePage/Home';
import SearchResult from './Components/SearchResult/SearchResult';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/search" element={<SearchResult />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

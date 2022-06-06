// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/App.css';
import Home from './Dashboard';
import Login from './Login';

function App() {
  return (
    // <Login />
    <BrowserRouter>
      <div className="App">
        {/* <div className="content"> */}
        <Routes>
          <Route index element={<Login />} />
          <Route path="home" element={<Home />} />
        </Routes>
        {/* </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

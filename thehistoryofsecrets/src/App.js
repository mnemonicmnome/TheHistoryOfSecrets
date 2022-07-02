import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ShiftCipherPage from './page/ShiftPage';
import AffineCipherPage from './page/AffinePage';
import HomePage from './page/HomePage';
import Navigation from './helperComponents/Navigation';
import AtbashCipherPage from './page/AtbashPage';

function App() {
  return (
    <>
    {/* <Navigation/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Navigation/>}>
          <Route index element = {<HomePage/>} />
          <Route path="/shift" element = {<ShiftCipherPage/>} />
          <Route path="/affine" element = {<AffineCipherPage/>} />
          <Route path="/atbash" element = {<AtbashCipherPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

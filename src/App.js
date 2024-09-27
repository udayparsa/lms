import logo from './logo.svg';
import './App.css';
import Register from './ui/register';
import Login from './ui/login';
import Home from './ui/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

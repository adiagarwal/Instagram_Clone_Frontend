import './App.css';
import Navbar from './Components/Nav/Nav';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Signup from './Components/pages/Signup';
import SignIn from './Components/pages/SignIn';
import Profile from './Components/pages/Profile';
import Home from './Components/pages/Home';

const App = () =>{
  return (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </header>
    </div>
  </BrowserRouter>
  );
}

export default App;

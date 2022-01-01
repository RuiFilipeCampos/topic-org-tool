import './App.css';
import routes from './routes';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Login } from './pages/auth';

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Login/>}/>

      <Route path="/register" element={<Login/>}/>
      <Route path="/register/success" element={<Login/>}/>
      <Route path="/register/failure" element={<Login/>}/>

      <Route path="/dashboard" element={<Login/>}/>
    </Routes>
  </>;
}

export default App;

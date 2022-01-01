import logo from './logo.svg';
import './App.css';
import router from './routes';
import {
  BrowserRouter,
  Switch,
} from "react-router-dom";

function App() {
  return <>
    <BrowserRouter>
      <Switch>
        {router}
      </Switch>
    </BrowserRouter>
  </>;
}

export default App;

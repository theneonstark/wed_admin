import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import AppRoute from './Routes/AppRoute';

function App() {
  return (
    <BrowserRouter>
      {/* <Header/> */}
      <AppRoute/>    
    </BrowserRouter>
  );
}

export default App;

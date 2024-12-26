import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Sidebar from './components/ui/Sidebar';
import Header from './components/ui/Header';
import Charts from './components/ui/Charts';
import VendorCharts from './components/ui/VendorCharts';
import Table from './components/ui/Table';
import Signup from './components/auth/Signup';
import AppRoute from './Routes/AppRoute';
import VendorSidebar from './components/ui/VendorSidebar';

function App() {
  return (
    <BrowserRouter>
      {/* <Header/> */}
      <AppRoute/>    
    </BrowserRouter>
  );
}

export default App;

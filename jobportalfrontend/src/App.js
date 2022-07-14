
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import HomeScreen from "./Components/Home Screen/Navbar";
import Signup from "./Components/Sign-up and Login/Signup";
import Login from "./Components/Sign-up and Login/Login";
import CompanyDetailsPage from "./Components/Detail Forms/CompanyDetailForm";
import TalentDetailsPage from "./Components/Detail Forms/TalentDetailForm";
import {Route,Routes,BrowserRouter} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Home/" element={<HomeScreen />} />
        <Route path="register/" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
  }
export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import HomeScreen from "./Components/Home Screen/Navbar";
import Signup from "./Components/Sign-up and Login/Signup";
import Login from "./Components/Sign-up and Login/Login";
import CompanyDetailsPage from "./Components/Detail Forms/CompanyDetailForm";
import TalentDetailsPage from "./Components/Detail Forms/TalentDetailForm";
import UpdateCompanyDetails from "./Components/Detail Forms/UpdateCompanyDetailForm";
import CompanyJobPostForm from "./Components/Job Post/JobPostForm";
import UpdateJobPostForm from "./Components/Job Post/UpdateJobPost";
import UpdateTalentDetails from "./Components/Detail Forms/UpdateTalentDetailForm";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import env from "react-dotenv";
import { LoginUser } from "./Components/Services/redux/Actions";
import { useDispatch } from "react-redux";
import {useEffect} from "react"
function App() {
  const dispatch = useDispatch()
  const loginHandler = () => {
    const login = {"email": "shaikh.affan253@gmail.com", "password": "tMKvnksDwq"}
    dispatch(LoginUser(login))
  }
  useEffect(() => {
    loginHandler()
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home/" element={<HomeScreen />} />
        <Route path="login/" element ={<Login />} /> 
        <Route path="register/" element={<Signup />} />
        <Route path="update/talent" element={<UpdateTalentDetails />} />
        <Route path="update/company" element={<UpdateCompanyDetails />} />
        <Route path="company/job/add" element={<CompanyJobPostForm />} />
        <Route path="company/job/edit" element={<UpdateJobPostForm />} />
        <Route path="detail/company" element={<CompanyDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

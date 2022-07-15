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

import { LoginUser, LogoutUser } from "./Components/Services/redux/Actions";
import { useEffect } from "react";


function App() {

// const dispatch = useDispatch()
// const access = useSelector(state => state.jobportal.data.access)
// const refresh = useSelector(state => state.jobportal.data.refresh)
// console.log(access)

// const login = {"email":"shaikh.affan253@gmail.com", "password": "R5xJcUr39L"}
// const token = {"access": access, "refresh":refresh}
// const backend = () => {
//   dispatch(LoginUser(login))

// }
// useEffect(() => {backend()},[] )
// dispatch(LogoutUser(token))

 
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
      </Routes>
    </BrowserRouter>
  );
}
export default App;

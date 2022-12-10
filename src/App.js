import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyProfile from "./components/profile/MyProfile/MyProfile";
import SignIn from "./components/SignIn";
import Home from "./pages/Home";
import PageHome from "./components/pagehome/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Home>
            <PageHome />
          </Home>
        } />
        <Route path="/Profile" element={
          <Home>
            <MyProfile />
          </Home>
        } />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};
export default App;

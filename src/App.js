import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyProfile from "./components/profile/MyProfile/MyProfile";
import SignIn from "./components/SignIn";
import Home from "./pages/Home";
import PageHome from "./components/pagehome/HomePage";
import FriendsProfile from "./components/profile/FriendsProfile/FriendsProfile";
import ViewPost from "./components/viewSinglePost/ViewPost";
import SavedPosts from "./components/savedPosts/SavedPost";
import RenderPosts from "./components/savedPosts/RenderPosts";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home>
              <PageHome />
            </Home>
          }
        />
        <Route
          path="/profile"
          element={
            <Home>
              <MyProfile />
            </Home>
          }
        />
        <Route
          path={`/profile/:email`}
          element={
            <Home>
              <FriendsProfile />
            </Home>
          }
        />
        <Route
          path={`/view-post/:id`}
          element={
            <Home>
              <ViewPost />
            </Home>
          }
        />
        <Route
          path="/saved-posts"
          element={
            <Home>
              <RenderPosts />
            </Home>
          }
        />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};
export default App;
